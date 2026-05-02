import { Camera, Globe, Mail, MapPin, MessageCircle, Phone, Plane, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="contact-strip">
        <span><Phone size={14} /> +33 1 23 45 67 89</span>
        <span><Mail size={14} /> contact@horizons-voyages.fr</span>
        <span><MapPin size={14} /> 12 Av. des Champs-Elysees, Paris</span>
      </div>
      <div className="footer-grid">
        <div><h3>Horizons <em>Voyages</em></h3><p>Depuis 2006, nous creons des experiences de voyage premium pour des voyageurs exigeants.</p><div className="socials"><Share2 /><Camera /><MessageCircle /><Globe /></div></div>
        <div><h4>Destinations</h4>{["Maldives", "Santorini", "Bali", "Tokyo", "Machu Picchu", "Dubai", "Paris", "Maroc"].map((x) => <a href="#destinations" key={x}>{x}</a>)}</div>
        <div><h4>Services</h4>{["Voyages sur mesure", "Lune de miel", "Voyages de groupe", "Voyages d'affaires", "Croisieres luxe", "Safari & Aventure"].map((x) => <a href="#tours" key={x}>{x}</a>)}</div>
        <div><h4>Certifications</h4><p><Plane size={15} /> Membre IATA certifie</p><p><Globe size={15} /> Atout France agree</p><strong>98% satisfaction client</strong></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Horizons Voyages. Tous droits reserves.</div>
    </footer>
  );
}
