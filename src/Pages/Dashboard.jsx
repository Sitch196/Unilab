import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleSignOut = () => {
    // Remove items from local storage
    localStorage.removeItem("imageURL");
    localStorage.removeItem("name");
  };

  const savedImageURL = localStorage.getItem("imageURL");
  const savedName = localStorage.getItem("name");

  return (
    <DashboardWrapper>
      <NavBar>
        <UserDetails>
          <UserImage src={savedImageURL} alt="User" />
          <UserName>{savedName}</UserName>
        </UserDetails>
        <SignOutButton to="/register" onClick={handleSignOut}>
          Sign Out
        </SignOutButton>
      </NavBar>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 2rem;
  border-bottom: 2px solid whitesmoke;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SignOutButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #e64545;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  /* Add your dashboard content styles here */
`;

// Rest of your styled components...
