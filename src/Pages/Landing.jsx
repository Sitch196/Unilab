import React from "react";
import clipboard from "../../assets/pngegg 1.png";
import background from "../../assets/stars.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Image src={clipboard} alt="image" />
        <Title>Get Started Today</Title>
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Landing;

const PageWrapper = styled.div`
  background-color: #151718;
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 164px;
  height: 166px;
`;

const Title = styled.p`
  width: 1090px;
  height: 212px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 6rem;
  font-weight: bold;
  color: #4980c0;
`;

const Button = styled.button`
  background-color: #4980c0;
  width: 359px;
  height: 79px;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
`;
