import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Newsletter = (e) => {
    e.preventDefault();
    alert("Hello, you have successfully registerd to our Newsletter. Check your email for futhur details");
  }

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h2>Subscribe to Our Mailing List</h2>
        <p>Stay updated with the latest news and promotions. Subscribe to our mailing list!</p>
        <div className="newsletter-section">
                <h4>Enter email to get newsletter</h4>
                <form onSubmit={Newsletter}>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Modal;
