import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Transport',
      iconUrl: '../camera_1972954.png',
      path: '/transport'
       
    },
    {
      id: 2,
      title: 'Road Safety',
      iconUrl: '../agreement_10476721.png',
      path: '/road-safety'
    },
    {
      id: 3,
      title: 'Trainings',
      iconUrl: '/traffic-cone.png',
      path: '/knowlegde-sharing'
    },
    {
      id: 4,
      title: 'Eco-Transport',
      iconUrl: '/transportation_4515717.png',
      path: '/eco-transport-development'
    },
    {
      id: 5,
      title: 'Research and Development',
      iconUrl: '../conedevelopment.png',
      path: '/research-and-development'
    },
    {
      id: 6,
      title: 'Capacity Building',
      iconUrl: '../supply-chain-management_11562996.png',
      path: '/capacity-building'
    },
  ];
  
  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="icon-section">
            <img className="icon" src={card.iconUrl} alt={`Icon ${card.id}`} />
          </div>
          <div className="title-section">
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
