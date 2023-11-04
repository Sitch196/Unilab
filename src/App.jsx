import Landing from "./Pages/Landing";
import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ApiPage from "./Pages/ApiPage";
const GlobalStyle = createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
      }
    `;

const App = () => (
  <>
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/api" element={<ApiPage />} />
      </Routes>
    </div>
  </>
);

export default App;
