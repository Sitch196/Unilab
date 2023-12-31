import styled from "styled-components";
import userData from "../../data";
import { useState } from "react";
import Filtering from "./Filtering";
import Pagination from "./Pagination";
import FilterModal from "./FilterModal";
import {
  filterUsers,
  updateGenderFilter,
  updateStatusFilter,
} from "../../utils/FilteringFuncs";

const Modal = ({ isOpen, closeModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  // states for filters (by default its checked)
  const [statusFilter, setStatusFilter] = useState({
    active: true,
    inactive: true,
  });
  const [genderFilter, setGenderFilter] = useState({
    male: true,
    female: true,
  });

  //logic for pagination
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(userData.length / usersPerPage);

  // Create filtering functions using utility functions
  const handleStatusFilterChange = (filter) => {
    setStatusFilter(updateStatusFilter(filter, statusFilter));
  };

  const handleGenderFilterChange = (filter) => {
    setGenderFilter(updateGenderFilter(filter, genderFilter));
  };

  const filteredUsers = filterUsers(currentUsers, statusFilter, genderFilter);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const HandleFilterModal = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };
  return isOpen ? (
    <BigWrapper>
      {" "}
      <ModalWrapper>
        <Filtering onFilterButtonClick={HandleFilterModal} />
        {isFilterModalOpen && (
          <FilterModal
            statusFilter={statusFilter}
            genderFilter={genderFilter}
            onStatusFilterChange={handleStatusFilterChange}
            onGenderFilterChange={handleGenderFilterChange}
          />
        )}
        <Overlay onClick={closeModal} />
        <CloseButton onClick={closeModal}>X</CloseButton>
        <BigModal>
          <Table>
            <thead>
              <tr>
                <TableHeader>სტუდენტის სახელი და გვარი</TableHeader>
                <TableHeader>სტატუსი</TableHeader>
                <TableHeader>სქესი</TableHeader>
                <TableHeader>ქულები</TableHeader>
                <TableHeader>პირადი ნომერი</TableHeader>
                <TableHeader>მაილი</TableHeader>
                <TableHeader>მობილურის ნომერი</TableHeader>
                <TableHeader>მისამართი</TableHeader>
                <TableHeader>დაბადების თარიღი</TableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableData>{user.name}</TableData>
                  <TableData>{user.status}</TableData>
                  <TableData>{user.gender}</TableData>
                  <TableData>{user.scores}</TableData>
                  <TableData>{user.id}</TableData>
                  <TableData>{user.email}</TableData>
                  <TableData>{user.mobile}</TableData>
                  <TableData>{user.address}</TableData>
                  <TableData>{user.date}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </BigModal>
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </ModalWrapper>
    </BigWrapper>
  ) : null;
};

export default Modal;
const BigWrapper = styled.div``;
const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const BigModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  margin-top: 2rem;
  /* padding: 20px; */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 1200px;
  height: 600px;
  overflow: auto;
  @media (height>1050px) {
    top: 45%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 100px;
  right: 310px;
  background: #e9e2e2;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  font-size: 22px;
  font-weight: bold;
  height: 2.4rem;
  width: 2rem;
  cursor: pointer;
  z-index: 2;
`;
const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f6f6f6;
  }
`;

const TableHeader = styled.th`
  padding: 0 3rem;
  font-family: "Roboto";
  font-size: 1.2rem;
`;

const TableData = styled.td`
  text-align: center;
  padding: 1.8rem 0;
`;
const Table = styled.table`
  padding: 1rem 1rem;
`;
