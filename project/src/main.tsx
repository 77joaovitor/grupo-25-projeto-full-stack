import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import { AnnouncementProvider } from './contexts';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <AnnouncementProvider>
        <App />
      </AnnouncementProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
