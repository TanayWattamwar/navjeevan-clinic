# Navjeevan Clinic Website

A responsive React + Vite website for Navjeevan Clinic, featuring Dr. Sonal Sharad Kute.

## Stack
- React 18 + Vite
- React Router
- Tailwind CSS v4 (Vite plugin) plus custom responsive CSS
- Lucide React icons
- Vercel serverless function + Nodemailer for appointment email delivery

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build
```bash
npm run build
npm run preview
```

## Email setup (secure)
1. Create a Gmail App Password for the clinic Google account (Google account 2-Step Verification must be enabled).
2. In Vercel → Project → Settings → Environment Variables, add:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_SECURE` = `true`
   - `SMTP_USER` = clinic Gmail address
   - `SMTP_APP_PASSWORD` = Gmail App Password (remove spaces)
   - `CLINIC_EMAIL` = destination email address for enquiries
   - `MAIL_FROM_NAME` = `Navjeevan Clinic`
3. Redeploy after adding variables.

For local API testing, deploy to Vercel or run the Vercel development server (`npx vercel dev`) after installing the Vercel CLI. The Vite-only dev server serves the frontend; it does not execute `/api/appointments`.

**Never put SMTP credentials or a Gmail App Password in `VITE_` variables or frontend source code.**

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add the email environment variables listed above.
5. Deploy. Vercel serves the `/api/appointments` serverless function automatically.

## Before publishing
- Replace the Google Maps review URL if the clinic has a dedicated review link.
- Add the clinic email address in `src/data/site.js` (currently intentionally blank).
- Verify all qualifications, service descriptions, timings, address, and review rating with the clinic.
- Replace Unsplash image URLs if the clinic has approved treatment photographs.
- Do not publish fabricated testimonials, ratings, patient counts, or experience statistics. The review section links to Google Maps and clearly asks for verified review content.

## Notes
- Appointment requests are emailed only after the serverless endpoint is configured with valid environment variables.
- The appointment form does not claim success if the email service is not configured.
- Medical service information is general and is not a substitute for an in-person medical consultation.


## Therapy photography
Skin therapy cards use individually selected Unsplash image URLs chosen to visually correspond to each treatment (facial cleansing/hydration, peel, skin care, mask, vitamin C serum, microdermabrasion, facial treatment, oxygen/glow facial, skin polishing, microneedling and skin examination). If replacing photos later, keep the image topic aligned with its treatment name and confirm the source license before commercial use.


- Oxygeno Glow Therapy uses the clinic-provided image at `public/images/oxygeno-glow-therapy.jpg`.
- Hair and scalp therapy cards have dedicated topic-matched image URLs.


## Google Maps
The clinic's supplied Google Maps place listing is configured for map, directions and review links. The embedded map uses the supplied clinic coordinates (18.4831097, 73.8125275).


## Clinic contact email
Official clinic email configured in the website contact/footer: `navjeevanclinic.drsonal@gmail.com`. Use this address for `SMTP_USER` and `CLINIC_EMAIL` only if the Gmail account is the same mailbox used to send and receive appointment enquiries. Add the Gmail App Password separately as a private environment variable.
