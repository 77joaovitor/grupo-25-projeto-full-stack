import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import GlobalStyle from "./globalStyle";
import FormRegister from "./components/FormRegister";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <FormRegister />
    </div>
  );
}

export default App;
