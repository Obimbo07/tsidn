import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Transport',
      iconUrl: '../camera_1972954.png', 
    },
    {
      id: 2,
      title: 'Road Safety',
      iconUrl: '../agreement_10476721.png',
    },
    {
      id: 3,
      title: 'Trainings',
      iconUrl: '../traffic_cone.png',
    },
    {
      id: 4,
      title: 'Eco-Transport',
      imageUrl: 'https://placekitten.com/303/200',
      iconUrl: 'https://placekitten.com/53/50',
    },
    {
      id: 5,
      title: 'Research and Development',
      imageUrl: 'https://placekitten.com/304/200',
      iconUrl: 'https://placekitten.com/54/50',
    },
    {
      id: 6,
      title: 'Capacity Building',
      imageUrl: 'https://placekitten.com/305/200',
      iconUrl: 'https://placekitten.com/55/50',
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
