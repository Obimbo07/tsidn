// Modal.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/auth/authSlice';

import './Modal.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerSuccess, error, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (registerSuccess) {
      alert('Hello, you have successfully registered to our Newsletter. Check your email for further details');
      setShowModal(false);
      navigate('/pricing');
    }
    if (error) {
      console.log(error);
      alert(`Registration failed: ${error}`);
    }
  }, [registerSuccess, error, navigate]);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    dispatch(registerUser({ userName, email }));
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h2>SUBSCRIBE TO OUR MAILING LIST</h2>
        <p>Stay updated with the latest news and promotions. Subscribe to our mailing list!</p>
        <div className="newsletter-section">
          <h4>Enter email to get newsletter</h4>
          <form onSubmit={handleNewsletter}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Enter your Username"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" disabled={isLoading}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;