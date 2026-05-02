import { useMemo, useState } from "react";
import { Clock, MapPin, Star, Users } from "lucide-react";
import { benefitIcons, readStore, seedTravels, type Travel } from "../../lib/data";

const categories = ["Tous", "Plage", "Aventure", "Culture", "Luxe"] as const;

export default function PopularTours() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tous");
  const travels = readStore<Travel[]>("hv-travels", seedTravels);
  const filtered = useMemo(() => active === "Tous" ? travels : travels.filter((tour) => tour.category === active), [active, travels]);

  return (
    <section id="tours" className="section pale">
      <div className="section-head">
        <div><span className="label">Nos Voyages</span><h2>Voyages les plus<br /><em>demandes</em></h2></div>
        <div className="filters">{categories.map((cat) => <button className={active === cat ? "active" : ""} onClick={() => setActive(cat)} key={cat}>{cat}</button>)}</div>
      </div>
      <div className="tour-grid">
        {filtered.map((tour) => (
          <article className="tour-card" key={tour.id}>
            <div className="tour-image">
              <img src={tour.image} alt={tour.name} />
              <span className="duration"><Clock size={12} /> {tour.duration}</span>
              <span className="place"><MapPin size={13} /> {tour.country}</span>
            </div>
            <div className="tour-body">
              <div className="tour-title"><div><h3>{tour.name}</h3><p>{tour.destination}</p></div><strong><Star size={13} /> {tour.rating}</strong></div>
              <p className="tour-desc">{tour.description}</p>
              <div className="benefits">
                {tour.benefits.map((benefit) => {
                  const Icon = benefitIcons[benefit];
                  return <span key={benefit}><Icon size={12} /> {benefit}</span>;
                })}
              </div>
              <div className="tour-foot">
                <div><strong>{tour.price.toLocaleString("fr-FR")} EUR</strong><span>par personne</span></div>
                <span className={tour.ticketsLeft < 8 ? "low-stock" : ""}><Users size={13} /> {tour.ticketsLeft}/{tour.ticketsTotal} billets</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
