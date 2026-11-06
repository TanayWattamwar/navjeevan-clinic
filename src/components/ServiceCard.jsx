import { ArrowUpRight, HeartPulse, Activity, ShieldCheck, Baby, Thermometer, Bone, Microscope, Sparkles, Gauge, ClipboardCheck, Stethoscope } from "lucide-react";
const iconMap = {HeartPulse,Activity,ShieldCheck,Baby,Thermometer,Bone,Microscope,Sparkles,Gauge,ClipboardCheck};
export default function ServiceCard({item, index}) {
  const [title, desc, iconName] = item;
  const Icon = iconMap[iconName] || Stethoscope;
  return <article className="service-card">
    <div className="service-icon"><Icon size={23}/></div>
    <span className="card-index">0{index+1}</span>
    <h3>{title}</h3><p>{desc}</p>
    <a href="/#appointment" className="card-link">Enquire about care <ArrowUpRight size={16}/></a>
  </article>;
}
