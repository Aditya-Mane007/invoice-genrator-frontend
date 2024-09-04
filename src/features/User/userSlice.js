import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("User"));

const initialState = {
  user: user ? JSON.parse(user) : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
