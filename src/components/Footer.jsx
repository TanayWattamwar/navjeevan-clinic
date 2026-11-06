import { MapPin, Phone, Mail, Instagram, MessageCircle, ArrowUpRight, Leaf } from "lucide-react";
import { clinic } from "../data/site";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="brand footer-logo"><span className="brand-mark"><Leaf size={22}/></span><span><strong>Navjeevan Clinic</strong><small>CARE THAT GROWS WITH YOU</small></span></div>
        <p>Thoughtful care for your health, skin and hair — with a personal touch.</p>
        <div className="socials">
          <a href={clinic.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
          <a href={clinic.maps} target="_blank" rel="noreferrer" aria-label="Google Maps"><MapPin/></a>
          <a href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
          {clinic.email && <a href={`mailto:${clinic.email}`} aria-label="Email"><Mail/></a>}
        </div>
      </div>
      <div><h4>Explore</h4><a href="/">Home</a><a href="/general-treatments">General Health</a><a href="/skin-therapies">Skin & Glow Therapies</a><a href="/hair-care">Hair & Scalp Care</a></div>
      <div><h4>Get in touch</h4><p className="footer-contact"><MapPin size={17}/>{clinic.address}</p><a className="footer-contact" href={`tel:${clinic.phoneLink}`}><Phone size={17}/>{clinic.phone}</a><p className="footer-contact"><Mail size={17}/>{clinic.email || "Clinic email address to be added"}</p></div>
      <div className="footer-hours"><h4>Clinic hours</h4><p>Morning <strong>{clinic.timings.morning}</strong></p><p>Evening <strong>{clinic.timings.evening}</strong></p><a href={clinic.maps} target="_blank" rel="noreferrer" className="text-link">Get directions <ArrowUpRight size={15}/></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Navjeevan Clinic. All rights reserved.</span><span>Designed with care for healthier tomorrows.</span></div>
  </footer>;
}
