import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ApiPage from "./Pages/ApiPage";
import Navbar from "./Components/Navbar";
import NavbarContent from "./Components/NavbarContent";

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
    // Check if the user is logged in
    const isLoggedIn =
      localStorage.getItem("imageURL") && localStorage.getItem("name");

    // If not logged in, redirect to the landing page
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
        </Routes>
      </div>
    </>
  );
};

export default App;
