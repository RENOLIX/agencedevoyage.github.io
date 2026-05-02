import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/providers/auth";
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./index.css";

function Protected({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth" replace />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/agencedevoyage.github.io">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/admin" element={<Protected><Admin /></Protected>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
