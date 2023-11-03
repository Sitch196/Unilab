import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import upload from "../../assets/add-photo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [imageURL, setImageURL] = useState(upload);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const inputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
      setHasUploadedImage(true);
      checkFormValidity(name, imageUrl);
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    checkFormValidity(newName, imageURL);
  };

  const checkFormValidity = (newName, newImageURL) => {
    setIsFormValid(newName.trim() !== "" && newImageURL !== upload);
  };
  const handleSignIn = () => {
    if (isFormValid) {
      // Save data to local storage
      localStorage.setItem("imageURL", imageURL);
      localStorage.setItem("name", name);
    }
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <Title>Get Started</Title>
        <SubTitle>add a photo</SubTitle>
        <ImageContainer>
          <Image
            src={imageURL}
            alt="uploaded image"
            title="image"
            onClick={() => inputRef.current.click()}
            hasUploadedImage={hasUploadedImage}
          />
        </ImageContainer>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <SubTitle>fill in your name</SubTitle>
        <Input type="text" value={name} onChange={handleNameChange} />
        <Link to="/dashboard">
          <Button disabled={!isFormValid} onClick={handleSignIn}>
            Sign in
          </Button>
        </Link>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Register;

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: white;
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 596px;
  height: 770px;
  background-color: white;
  border-radius: 20px;
  gap: 3.5rem;
`;

const Title = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 3rem;
  font-weight: lighter;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: Roboto;
`;

const ImageContainer = styled.div`
  background-color: #e6ebff;
  border-radius: 50%;
  padding: ${(props) => (props.hasUploadedImage ? "none" : "0.2rem")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${(props) => (props.hasUploadedImage ? "50%" : "none")};
  padding: 1rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 70%;
  height: 3.5rem;
  text-indent: 1rem;
  border: none;
  outline: none;
  background-color: #e6ebff;
  font-size: 1.4rem;
  font-family: Roboto;
`;

const Button = styled.button`
  width: 17rem;
  height: 3.5rem;
  border: none;
  border-radius: 20px;
  background-color: #4980c0;
  color: white;
  font-size: medium;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
`;
