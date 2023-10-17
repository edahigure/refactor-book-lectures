import React from 'react';
import PropTypes from 'prop-types';
import './Reservation.css';

import { useDispatch } from 'react-redux';

import { removeReservation, deleteReservationAxios } from '../redux/reservations/reservationsSlice';


function Reservation(props) {
  
  const dispatch = useDispatch();
  const {
    id,
    userId,
    lectureId,
    date,
    place,
    payment,
    paid,
    cancelled,
  } = props;

  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="lecture-id">
            ID
            {id}
          </li>
          <li className="title">User Id :{userId}</li>
          <li className="title">Lecture Id :{lectureId}</li>
          <li className="title">Date :{date}</li>
          <li className="title">Place :{place}</li>

          
        </ul>
      </div>

      <div className="container-4">
        <span className="Current-Chapter Text-Style-7">
          Payment
        </span>
        <span className="Current-Lesson Text-Style-4">
          {payment}
        </span>

      
      <span className="Current-Chapter Text-Style-7">
       Is  <b>{paid ? 'paid' : 'not paid'}</b>
      </span>
      
        
      </div>

      <div className="actions">
        <button
          type="submit"
          onClick={() => {
            dispatch(removeReservation({ id }));
            dispatch(deleteReservationAxios( id , userId ));
          }}
        >
          Remove
        </button>


      </div>
    </div>

  );
}

Reservation.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  lectureId: PropTypes.number,
  date: PropTypes.string,
  place: PropTypes.string,
  payment: PropTypes.number,
  paid: PropTypes.bool,
  cancelled: PropTypes.bool,
};

Reservation.defaultProps = {
  id: null,
  userId: null,
  lectureId: null,
  date: 'none',
  place: 'none',
  payment: 'none',
  paid: false,
  cancelled: false
};

export default Reservation;