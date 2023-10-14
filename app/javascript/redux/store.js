import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messagesSlice';
import currentUserReducer from './user/userReducer';
import currentLectureReducer from './lecture/currentLectureSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    currentUser: currentUserReducer,
    currentLecture: currentLectureReducer,
  },
});
export default store;
