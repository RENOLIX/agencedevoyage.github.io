import { Link } from "react-router-dom";

export default function NotFound() {
  return <main className="not-found"><h1>Page introuvable</h1><Link to="/">Retour accueil</Link></main>;
}
