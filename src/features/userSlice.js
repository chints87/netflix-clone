import { createSlice } from '@reduxjs/toolkit';

// Create application wide user state

const initialState = {
  user: null,
};

const userSlice = createSlice({
  /* constant name */
  name: 'user',
  initialState,
  /* contain actions and what state the action changes */
  reducers: {
    login(state, action) {
      const userState = state;
      userState.user = action.payload;
    },
    logout(state) {
      const userState = state;
      userState.user = null;
    },
  },
});

/* Actions that will be exported to components that need to
modify the user state */
export const { login, logout } = userSlice.actions;

/* Get the user property from the user object from the state object */
export const selectUser = (state) => state.user.user;

/* This is exported to the main store/reducer */
export default userSlice.reducer;
