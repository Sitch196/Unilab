import styled from "styled-components";
import { useState } from "react";
const Pagination = ({
  totalPages,
  handlePageChange,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          onClick={() => handlePageChange(index + 1)}
          active={index + 1 === currentPage}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  z-index: 10;
  position: absolute;
  top: 730px;
`;

const PaginationButton = styled.button`
  color: white;
  border: none;
  padding: 0.3rem 0.5rem;
  margin: 0.2rem;
  background-color: black;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
