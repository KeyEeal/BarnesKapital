import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("p");

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/BarnesKapital/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
