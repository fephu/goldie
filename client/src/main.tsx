import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store/index.ts";
import Provider from "./components/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Provider>
  </BrowserRouter>
);
