import React, { useState } from "react";
import styled from "styled-components";

const FilterModal = ({
  statusFilter,
  genderFilter,
  onStatusFilterChange,
  onGenderFilterChange,
}) => {
  const [statusOpen, setStatusOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

  const toggleStatusAccordion = () => {
    setStatusOpen(!statusOpen);
  };

  const toggleGenderAccordion = () => {
    setGenderOpen(!genderOpen);
  };

  return (
    <AdditionalDiv>
      <Accordion onClick={toggleStatusAccordion}>
        <ChevronIcon open={statusOpen}>&gt;</ChevronIcon>
        <p>სტუდენტის სტატუსი</p>
      </Accordion>
      {statusOpen && (
        <CheckboxGroup>
          <LabelWrap>
            <input
              type="checkbox"
              checked={statusFilter.active}
              onChange={() => onStatusFilterChange("active")}
            />
            <p> Active</p>
          </LabelWrap>
          <LabelWrap>
            <input
              type="checkbox"
              checked={statusFilter.inactive}
              onChange={() => onStatusFilterChange("inactive")}
            />
            <p> InActive</p>
          </LabelWrap>
        </CheckboxGroup>
      )}

      <Accordion onClick={toggleGenderAccordion}>
        <ChevronIcon open={genderOpen}>&gt;</ChevronIcon>
        <p>სქესი</p>
      </Accordion>
      {genderOpen && (
        <CheckboxGroup>
          <LabelWrap>
            <input
              type="checkbox"
              checked={genderFilter.male}
              onChange={() => onGenderFilterChange("male")}
            />
            <p> Male</p>
          </LabelWrap>
          <LabelWrap>
            <input
              type="checkbox"
              checked={genderFilter.female}
              onChange={() => onGenderFilterChange("female")}
            />
            <p> Female</p>
          </LabelWrap>
        </CheckboxGroup>
      )}
    </AdditionalDiv>
  );
};
export default FilterModal;

const AdditionalDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  z-index: 10;
  border-radius: 10px;
  position: absolute;
  top: 7rem;
  left: 1.4rem;
  padding: 2rem;
`;
const LabelWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    text-transform: uppercase;
  }
`;
const Accordion = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
  padding: 10px;
`;

const ChevronIcon = styled.div`
  transition: transform 0.3s;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
`;

const CheckboxGroup = styled.div`
  margin-left: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }
`;
