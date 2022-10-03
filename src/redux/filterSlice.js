import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
