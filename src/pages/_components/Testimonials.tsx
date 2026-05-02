import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  ["Isabelle Moreau", "Paris", "Maldives Prestige", "Un voyage absolument parfait. L'equipe a pris soin de chaque detail, du resort aux excursions.", "IM"],
  ["Thomas Dupont", "Lyon", "Tokyo & Kyoto", "Le Japon me faisait rever. Horizons a transforme ce reve en realite avec une organisation impeccable.", "TD"],
  ["Marie-Claire Bertrand", "Bordeaux", "Perou Mysterieux", "Machu Picchu au lever du soleil restera grave toute ma vie. Guide exceptionnel et groupe chaleureux.", "MB"],
  ["Antoine Lebrun", "Marseille", "Bali Authentique", "La villa a Ubud, les temples, les ceremonies: une immersion totale et tres fluide.", "AL"],
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const item = testimonials[current];
  return (
    <section className="testimonials">
      <div className="section-head">
        <div><span className="label">Temoignages</span><h2>Ce que disent<br /><em>nos voyageurs</em></h2></div>
        <div className="testimonial-nav">
          <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></button>
          <span>{current + 1} / {testimonials.length}</span>
          <button onClick={() => setCurrent((current + 1) % testimonials.length)}><ChevronRight /></button>
        </div>
      </div>
      <div className="quote">
        <div className="quote-mark"><Quote size={26} /></div>
        <div className="quote-stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} />)}</div>
        <blockquote>"{item[3]}"</blockquote>
        <div className="traveler">
          <span>{item[4]}</span>
          <div><strong>{item[0]}</strong><small>{item[1]} · {item[2]}</small></div>
        </div>
        <div className="testimonial-rail">
          {testimonials.map((entry, index) => <button key={entry[0]} className={index === current ? "active" : ""} onClick={() => setCurrent(index)}>{entry[4]}</button>)}
        </div>
      </div>
    </section>
  );
}
