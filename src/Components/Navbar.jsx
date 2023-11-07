import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardWrapper>
      <NavbarContent handleOpenModal={handleOpenModal} />
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
