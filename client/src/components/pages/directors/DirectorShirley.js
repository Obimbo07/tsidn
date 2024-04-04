import React from 'react';
import '../../styles/directorShirley.css';
import Navbar from '../Navbar';
import Footer from '../../Footer';

const DirectorShirley = () => {
  return (
    <>
    <Navbar />
    <div className="director-shirley-container">
      <div className="director-shirley-image">
        <img src="/shirley.png" alt="Shirley" />
      </div>
      <div className="director-shirley-content">
        <h2>SHIRLEY CHEROTICH</h2>
        <h3>Senior Director Corporate Development and Marketing Communications and a Co-founder TSDN</h3>
        <p>
          Shirley is TSDN’s Co-founder and Senior Director of Corporate Development and Marketing Communications, reporting to ED.
          Shirley is responsible for TSDN’s strategic partnerships and strategic investing efforts. Since founding TSDN, she has overseen the successful integration of vital technologies and an array of partners from the transport sector and road safety actors. Shirley oversees all trainings and education programmes.
          As head of the Marketing Communications group, Shirley leads a talented and creative team focused on TSDN’s advertising, internet presence, package design and other consumer-facing marketing.
          A graduate of Machakos University. Holds several professional certificates and so skilled in Training and Coaching, Product Development and Marketing, Road Safety Management, Strategic Leadership and Finance management.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DirectorShirley;
