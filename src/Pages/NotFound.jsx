import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Wrapper>
        <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
        <NotFoundMessage>
          The page you are looking for does not exist.
        </NotFoundMessage>
      </Wrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const NotFoundTitle = styled.h2`
  font-size: 34px;
  color: #333;
  margin-bottom: 16px;
`;

const NotFoundMessage = styled.p`
  font-size: 20px;
  color: #666;
`;
const Wrapper = styled.div`
  border-radius: 5px;
  padding: 5rem;
  box-shadow: 0 0 40px 1px lightgray;
`;
