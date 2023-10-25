import { createSlice } from '@reduxjs/toolkit';

const dataUserSlice = createSlice({
  name: 'dataUser',
  initialState: {
    dataUser: {},
  },
  reducers: {
    setDataUser: (state, action) => {
      const newState = {
        ...state,
        dataUser: action.payload,      
      };
      return newState;
    },
  },
});

export const { setDataUser } = dataUserSlice.actions;

export default dataUserSlice.reducer;