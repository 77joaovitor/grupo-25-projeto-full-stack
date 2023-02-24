import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/userContext";
import { BrowserRouter } from 'react-router-dom';
import { AnnouncementProvider } from './contexts';


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
