import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Details = () => {
  const { currentLectureId } = useSelector((store) => store.currentLecture);
  const { messageList } = useSelector((state) => state.message);
  let currentLecture;

  messageList.forEach(element => {

    if(element.id===currentLectureId.id ){
      currentLecture=element
    }
    
  });
  

  const { description } = currentLecture;
  const { imageUrl } = currentLecture;
  const { name } = currentLecture;
  const { price } = currentLecture;
  const { webLink } = currentLecture;
  const { id } = currentLecture;
  return (
    <div className="container-details">
      <img src={imageUrl} className="imageUrl img-big" alt="next icon" />
      <div className="container-extra-1">
        <div className="card">

          <div className="container-extra-2">
            <img src={imageUrl} className="imageUrl img-small" alt="next icon" />

            <div className="container-extra-3">
              <div className="title">
                {name}
                {' '}
              </div>
              <p>
                id
                {id}
              </p>
              <div className="description">
                {description}
              </div>
            </div>
          </div>

          <div className="price Text-Style-4">
            <div>Price</div>
            {' '}
            <div>{price}</div>
          </div>

          <div className="web-link">
            <a href={webLink} target="_blank" rel="noreferrer">Visit our Web</a>
          </div>

          <div className="discover-more">
            <div>Discover more classes </div>
            <img src="/images/arrow_right.png" className="arrowRight-icon" alt="arrowRight icon" />
          </div>

          <img src="/images/discover.png" className="discover-icon" alt="discover icon" />

          <NavLink to="/reserve" className="color-white next-button">
            <img src="/images/config.png" className="config-icon" alt="config icon" />
            <div className="color-white">Reserve</div>
            <img src="/images/next_white.png" className="next-icon" alt="next icon" />
          </NavLink>

        </div>

        <NavLink to="/lectures" className="color-white back-button">
          <img src="/images/back.png" className="back-icon" alt="back icon" />
        </NavLink>

      </div>
    </div>

  );
};

export default Details;
