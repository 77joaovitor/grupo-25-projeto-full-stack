import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AnnouncementProvider } from './context';
import UserProvider from "./context/user/userContext";
import GlobalStyle from "./globalStyle";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnnouncementProvider>
          <GlobalStyle />
          <App />
        </AnnouncementProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
