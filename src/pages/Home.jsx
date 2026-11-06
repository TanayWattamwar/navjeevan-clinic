import { ArrowRight, ArrowUpRight, BadgeCheck, Clock3, MapPin, ShieldCheck, Sparkles, Star, Stethoscope, HeartPulse, Scissors, CalendarDays, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { clinic } from "../data/site";
import { generalTreatments, skinTherapies, hairTreatments } from "../data/treatments";
import SectionHeading from "../components/SectionHeading";
import AppointmentForm from "../components/AppointmentForm";
import ServiceCard from "../components/ServiceCard";

const categories = [
  {title:"General Health",desc:"Everyday medical care, checkups and guidance for your wellbeing.",to:"/general-treatments",icon:HeartPulse,count:"10 care areas",image:"photo-1576091160399-112ba8d25d1d"},
  {title:"Skin & Glow",desc:"Clinician-guided aesthetic therapies for refreshed, healthy-looking skin.",to:"/skin-therapies",icon:Sparkles,count:"11 therapies",image:"photo-1616394584738-fc6e612e71b9"},
  {title:"Hair & Scalp",desc:"Personalised support for scalp health, hair fall and hair vitality.",to:"/hair-care",icon:Scissors,count:"3 care plans",image:"photo-1522337360788-8b13dee7a37e"}
];

export default function Home() {
  return <>
    <section className="skin-ticker-section" aria-label="Explore skin and glow therapies">
      <div className="container skin-ticker-heading">
        <span className="eyebrow">A GLOW FOR EVERY SKIN JOURNEY</span>
        <h2>Explore our skin therapies</h2>
      </div>
      <div className="skin-ticker-viewport">
        <div className="skin-ticker-track">
          {[...skinTherapies, ...skinTherapies].map((therapy, index) => (
            <a className="skin-ticker-item" href="/skin-therapies" key={`${therapy.name}-${index}`} aria-label={`Explore ${therapy.name}`}>
              <span className="skin-ticker-circle">
                <img src={therapy.image} alt="" loading="lazy" />
              </span>
              <span className="skin-ticker-label">{therapy.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container skin-ticker-foot"><span>Discover all 11 skin & glow therapies</span><Link to="/skin-therapies">View treatments <ArrowUpRight size={15}/></Link></div>
    </section>

    <section className="hero">
      <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow light"><span className="eyebrow-dot"/> YOUR HEALTH. YOUR CONFIDENCE. OUR CARE.</span>
          <h1>Care that helps you feel <em>your best.</em></h1>
          <p className="hero-lead">Personalised medical, skin and hair care in a welcoming space — guided by Dr. Sonal Sharad Kute.</p>
          <div className="hero-actions"><a href="#appointment" className="button button-gold">Book an appointment <ArrowRight size={17}/></a><a href="#doctor" className="hero-text-link">Meet your doctor <ArrowUpRight size={16}/></a></div>
          <div className="hero-trust"><span><ShieldCheck size={17}/> Personalised consultations</span><span><BadgeCheck size={17}/> Doctor-led care</span></div>
        </div>
        <div className="doctor-hero-card">
          <div className="doctor-photo-frame"><img src="/images/dr-sonal-kute.jpg" alt="Dr. Sonal Sharad Kute at Navjeevan Clinic"/></div>
          <div className="doctor-card-caption"><div><span className="verified"><BadgeCheck size={15}/> DOCTOR PROFILE</span><h2>Dr. Sonal Sharad Kute</h2><p>General Physician & Cosmetologist</p></div><div className="doctor-seal"><Stethoscope size={22}/></div></div>
          <div className="doctor-card-foot"><span><span className="gold-dot"/> Thoughtful care, every day</span><span>Karve Nagar · Pune</span></div>
        </div>
      </div>
      <div className="container hero-bottom"><div className="hero-bottom-item"><strong>10+</strong><span>General health services</span></div><div className="hero-bottom-item"><strong>11</strong><span>Skin & glow therapies</span></div><div className="hero-bottom-item"><strong>03</strong><span>Hair & scalp care options</span></div><div className="hero-bottom-note">A personal approach to everyday wellness and aesthetic care.</div></div>
    </section>



    <section className="section doctor-section" id="doctor">
      <div className="container doctor-profile-grid">
        <div className="profile-image-side"><img src="/images/dr-sonal-kute.jpg" alt="Dr. Sonal Sharad Kute, Navjeevan Clinic"/><div className="profile-image-note"><BadgeCheck size={18}/> Your care, guided by a doctor</div></div>
        <div className="profile-content"><span className="eyebrow">MEET YOUR DOCTOR</span><h2>A doctor who puts <em>your wellbeing first.</em></h2><p className="profile-intro">At Navjeevan Clinic, Dr. Sonal Sharad Kute brings together general medical consultation and aesthetic care with a focus on listening, understanding and individual needs.</p><h3>Dr. Sonal Sharad Kute</h3><p className="muted">General Physician & Cosmetologist</p><div className="qualification-list">{clinic.qualifications.map(q=><div key={q}><BadgeCheck size={17}/>{q}</div>)}</div><a href="#appointment" className="button button-primary">Consult the doctor <ArrowRight size={17}/></a></div>
      </div>
    </section>


    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="CARE UNDER ONE ROOF" title="Explore how we can care for you" text="From everyday health concerns to skin and hair wellness, find the care category that fits your needs."/><div className="category-grid">{categories.map(({title,desc,to,icon:Icon,count,image})=><Link to={to} className="category-card" key={title}><div className="category-image"><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=850&q=80`} alt="" loading="lazy"/><span className="category-icon"><Icon size={22}/></span></div><div className="category-content"><span className="eyebrow">{count}</span><h3>{title}</h3><p>{desc}</p><span className="card-link">Explore treatments <ArrowUpRight size={16}/></span></div></Link>)}</div></div></section>

    <section className="section"><div className="container"><div className="split-heading"><SectionHeading eyebrow="GENERAL MEDICAL CARE" title="Everyday health, handled with care." text="Explore common consultation and checkup services available at Navjeevan Clinic." centered={false}/><Link to="/general-treatments" className="button button-outline">View all services <ArrowRight size={16}/></Link></div><div className="service-grid home-service-grid">{generalTreatments.slice(0,4).map((item,i)=><ServiceCard item={item} index={i} key={item[0]}/>)}</div></div></section>

    <section className="timing-band"><div className="container timing-inner"><div className="timing-title"><span className="timing-icon"><Clock3/></span><div><span className="eyebrow light">WE'RE HERE FOR YOU</span><h2>Plan your clinic visit</h2></div></div><div className="timing-slots"><div><span>Morning</span><strong>{clinic.timings.morning}</strong></div><div><span>Evening</span><strong>{clinic.timings.evening}</strong></div></div><a href={`tel:${clinic.phoneLink}`} className="button button-gold">Call to enquire <ArrowRight size={16}/></a></div></section>

    <section className="section review-section"><div className="container review-layout"><div><span className="eyebrow">PATIENT EXPERIENCE</span><h2>Care is personal.<br/><em>So is every experience.</em></h2><p>We value every patient’s trust. Read the latest feedback directly on our Google business profile.</p><a className="button button-primary" href={clinic.reviewUrl} target="_blank" rel="noreferrer">View Google reviews <ArrowUpRight size={16}/></a></div><div className="review-card"><Quote className="quote-icon"/><div className="review-stars"><Star/><Star/><Star/><Star/><Star/></div><h3>See verified patient feedback</h3><p>Visit our Google listing to read current reviews and share your experience with Navjeevan Clinic.</p><a href={clinic.reviewUrl} target="_blank" rel="noreferrer" className="card-link">Open Google Maps <ArrowUpRight size={16}/></a><span className="review-foot"><MapPin size={15}/> Karve Nagar, Pune</span></div></div></section>

    <section className="section appointment-section" id="appointment"><div className="container appointment-grid"><div className="appointment-copy"><span className="eyebrow light">LET'S GET YOU STARTED</span><h2>Your next step towards <em>feeling better.</em></h2><p>Share a few details and the clinic team will get in touch to discuss your appointment request.</p><div className="appointment-info"><span><PhoneIcon/> {clinic.phone}</span><span><Clock3 size={18}/> {clinic.timings.morning} · {clinic.timings.evening}</span><span><MapPin size={18}/> Karve Nagar, Pune</span></div></div><div className="appointment-panel"><div className="panel-heading"><div><span className="eyebrow">APPOINTMENT ENQUIRY</span><h3>How can we help you?</h3></div><CalendarDays size={25}/></div><AppointmentForm/></div></div></section>

    <section className="section location-section"><div className="container location-grid"><div><span className="eyebrow">FIND US</span><h2>A welcoming clinic in <em>Karve Nagar.</em></h2><p>Visit Navjeevan Clinic for consultations and personalised care.</p><div className="location-address"><MapPin size={20}/><span>{clinic.address}</span></div><a href={clinic.maps} target="_blank" rel="noreferrer" className="button button-outline">Get directions <ArrowUpRight size={16}/></a></div><div className="map-frame"><iframe title="Navjeevan Clinic location in Karve Nagar, Pune" src="https://www.google.com/maps?q=18.4831097,73.8125275&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={clinic.maps} target="_blank" rel="noreferrer" className="map-open">Open in Google Maps <ArrowUpRight size={15}/></a></div></div></section>
  </>;
}
function PhoneIcon(){return <span className="phone-mini">☎</span>}
