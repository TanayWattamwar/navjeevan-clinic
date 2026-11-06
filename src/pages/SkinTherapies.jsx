import { Sparkles, ArrowRight } from "lucide-react";
import { skinTherapies } from "../data/treatments";
import SectionHeading from "../components/SectionHeading";
import TherapyCard from "../components/TherapyCard";

export default function SkinTherapies() {
  return <><section className="page-hero skin-hero"><div className="container page-hero-inner"><span className="eyebrow light">SKIN & GLOW THERAPIES</span><h1>Feel comfortable<br/>in your skin. <em>Glow naturally.</em></h1><p>Explore aesthetic and skin-refreshing options selected around your skin type, concerns and goals.</p><a href="/#appointment" className="button button-gold">Enquire about a treatment <ArrowRight size={17}/></a><div className="page-hero-art"><Sparkles size={132}/></div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="A LITTLE CARE, A LOT OF CONFIDENCE" title="Discover skin & glow therapies" text="Every skin is different. A consultation helps determine which treatment, if any, is appropriate for you."/><div className="therapy-grid">{skinTherapies.map((item,i)=><TherapyCard item={item} index={i} key={item.name}/>)}</div><div className="notice-strip"><Sparkles size={22}/><p><strong>Your skin deserves individual attention.</strong> Results vary by person. A clinician will assess your skin, discuss suitability, possible risks and aftercare before any procedure.</p></div></div></section></>;
}
