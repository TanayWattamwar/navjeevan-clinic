import nodemailer from "nodemailer";

const clean = (value = "") => String(value).trim().slice(0, 3000);

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name, phone, email, date, slot, category, message } = req.body || {};
  const safe = {
    name: clean(name), phone: clean(phone), email: clean(email),
    date: clean(date), slot: clean(slot), category: clean(category), message: clean(message)
  };

  if (safe.name.length < 2 || !/^[0-9+()\\s-]{8,18}$/.test(safe.phone) || !safe.date) {
    return res.status(400).json({ error: "Please enter a valid name, phone number and preferred date." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_APP_PASSWORD, CLINIC_EMAIL, MAIL_FROM_NAME } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_APP_PASSWORD || !CLINIC_EMAIL) {
    return res.status(503).json({ error: "Online enquiries are not configured yet. Please call or WhatsApp the clinic directly." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: String(SMTP_SECURE ?? "true") === "true",
      auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD }
    });

    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME || "Navjeevan Clinic"}" <${SMTP_USER}>`,
      to: CLINIC_EMAIL,
      replyTo: safe.email || SMTP_USER,
      subject: `Appointment enquiry — ${safe.name}`,
      text: [
        "New appointment enquiry for Navjeevan Clinic",
        `Name: ${safe.name}`, `Phone: ${safe.phone}`, `Email: ${safe.email || "Not provided"}`,
        `Preferred date: ${safe.date}`, `Preferred slot: ${safe.slot}`,
        `Category: ${safe.category}`, `Message: ${safe.message || "Not provided"}`
      ].join("\\n")
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Appointment email failed:", error?.message);
    return res.status(500).json({ error: "We couldn't send your enquiry. Please call or WhatsApp the clinic." });
  }
}
