import { BadgeCheck, BellRing, Crown, Globe2, Route, ShieldCheck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Voyages 100% securises", desc: "Partenaires verifies, dossiers controles, suivi clair jusqu'au retour.", color: "coral" },
  { icon: BellRing, title: "Support premium", desc: "Une equipe disponible pour accompagner chaque client au bon moment.", color: "blue" },
  { icon: BadgeCheck, title: "Experts certifies", desc: "Conseillers formes, destinations maitrisees et documents prepares.", color: "green" },
  { icon: Globe2, title: "Reseau mondial", desc: "Hotels, guides et experiences locales selectionnes dans 150+ destinations.", color: "violet" },
  { icon: Route, title: "Sur-mesure flexible", desc: "Itineraires ajustes selon budget, rythme, profil et dates disponibles.", color: "amber" },
  { icon: Crown, title: "Acces d'exception", desc: "Upgrades, moments VIP, adresses rares et details qui changent tout.", color: "rose" },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <div className="why-left">
        <span className="label">Pourquoi nous</span>
        <h2>L'excellence<br />du voyage<br /><em>depuis 2006</em></h2>
        <p>Une agence pensee pour vendre mieux, organiser plus vite et offrir une experience propre du premier appel jusqu'au retour du client.</p>
        <div className="why-stats">
          <div><strong>12K+</strong><span>Clients</span></div>
          <div><strong>150+</strong><span>Destinations</span></div>
          <div><strong>4.9</strong><span>Note</span></div>
        </div>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, desc, color }) => (
          <article key={title} className={`feature ${color}`}>
            <span><Icon size={23} /></span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
