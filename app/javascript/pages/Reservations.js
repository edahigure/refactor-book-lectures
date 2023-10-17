import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservationsSlice';
import Reservation from '../components/Reservation';
import './Reservations.css';

import { setCurrentUser } from '../redux/user/userReducer';

export default function Reservations() {
  const dispatch = useDispatch();
  const { reservationList, statusReservation } = useSelector((store) => store.reservation);
  const { status, currentUser } = useSelector((store) => store.currentUser);

  useEffect(() => {
    // Check the status from the Redux store
    if (statusReservation === 'idle' || statusReservation === 'add_lecture' ) {
      console.log('currentUser',currentUser)
      dispatch(fetchReservations(currentUser));
    }
  }, [status,statusReservation, dispatch]);

  const myReservations = [];

  for (let i = 0; i < reservationList.length; i += 1) {
    const str = `reservation${i}`;
    myReservations.push(<Reservation
      key={str}
      id={reservationList[i].id}
      userId={reservationList[i].userId}
      lectureId={reservationList[i].lectureId}
      date={reservationList[i].date}
      place={reservationList[i].place}
      payment={reservationList[i].payment}
      paid={reservationList[i].paid}
      cancelled={reservationList[i].cancelled}
    />);
  }

  return (
    <div className="container">
      {myReservations}
    </div>
  );
}