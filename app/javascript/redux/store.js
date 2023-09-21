
import messageReducer from './messages/messagesSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
export default store;
