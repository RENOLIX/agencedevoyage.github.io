import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  ["Isabelle Moreau", "Maldives Prestige", "Un voyage absolument parfait. L'equipe a pris soin de chaque detail, du resort aux excursions."],
  ["Thomas Dupont", "Tokyo & Kyoto", "Le Japon me faisait rever. Horizons a transforme ce reve en realite avec une organisation impeccable."],
  ["Marie-Claire Bertrand", "Perou Mysterieux", "Machu Picchu au lever du soleil restera grave toute ma vie. Guide exceptionnel et groupe chaleureux."],
  ["Antoine Lebrun", "Bali Authentique", "La villa a Ubud, les temples, les ceremonies: une immersion totale et tres fluide."],
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
        <div>{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} />)}</div>
        <blockquote>"{item[2]}"</blockquote>
        <strong>{item[0]}</strong>
        <span>{item[1]}</span>
      </div>
    </section>
  );
}
