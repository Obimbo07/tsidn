import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = () => {
  // Sample data for each card
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      imageUrl: 'https://placekitten.com/300/200', // Sample image URL
      iconUrl: 'https://placekitten.com/50/50', // Sample icon URL
    },
    {
      id: 2,
      title: 'Card 2',
      imageUrl: 'https://placekitten.com/301/200',
      iconUrl: 'https://placekitten.com/51/50',
    },
    {
      id: 3,
      title: 'Card 3',
      imageUrl: 'https://placekitten.com/302/200',
      iconUrl: 'https://placekitten.com/52/50',
    },
    {
      id: 4,
      title: 'Card 4',
      imageUrl: 'https://placekitten.com/303/200',
      iconUrl: 'https://placekitten.com/53/50',
    },
    {
      id: 5,
      title: 'Card 5',
      imageUrl: 'https://placekitten.com/304/200',
      iconUrl: 'https://placekitten.com/54/50',
    },
    {
      id: 6,
      title: 'Card 6',
      imageUrl: 'https://placekitten.com/305/200',
      iconUrl: 'https://placekitten.com/55/50',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img className="card-image" src={card.imageUrl} alt={`Card ${card.id}`} />
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
