import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContent = ({ handleOpenModal }) => {
  const savedImageURL = localStorage.getItem("imageURL");
  const savedName = localStorage.getItem("name");
  return (
    <NavBar>
      <LeftSection>
        <h1>Form</h1>
      </LeftSection>
      <RightSection>
        <UserDetails>
          <Link to="api">
            <APIButton>API</APIButton>
          </Link>
          <UserName>{savedName}</UserName>
          <UserImage src={savedImageURL} alt="User" onClick={handleOpenModal} />
        </UserDetails>
      </RightSection>
    </NavBar>
  );
};

export default NavbarContent;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid whitesmoke;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;

  margin: 0 1rem;
`;

const APIButton = styled.button`
  color: white;
  border: none;
  background-color: black;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;
