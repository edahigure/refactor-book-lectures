import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messagesSlice';
import currentUserReducer from './user/userReducer';
import currentLectureReducer from './lecture/currentLectureSlice';
import reservationReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    currentUser: currentUserReducer,
    currentLecture: currentLectureReducer,
    reservation: reservationReducer,
  },
});
export default store;
