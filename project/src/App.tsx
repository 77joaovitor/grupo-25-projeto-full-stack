
import { useState } from 'react'
import { CreateAnnouncement } from './components/Modal/CreateAnnouncement'
import GlobalStyle from "./globalStyle";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Header />
      <ProductCard />
      <FormRegister />
       <CreateAnnouncement />

    </div>
  );
}

export default App;
