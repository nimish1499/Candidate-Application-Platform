import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  employees: "",
  experience: "",
  remote: "",
  salary: "",
  companyName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export default filterSlice.reducer;
