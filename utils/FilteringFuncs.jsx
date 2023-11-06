export const filterUsers = (currentUsers, statusFilter, genderFilter) => {
  return currentUsers.filter((user) => {
    const statusMatch =
      (statusFilter.active && user.status === "active") ||
      (statusFilter.inactive && user.status === "inactive");
    const genderMatch =
      (genderFilter.male && user.gender === "Male") ||
      (genderFilter.female && user.gender === "Female");

    return statusMatch || genderMatch;
  });
};

export const updateStatusFilter = (filter, statusFilter) => {
  return { ...statusFilter, [filter]: !statusFilter[filter] };
};

export const updateGenderFilter = (filter, genderFilter) => {
  return { ...genderFilter, [filter]: !genderFilter[filter] };
};
