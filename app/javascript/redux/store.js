import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messagesSlice';
import currentUserReducer from './user/userReducer';

const store = configureStore({
  reducer: {
    message: messageReducer,
    currentUser: currentUserReducer,
  },
});
export default store;
