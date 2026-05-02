import { useState } from "react";
import { Calendar, MapPin, Search, Users } from "lucide-react";

const slides = [
  { image: "https://images.unsplash.com/photo-1651610526505-a46802a4f2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", label: "Grece", title: "Santorini", sub: "L'ile bleue et blanche" },
  { image: "https://images.unsplash.com/photo-1542292714-0af7af35e324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", label: "Ocean Indien", title: "Maldives", sub: "Bungalows sur l'eau" },
  { image: "https://images.unsplash.com/photo-1578592325919-ca966e981cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", label: "Japon", title: "Tokyo", sub: "Tradition & modernite" },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const item = slides[slide];

  return (
    <section id="hero" className="hero">
      {slides.map((s, index) => <img key={s.title} src={s.image} alt="" className={`hero-bg ${index === slide ? "active" : ""}`} />)}
      <div className="hero-overlay" />
      <div className="hero-dots">{slides.map((_, index) => <button key={index} className={index === slide ? "active" : ""} onClick={() => setSlide(index)} />)}</div>
      <div className="hero-content">
        <span className="eyebrow">{item.label}</span>
        <h1>{item.title}</h1>
        <p>{item.sub}</p>
        <div className="stats">
          <div><strong>150+</strong><span>Destinations</span></div>
          <div><strong>12 000+</strong><span>Voyageurs</span></div>
          <div><strong>18 ans</strong><span>D'experience</span></div>
        </div>
        <form className="search-bar">
          <label><MapPin size={17} /><span>Destination<input placeholder="Ou voulez-vous aller ?" /></span></label>
          <label><Calendar size={17} /><span>Date de depart<input type="date" aria-label="Date de depart" /></span></label>
          <label><Users size={17} /><span>Voyageurs<select defaultValue="2"><option>1 pers.</option><option value="2">2 pers.</option><option>3 pers.</option><option>4+ pers.</option></select></span></label>
          <button type="button"><Search size={17} /> Rechercher</button>
        </form>
      </div>
    </section>
  );
}
