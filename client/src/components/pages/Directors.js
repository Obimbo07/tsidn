import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/directors.css";

const directors = [
  {
    id: 1,
    title: 'Executive Director',
    name: 'Samuel Musumba',
    imgPath: '/musumba.png',
    url: '/executive-director',
    intro: 'This should be intro content'
  },
  {
    id: 2,
    title: 'Senior Director Corporate Development and Marketing Communications and a Co-founder',
    name: 'Shirley Cherotich',
    imgPath: '/shirley.png',
    url: '/shirley-cherotich',
    intro: 'This should be intro content'
  },
  {
    id: 3,
    title: 'Senior Director Occupational Health, Environment, Policy, and Social Initiatives',
    name: 'Christine Ajulu',
    imgPath: '/chiristine.jpg',
    url: '/christine-ajulu',
    intro: 'This should be intro content'
  },
  {
    id: 4,
    title: 'Director Software Engineering, Innovation and Research Division ',
    name: 'Austin Obimbo',
    imgPath: '/MrObimbo.jpg',
    url: '/austin-obimbo',
    intro: 'This should be intro content'
  },
  {
    id: 5,
    title: 'Senior Director Services',
    name: 'Ian Kipchumba',
    imgPath: '/ian.jpeg',
    url: '/ian-kipchumba',
    intro: 'This should be intro content'
  },
  {
    id: 6,
    title: 'Operations Officer',
    name: 'Ms. Reginah Kinyanjui',
    imgPath: '/austin.png',
    url: '/reginah-kinyajui',
    intro: 'This should be intro content'
  },
  { 
    id: 7,
    title: 'Director and counsel',
    name: 'Abedi Amakobe',
    imgPath: '/DrAbedi.jpg',
    url: '/abedi-amakobe',
    intro: 'This should be intro content'
  },
];

const Directors = () => {
  return (
    <div className="container">
      <h3 className='p-2 leaderhead col-md-9 text-align-center'>Tsdn Leadership</h3>
      <div className="row">
        {directors.map((director) => (
          <div  key={director.id}>
            <Link className="text-decoration-none text-dark " to={director.url}>
              <div className="card w-100 directors-card">
                <div className="row no-guttersp-2">
                  <div className="col-md-4">
                    <img className="card-img directors-img" src={director.imgPath} alt={director.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{director.name}</h5>
                      <p className="card-text">{director.title}</p>
                      <p className="card-text">{director.intro}<Link to={director.url} className="card-link">...</Link></p>
                      
                    </div>
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
