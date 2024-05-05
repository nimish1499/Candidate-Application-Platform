import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("filterState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("filterState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
