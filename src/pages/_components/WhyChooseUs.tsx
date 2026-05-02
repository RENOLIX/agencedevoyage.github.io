const features = [
  ["Voyages 100% securises", "Destinations verifiees et partenaires fiables pour partir sans stress.", "from-orange"],
  ["Support 24h/24 7j/7", "Une equipe disponible avant, pendant et apres chaque depart.", "from-violet"],
  ["Experts certifies IATA", "Conseillers specialistes, circuits verifies, documents controles.", "from-gold"],
  ["Reseau mondial", "150+ destinations et des partenaires locaux choisis avec soin.", "from-green"],
  ["Sur-mesure flexible", "Chaque voyage s'adapte au rythme, au budget et aux envies du client.", "from-rose"],
  ["Experiences d'exception", "Acces VIP, hotels rares et activites memorables.", "from-blue"],
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <div className="why-left">
        <span className="label">Pourquoi nous</span>
        <h2>L'excellence<br />du voyage<br /><em>depuis 2006</em></h2>
        <p>Chez Horizons Voyages, chaque depart est une promesse: un voyage bien pense, bien vendu, bien suivi.</p>
        <div className="why-stats">
          <div><strong>12K+</strong><span>Clients</span></div>
          <div><strong>150+</strong><span>Destinations</span></div>
          <div><strong>4.9</strong><span>Note</span></div>
        </div>
      </div>
      <div className="feature-grid">
        {features.map(([title, desc, color]) => (
          <article key={title} className={`feature ${color}`}>
            <span />
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
