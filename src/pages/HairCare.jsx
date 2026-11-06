import { Scissors, ArrowRight } from "lucide-react";
import { hairTreatments } from "../data/treatments";
import SectionHeading from "../components/SectionHeading";
import TherapyCard from "../components/TherapyCard";

export default function HairCare() {
  return <><section className="page-hero hair-hero"><div className="container page-hero-inner"><span className="eyebrow light">HAIR & SCALP CARE</span><h1>Healthy hair starts<br/><em>with scalp care.</em></h1><p>Understand your scalp and hair concerns with a personalised, consultation-led approach.</p><a href="/#appointment" className="button button-gold">Book a hair consultation <ArrowRight size={17}/></a><div className="page-hero-art"><Scissors size={132}/></div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="CARE FOR YOUR CROWN" title="Hair & scalp care options" text="Hair fall and scalp concerns can have different causes. A proper assessment helps guide the right care plan."/><div className="therapy-grid hair-grid">{hairTreatments.map((item,i)=><TherapyCard item={item} index={i} key={item.name}/>)}</div></div></section></>;
}
