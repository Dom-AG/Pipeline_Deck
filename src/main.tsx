import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { injectTheme } from "@/lib/theme-injector";

// Inject theme colors into CSS variables before rendering
// This makes theme.ts the single source of truth
injectTheme();

createRoot(document.getElementById("root")!).render(<App />);
