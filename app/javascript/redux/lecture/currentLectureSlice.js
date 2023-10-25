import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLectureId: 0,
  status: 'no_current_lecture',
};
/* eslint no-param-reassign: "error" */

const currentLectureSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLectureId: (state, action) => {
      const id = action.payload;
      const newState = {
        state,
        currentLectureId: id,
        status: 'loaded',
      };
      return newState;
    },
  },
});

export const { setLectureId } = currentLectureSlice.actions;
export default currentLectureSlice.reducer;
