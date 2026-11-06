import { ArrowUpRight, Check } from "lucide-react";
export default function TherapyCard({item, index}) {
  return <article className="therapy-card">
    <div className="therapy-image-wrap">
      <img src={item.image} alt={`${item.name} treatment at a professional clinic`} loading="lazy"/>
      <span className="therapy-tag">{item.tag}</span>
    </div>
    <div className="therapy-body">
      <span className="card-index">TREATMENT 0{index+1}</span>
      <h3>{item.name}</h3><p>{item.desc}</p>
      <ul>{item.points.map(point=><li key={point}><Check size={15}/>{point}</li>)}</ul>
      <a href="/#appointment" className="card-link">Ask about this therapy <ArrowUpRight size={16}/></a>
    </div>
  </article>;
}
