import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";
import "../app/hero.css";
import "../app/toileport-video.css";
import "../app/theme.css";
createRoot(document.getElementById("root")!).render(<React.StrictMode><Home /></React.StrictMode>);
