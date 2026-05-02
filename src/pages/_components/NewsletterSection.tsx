import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export default function NewsletterSection() {
  const [done, setDone] = useState(false);
  return (
    <section className="newsletter">
      <div>
        <span className="label">Newsletter</span>
        <h2>Offres exclusives<br /><em>en avant-premiere</em></h2>
        <p>Promotions, nouvelles destinations et conseils d'experts directement dans votre boite mail.</p>
        {!done ? (
          <form onSubmit={(event) => { event.preventDefault(); setDone(true); }}>
            <input type="email" required placeholder="votre@email.com" />
            <button><Send size={15} /> S'inscrire</button>
          </form>
        ) : <div className="success"><CheckCircle /> Inscription reussie, merci !</div>}
      </div>
    </section>
  );
}
