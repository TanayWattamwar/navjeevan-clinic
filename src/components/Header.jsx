import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/general-treatments", "General Health"],
  ["/skin-therapies", "Skin & Glow"],
  ["/hair-care", "Hair Care"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Leaf size={22}/></span>
          <span><strong>Navjeevan Clinic</strong><small>CLINIC · CARE THAT GROWS WITH YOU</small></span>
        </Link>
        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {links.map(([to,label]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <a className="nav-appointment" href="/#appointment" onClick={() => setOpen(false)}>Book appointment <ChevronDown size={14}/></a>
        </nav>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>
    </header>
  );
}
