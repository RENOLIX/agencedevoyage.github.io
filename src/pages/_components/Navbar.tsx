import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

const links = [
  ["Accueil", "#hero"],
  ["Destinations", "#destinations"],
  ["Voyage", "#tours"],
  ["Pourquoi nous", "#why"],
  ["Contact", "#footer"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a href="#hero" className="brand">
        <span>Horizons</span>
        <strong>Voyages</strong>
      </a>
      <nav className="desktop-links">
        {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="nav-actions">
        <a href="tel:+33123456789"><Phone size={14} /> +33 1 23 45 67 89</a>
        <a className="nav-cta" href="#tours">Explorer</a>
      </div>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} href={href}>{label}</a>)}
          <Link onClick={() => setOpen(false)} to="/admin">Admin</Link>
        </div>
      )}
    </header>
  );
}
