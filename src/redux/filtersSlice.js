// redux/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    role: "",
    employees: "",
    experience: "",
    remote: "",
    salary: "",
    companyName: "",
  },
  reducers: {
    setRoleFilter(state, action) {
      state.role = action.payload;
    },
    setEmployeesFilter(state, action) {
      state.employees = action.payload;
    },
    setExperienceFilter(state, action) {
      state.experience = action.payload;
    },
    setRemoteFilter(state, action) {
      state.remote = action.payload;
    },
    setSalaryFilter(state, action) {
      state.salary = action.payload;
    },
    setCompanyNameFilter(state, action) {
      state.companyName = action.payload;
    },
  },
});

export const {
  setRoleFilter,
  setEmployeesFilter,
  setExperienceFilter,
  setRemoteFilter,
  setSalaryFilter,
  setCompanyNameFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
