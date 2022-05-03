import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hook";
import { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
