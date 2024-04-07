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
    imgPath: '/musumba.png',
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
    imgPath: '/shirley.png',
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
    twitter: 'https://twitter.com/',
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
    twitter: 'https://twitter.com/',
    email: 'mailto:samuel@example.com'
  },
];

const Directors = () => {
  return (
    <div className="container">
      <h3 className='p-2 leaderhead col-md-9 text-align-center'>Tsdn Leadership</h3>
      <div className="row">
        {directors.map((director) => (
             <div className="card directors-card" key={director.id}>
              <Link className="text-decoration-none link-sctn text-dark" to={director.url}>
                <div className="flex ">
                  <div className="col-xl-4">
                    <img className="card-img directors-img" src={director.imgPath} alt={director.name} />
                  </div>
                  <div className="body-col">
                    <div className="card-body">
                     <div className="social-links">
                      <a href={director.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href={director.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href={director.email}><FontAwesomeIcon icon={faEnvelope} /></a>
                     </div>
                      <h5 className="card-title">{director.name}</h5>
                      <p className="card-text" style={{ fontWeight: '400' }}>{director.title}</p>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
        ))}
      </div>
    </div>
  );
}

export default Directors;
