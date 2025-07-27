import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  email: "",
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
