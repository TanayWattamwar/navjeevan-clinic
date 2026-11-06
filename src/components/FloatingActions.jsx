import { Phone, MessageCircle } from "lucide-react";
import { clinic } from "../data/site";

export default function FloatingActions() {
  return <div className="floating-actions">
    <a className="float-call" href={`tel:${clinic.phoneLink}`} aria-label="Call Navjeevan Clinic"><Phone size={20}/><span>Call now</span></a>
    <a className="float-whatsapp" href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={21}/></a>
  </div>;
}
