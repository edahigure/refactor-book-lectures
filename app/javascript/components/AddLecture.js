import './AddLecture.css';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { addLecture, addItemAxios, fetchMessages } from '../redux/messages/messagesSlice';





function AddLecture() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [webLink, setwebLink] = useState('');
  const [price, setPrice] = useState('');
  const [cancelled, setCancelled] = useState('');
  const [teacherId, setTeacherId] = useState('');


  const { currentUser } = useSelector((state) => state.currentUser);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addLecture())
    
    dispatch(addItemAxios({
      name,
      imageUrl,
      description,
      webLink,
      price,
      cancelled,
      teacherId
    })); 

    
     
    navigate('/lectures')
    
  };

  return (

    <section className="wrapper-add-lecture" id="contact">

      <h2 className="content">
        We are always interested in creating new projects,
        so if you would like to add one lecture please fill this form.
      </h2>
      <form className="form-add-lecture" onSubmit={handleSubmit}>
        <label className="label-size" htmlFor="item-1">
          <input
            id="item-1"
            className="items-form"
            type="text"
            name="name"
            placeholder="Lecture name"
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-2"
            className="items-form"
            type="text"
            name="imageUrl"
            placeholder="Image url"
            value={imageUrl || ''}
            onChange={(e) => setimageUrl(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-3">
          <input
            id="item-3"
            className="items-form"
            type="text"
            name="webLink"
            placeholder="Website link"
            value={webLink || ''}
            onChange={(e) => setwebLink(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-4">
          <input
            id="item-4"
            className="items-form"
            type="number"
            name="price"
            placeholder="Price"
            value={price || ''}
            onChange={(e) => {
              setPrice(e.target.value)
              setCancelled(false);
              setTeacherId(currentUser);                   
            }
            }
          />
        </label>

        <label className="label-size" htmlFor="item-5">
          <textarea
            id="item-5"
            className="textarea"
            type="textarea"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button className="form-button" type="submit" id="btn-submit">
          Add Lecture
        </button>
        <div>
          Saved
        </div>
      </form>

    </section>
  );
}

export default AddLecture;
