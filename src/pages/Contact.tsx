import { CalendarDays, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function Contact() {
  return (
    <main className="static-page contact-page">
      <Navbar />
      <section className="contact-hero">
        <div>
          <span className="label">Contact</span>
          <h1>Parlez-nous du prochain depart.</h1>
          <p>Un conseiller peut preparer une proposition, verifier les disponibilites ou accompagner une reservation en agence.</p>
        </div>
        <div className="contact-card">
          <ShieldCheck />
          <strong>Reponse rapide</strong>
          <span>Moins de 24h ouvrées pour les demandes completes.</span>
        </div>
      </section>

      <section className="contact-layout">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div><label>Nom complet<input placeholder="Votre nom" /></label><label>Telephone<input placeholder="+33 ..." /></label></div>
          <label>Email<input type="email" placeholder="vous@email.com" /></label>
          <label>Destination souhaitee<input placeholder="Bali, Maldives, Japon..." /></label>
          <label>Message<textarea placeholder="Dates, nombre de voyageurs, budget, style de voyage..." /></label>
          <button><Send size={17} /> Envoyer la demande</button>
        </form>

        <aside className="contact-info">
          {[
            { icon: Phone, title: "Telephone", text: "+33 1 23 45 67 89" },
            { icon: Mail, title: "Email", text: "contact@hamdi-voyage.com" },
            { icon: MapPin, title: "Agence", text: "12 Av. des Champs-Elysees, Paris" },
            { icon: CalendarDays, title: "Horaires", text: "Lun - Sam, 09:00 - 19:00" },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon size={21} /><div><strong>{title}</strong><span>{text}</span></div></article>
          ))}
          <div className="whatsapp-box"><MessageCircle /><strong>Besoin d'une reponse directe ?</strong><p>Les employes peuvent finaliser une reservation depuis l'espace admin apres validation client.</p></div>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
