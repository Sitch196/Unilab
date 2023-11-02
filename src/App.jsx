import Landing from "./Pages/Landing";
import { createGlobalStyle } from "styled-components";

const App = () => (
  <>
    <div>
      <GlobalStyle />
      <Landing />
    </div>
  </>
);

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
`;

export default App;
