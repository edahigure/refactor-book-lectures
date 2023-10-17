import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/users';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (currentUser) => {
  
  
  try {
    const response = await axios.get(`${url}/${currentUser}/reservations`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addReservationAxios = createAsyncThunk('reservations/addReservationAxios', async (payload) => {
  const {
    userId, lectureId, date, place, payment, paid, cancelled
  } = payload;
  
  try {
    const resp = await axios.post(url, {
      user_id: userId,
      lecture_id: lectureId,
      date,
      place,
      payment,
      paid,
      cancelled
    });
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteReservationAxios = createAsyncThunk('reservations/deleteReservationAxios', async (id, userId) => {  
  try {
    const resp = await axios.delete(`${url}/${userId}/reservations/${id}`);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  reservationList: [],
  statusReservation: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const newState = {
        state,
        reservationList: [...state.reservationList,
          { ...action.payload }],
          statusReservation: 'add_reservation',
      };
      return newState;
    },
    removeReservation: (state, action) => {
      const { id } = action.payload;
      const newState = {
        state,
        reservationList: [...state.reservationList.filter((item) => item.id !== id)],
      };
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => {
        // Assuming that the action.payload.data contains the fetched message data
        
        const newReservationList = [];
        Object.keys(action.payload).forEach((el) => {          
          const newReservation = {
            id: action.payload[el].id,
            userId: action.payload[el].user_id,
            lectureId: action.payload[el].lecture_id,
            date: action.payload[el].date,
            place: action.payload[el].place,
            payment: action.payload[el].payment,
            paid: action.payload[el].paid,
            cancelled: action.payload[el].cancelled,
            
          };
          newReservationList.push(newReservation);
        });

        return { reservationList: newReservationList, statusReservation: 'succeeded' };
      })
      .addCase(fetchReservations.pending, (state) => ({ ...state, statusReservation: 'loading' }))
      .addCase(fetchReservations.rejected, (state, action) => ({ ...state, statusReservation: 'failed', error: action.error.message }));
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;