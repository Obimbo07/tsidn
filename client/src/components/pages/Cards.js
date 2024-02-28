import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardComponent.css';

const CardComponent = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Transport',
      iconUrl: '../camera_1972954.png',
      path: 'themes/transport'
       
    },
    {
      id: 2,
      title: 'Road Safety',
      iconUrl: '../agreement_10476721.png',
      path: 'themes/road-safety'
    },
    {
      id: 3,
      title: 'Trainings',
      iconUrl: '/traffic-cone.png',
      path: 'themes/knowlegde-sharing'
    },
    {
      id: 4,
      title: 'Eco-Transport',
      iconUrl: '/transportation_4515717.png',
      path: 'themes/eco-transport-development'
    },
    {
      id: 5,
      title: 'Research and Development',
      iconUrl: '../conedevelopment.png',
      path: 'themes/research-and-development'
    },
    {
      id: 6,
      title: 'Capacity Building',
      iconUrl: '../supply-chain-management_11562996.png',
      path: 'themes/capacity-building'
    },
  ];
  
  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
        <Link to={card.path}>
          <div className="icon-section">
            <img className="icon" src={card.iconUrl} alt={`Icon ${card.id}`} />
          </div>
          <div className="title-section">
            <h3>{card.title}</h3>
          </div>
          </Link>
        </div>
        
      ))}
    </div>
  );
};

export default CardComponent;
