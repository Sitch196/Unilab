import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const ApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const apiUrl = `${API_BASE_URL}&_page=${page}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Something went Wrong !! Network response was not ok");
      }

      const data = await response.json();
      setPosts(data);
      setLoading(false);

      const totalPosts = 100;
      const calculatedTotalPages = Math.ceil(totalPosts / 10);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <ApiWrapper>
      <GoBackButton onClick={() => navigate("/dashboard")}>
        Go Back
      </GoBackButton>

      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <PostContainer>
            {posts.map((post) => (
              <PostCard key={post.id}>
                <h3>User ID: {post.userId}</h3>
                <p>
                  <strong>Id:</strong> {post.id}
                </p>
                <p>
                  <strong>Title:</strong> {post.title}
                </p>
                <p>
                  <strong>Body:</strong> {post.body}
                </p>
              </PostCard>
            ))}
          </PostContainer>
          <Pagination>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <PageNumber
                key={index}
                onClick={() => handlePageChange(index + 1)}
                active={index + 1 === currentPage}
              >
                {index + 1}
              </PageNumber>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </Pagination>
        </>
      )}
    </ApiWrapper>
  );
};

export default ApiPage;

const ApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const GoBackButton = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 0 0 10px 10px;
  padding: 10px 40px;
  cursor: pointer;
  font-weight: bold;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #0074cc;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PostCard = styled.div`
  border: 1px solid #ccc;
  padding: 1.5rem;
  width: 20%;
  background-color: #f0f0f0;
  box-shadow: 1px 2px 3px lightgray;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  color: black;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
