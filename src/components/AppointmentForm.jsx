import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const initial = { name:"", phone:"", email:"", date:"", slot:"Morning", category:"General Health", message:"" };

export default function AppointmentForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({type:"", text:""});
  const [busy, setBusy] = useState(false);
  const update = (e) => setForm({...form, [e.target.name]:e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    setStatus({type:"",text:""});
    setBusy(true);
    try {
      const response = await fetch("/api/appointments", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request right now.");
      setStatus({type:"success",text:"Your appointment enquiry has been sent. The clinic will contact you to confirm."});
      setForm(initial);
    } catch (error) {
      setStatus({type:"error",text:error.message || "Something went wrong. Please call or WhatsApp the clinic."});
    } finally { setBusy(false); }
  };

  return <form className="appointment-form" onSubmit={submit}>
    <div className="form-row">
      <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" required minLength="2" /></label>
      <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91" required pattern="[0-9+()\\s-]{8,18}" /></label>
    </div>
    <div className="form-row">
      <label>Email address <span className="optional">Optional</span><input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
      <label>Preferred date<input type="date" name="date" value={form.date} onChange={update} min={new Date().toISOString().slice(0,10)} required /></label>
    </div>
    <div className="form-row">
      <label>Preferred slot<select name="slot" value={form.slot} onChange={update}><option>Morning</option><option>Evening</option></select></label>
      <label>I'm interested in<select name="category" value={form.category} onChange={update}><option>General Health</option><option>Skin & Glow Therapies</option><option>Hair & Scalp Care</option><option>Other / Not sure</option></select></label>
    </div>
    <label>How can we help?<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Share a brief note about your concern (optional)." /></label>
    <button className="button button-primary submit-button" disabled={busy}>{busy ? "Sending enquiry…" : "Send appointment enquiry"} <Send size={17}/></button>
    {status.text && <div className={`form-status ${status.type}`} role="status">{status.type === "success" ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}<span>{status.text}</span></div>}
    <p className="form-note">Submitting this form sends an enquiry only. Your appointment is confirmed by the clinic directly.</p>
  </form>;
}
