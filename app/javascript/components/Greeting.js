import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.css';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItemAxios } from '../redux/messages/messagesSlice';
import { setLectureId } from '../redux/lecture/currentLectureSlice';

function Greeting(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    id,
    name,
    imageUrl,
    description,
    webLink,
    price,
  } = props;
  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="lecture-id">
            ID
            {id}
          </li>
          <li className="title">{name}</li>
          <li>
            {' '}
            <a href={webLink} target="_blank" rel="noopener noreferrer">web link</a>
            {' '}
          </li>
        </ul>
      </div>

      <div className="container-2">

        <img src={imageUrl} alt="My_Image" className="logo-lecture" />

        <div className="container-3">
          {description}
        </div>

      </div>

      <div className="container-4">
        <span className="Current-Chapter Text-Style-7">
          Price
        </span>
        <span className="Current-Lesson Text-Style-4">
          {price}
        </span>
      </div>

      <div className="actions">
        <button
          type="submit"
          onClick={() => {            
            dispatch(deleteItemAxios( id ));      
          }}
        >
          Remove
        </button>

        <button
          type="submit"
          onClick={() => {
            dispatch(setLectureId({ id }));
            navigate('/lecture_details');
          }}
        >
          Details
        </button>

      </div>
    </div>

  );
}

Greeting.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  webLink: PropTypes.string,
  price: PropTypes.string,
};

Greeting.defaultProps = {
  id: 'none',
  name: 'none',
  imageUrl: 'none',
  description: 'none',
  webLink: 'none',
  price: 'none',

};

export default Greeting;
