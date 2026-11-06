export default function SectionHeading({eyebrow, title, text, centered=true}) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}
