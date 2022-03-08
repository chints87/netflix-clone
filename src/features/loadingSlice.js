import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state) {
      // eslint-disable-next-line no-param-reassign
      state.loading = !state.loading;
    },
    stopLoading(state) {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading.loading;

export default loadingSlice.reducer;
