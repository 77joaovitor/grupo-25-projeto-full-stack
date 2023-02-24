import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnnouncementProvider } from './context';
import UserProvider from "./context/user/userContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}

    <UserProvider>
      <AnnouncementProvider>
        <App />
      </AnnouncementProvider>
    </UserProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
