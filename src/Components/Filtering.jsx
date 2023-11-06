import styled from "styled-components";
import filter from "../../assets/filter.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterModal from "./FilterModal";

const Filtering = ({ onFilterButtonClick }) => {
  const handleSignOut = () => {
    localStorage.removeItem("imageURL");
    localStorage.removeItem("name");
  };

  return (
    <Filter>
      <FilterWrapper onClick={onFilterButtonClick}>
        <FilterIcon src={filter} alt="filter icon" />
        <FilterTitle>Filter</FilterTitle>
      </FilterWrapper>
      <SignOutButton to="/register" onClick={handleSignOut}>
        Sign Out
      </SignOutButton>
      <SearchWrapper>
        <Icon src={search} alt="search icon" />
        <Input type="text" />
      </SearchWrapper>
    </Filter>
  );
};
export default Filtering;

const Filter = styled.div`
  margin-top: 1.5rem;
  width: 1200px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
const FilterTitle = styled.p`
  font-size: large;
  font-weight: bold;
`;
const FilterIcon = styled.img`
  width: 25px;
  height: 25px;
`;
const Icon = styled.img`
  padding-left: 0.5rem;
`;
const Input = styled.input`
  width: 240px;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 20px;
  text-indent: 0.5rem;
  font-size: 1.2rem;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 0.5rem;
  border-radius: 20px;
  height: 3rem;
`;
const FilterWrapper = styled.div`
  width: 250px;
  height: 3.1rem;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 3.5rem;
  cursor: pointer;
`;
const SignOutButton = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #e64545;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  padding: 0.8rem 2rem;
  margin-left: 30rem;
`;
