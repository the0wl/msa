import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@the0wl/ui/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthGate } from "./components/auth-gate";
import { UserProvider } from "./contexts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthGate>
          <App />
        </AuthGate>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
