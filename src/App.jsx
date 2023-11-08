// App.js
import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ApiPage from "./Pages/ApiPage";
import NotFound from "./Pages/NotFound";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
`;

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("imageURL") && localStorage.getItem("name");

    if (!isLoggedIn) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <>
      <div>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/api" element={<ApiPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
