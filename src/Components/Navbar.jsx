import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <LeftSection>
          <h1>Form</h1>
          <SignOutButton to="/register" onClick={handleSignOut}>
            Sign Out
          </SignOutButton>
        </LeftSection>
        <RightSection>
          <UserDetails>
            <APIButton>API</APIButton>
            <UserName>{savedName}</UserName>
            <UserImage
              src={savedImageURL}
              alt="User"
              onClick={handleOpenModal}
            />
          </UserDetails>
        </RightSection>
      </NavBar>
      <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </DashboardWrapper>
  );
};

export default Navbar;
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

const SignOutButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #e64545;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 2.5rem;
`;

const APIButton = styled.button`
  color: white;
  border: none;
  background-color: black;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;
