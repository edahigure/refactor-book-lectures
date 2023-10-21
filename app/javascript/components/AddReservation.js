import './AddReservation.css';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReservation, addReservationAxios, fetchReservations } from '../redux/reservations/reservationsSlice';

function AddReservation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLectureId } = useSelector((store) => store.currentLecture);
  const { status, currentUser } = useSelector((store) => store.currentUser);
  const { reservationList, statusReservation } = useSelector((store) => store.reservation);

  const [userId, setUserId] = useState('');
  const [lectureId, setLectureId] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [payment, setPayment] = useState('');
  const [paid, setPaid] = useState('');
  const [cancelled, setCancelled] = useState('');

  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    event.preventDefault();
    const eventName = event.target.name;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [eventName]: value }));
    setUserId(currentUser);
    setLectureId(currentLectureId);
    setDate(inputs.date);
    setPlace(inputs.place);
    setPayment(inputs.payment);
    setPaid(false);
    setCancelled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserId(currentUser);
    setLectureId(currentLectureId.id);
    setDate(date);
    setPlace(place);
    setPayment(payment);
    setPaid(false);
    setCancelled(false)

    dispatch(addReservation({
      userId: currentUser, lectureId: currentLectureId.id, date, place, payment, paid, cancelled
    }));

    dispatch(addReservationAxios({
      userId: currentUser,
      lectureId: currentLectureId.id,
      date,
      place,
      payment,
      paid,
      cancelled
    }));
    dispatch(fetchReservations(currentUser));
    navigate('/reservations');
    
  };

  return (

    <section className="wrapper-add-lecture" id="contact">

      <h2 className="content">
        Make your reservation for lecture {lectureId}
      </h2>
      <form className="form-add-lecture" onSubmit={handleSubmit}>
        <label className="label-size" htmlFor="item-1">
          <input
            id="item-1"
            className="items-form"
            type="text"
            name="date"
            placeholder="Reservation date"
            value={date  || ''}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-2"
            className="items-form"
            type="text"
            name="place"
            placeholder="place"
            value={place || ''}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-3"
            className="items-form"
            type="text"
            name="payment"
            placeholder="payment"
            value={payment || ''}
            onChange={(e) => setPayment(e.target.value)}
            required
          />
        </label>

        

        <button className="form-button" type="submit" id="btn-submit">
          Add Lecture
        </button>
      </form>

    </section>
  );
}

export default AddReservation;