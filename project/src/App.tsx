
import { useState } from 'react'
import { CreateAnnouncement } from './components/Modal/CreateAnnouncement'
import GlobalStyle from "./globalStyle";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Home } from './pages/Home';

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Home />
      {/* <FormRegister /> */}
       {/* <CreateAnnouncement /> */}

    </div>
  );
}

export default App;
