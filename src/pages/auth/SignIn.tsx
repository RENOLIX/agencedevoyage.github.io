import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, Plane } from "lucide-react";
import { useAuth } from "../../components/providers/auth";

export default function SignIn() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@hamdi.local");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  if (user) return <Navigate to="/admin" replace />;

  function submit(event: FormEvent) {
    event.preventDefault();
    if (login(email, password)) navigate("/admin");
    else setError("Identifiants incorrects.");
  }

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <div className="auth-visual">
          <Plane />
          <h1>Hamdi Back Office</h1>
          <p>Les clients consultent les offres. Les employes creent les reservations. L'admin pilote tout.</p>
        </div>
        <form onSubmit={submit} className="auth-form">
          <span className="label">Connexion</span>
          <h2>Espace equipe</h2>
          <label><Mail size={16} /> Email<input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label><LockKeyhole size={16} /> Mot de passe<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          {error && <p className="form-error">{error}</p>}
          <button>Entrer dans l'admin</button>
          <p className="hint">Admin: admin@hamdi.local / admin123<br />Employe: sara@hamdi.local / voyage123</p>
        </form>
      </section>
    </main>
  );
}
