import GlobalStyle from "./globalStyle";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ProductCard />
    </div>
  );
}

export default App;
