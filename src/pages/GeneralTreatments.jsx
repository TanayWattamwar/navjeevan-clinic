import { HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";
import { generalTreatments } from "../data/treatments";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

export default function GeneralTreatments() {
  return <><section className="page-hero"><div className="container page-hero-inner"><span className="eyebrow light">GENERAL HEALTH & MEDICAL CARE</span><h1>Good health begins<br/><em>with being heard.</em></h1><p>Thoughtful consultations and everyday medical care for you and your family at Navjeevan Clinic.</p><a href="/#appointment" className="button button-gold">Book a consultation <ArrowRight size={17}/></a><div className="page-hero-art"><HeartPulse size={130}/></div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="OUR GENERAL SERVICES" title="Care for everyday health concerns" text="Each consultation begins with understanding your symptoms and health history. The doctor will recommend an appropriate next step."/><div className="service-grid">{generalTreatments.map((item,i)=><ServiceCard item={item} index={i} key={item[0]}/>)}</div><div className="notice-strip"><ShieldCheck size={22}/><p><strong>Care that starts with a conversation.</strong> Service suitability, diagnosis and treatment are determined by the doctor after an individual assessment.</p></div></div></section></>;
}
