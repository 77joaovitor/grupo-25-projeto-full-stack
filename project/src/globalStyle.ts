import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: 
rgba(255, 255, 255, 1);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;


}
*::-webkit-scrollbar {
        width: 5px;   
        border: 1px solid ;
    }   

    *::-webkit-scrollbar-track{
        background: #F4F4F4; 
    } 
    *::-webkit-scrollbar-thumb{
        background-color: #A1A1A1;
        border-radius: 100px;    
        border: 1px solid #A1A1A1

    }
* {
    box-sizing: border-box;
    color: #1a1a1a;
    font-family: 'Inter';
    margin: 0;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

html{
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
}

html, body {
    /* height: 100%; */
    margin:0;
    padding:0;
    font-family: Open-Sans, Helvetica, Sans-Serif;

  }
  input, textarea{
    background: transparent;
    :focus{
            border: 1px solid blue;
            transition: 400ms;
        }

  }
  textarea{
    margin:0;
    padding:0;
    font-family: Open-Sans, Helvetica, Sans-Serif;

  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`;

export default GlobalStyle;
