import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/directors.css";

const directors = [
  {
    id: 1,
    title: 'Executive Director',
    name: 'Samuel Musumba',
    imgPath: '/samuelMusumba.jpeg',
    url: '/executive-director',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:samuel@example.com'
  },
  {
    id: 2,
    title: 'Senior Director Corporate Development and Marketing Communications and a Co-founder',
    name: 'Shirley Cherotich',
    imgPath: '/shirley.jpg',
    url: '/shirley-cherotich',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:samuel@example.com'
  },
  {
    id: 3,
    title: 'Senior Director Occupational Health, Environment, Policy, and Social Initiatives',
    name: 'Christine Ajulu',
    imgPath: '/christine.jpg',
    url: '/christine-ajulu',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:samuel@example.com'
  },
  {
    id: 4,
    title: 'Director Software Engineering, Innovation and Research Division ',
    name: 'Austin Obimbo',
    imgPath: '/MrObimbo.jpg',
    url: '/austin-obimbo',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    email: 'mailto:samuel@example.com'
  },
  {
    id: 5,
    title: 'Senior Director Services',
    name: 'Ian Kipchumba',
    imgPath: '/ian.jpeg',
    url: '/ian-kipchumba',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:samuel@example.com'
  },

  { 
    id: 6,
    title: 'Director and counsel',
    name: 'Abedi Amakobe',
    imgPath: '/DrAbedi.jpg',
    url: '/abedi-amakobe',
    intro: 'This should be intro content',
    linkedin: 'https://www.linkedin.com/',
    email: 'mailto:samuel@example.com'
  },
];

const Directors = () => {
  return (
    <div className="directors-container">
      {directors.map((director) => (
        <div key={director.id} className="directors">
          <Link to={director.url} className="directors-link">
            <img src={director.imgPath} alt={director.name} className="directors-img" />
            <div className="directors-content">
              <div>
                <h3 className="directors-title">{director.title}</h3>
                <p className="directors-name">{director.name}</p>
              </div>
              <div className="directors-social">
                {director.linkedin && (
                  <a href={director.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {director.twitter && (
                  <a href={director.twitter}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {director.email && (
                  <a href={director.email}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Directors;