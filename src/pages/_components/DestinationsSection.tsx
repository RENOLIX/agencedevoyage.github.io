import { ArrowUpRight } from "lucide-react";
import { destinations } from "../../lib/data";

export default function DestinationsSection() {
  return (
    <section id="destinations" className="section pale">
      <div className="section-head">
        <div><span className="label">Destinations</span><h2>Explorez le monde<br /><em>avec nous</em></h2></div>
        <p>Des iles paradisiaques aux cites millenaires, nous selectionnons les destinations les plus extraordinaires.</p>
      </div>
      <div className="destination-grid">
        {destinations.map((dest) => (
          <article key={dest.name} className={`destination-card ${dest.tall ? "tall" : ""}`}>
            <img src={dest.image} alt={dest.name} />
            <div className="card-shade" />
            <span className="tag">{dest.tag}</span>
            <ArrowUpRight className="corner" size={18} />
            <div><small>{dest.country}</small><h3>{dest.name}</h3><p>{dest.trips} voyages disponibles</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
