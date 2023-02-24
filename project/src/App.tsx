import { useState } from 'react'
import { CreateAnnouncement } from './components/Modal/CreateAnnouncement'
import GlobalStyle from "./globalStyle";
import FormRegister from "./components/FormRegister";

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="App">
      <GlobalStyle />
      <FormRegister />
       <CreateAnnouncement />
    </div>
  );
}

export default App;
