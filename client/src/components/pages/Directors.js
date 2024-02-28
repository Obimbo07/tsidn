import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/directors.css"

const directors = [
{
  id: 1,
  title: 'Executive Director',
  name: 'Samuel Musumba',
  imgPath: '/musumba.png',
  url: '/executive-director' 
},
{
  id: 2,
  title: 'Senior Director Corporate Development and Marketing Communications and a Co-founder',
  name: 'Shirley Cherotich',
  imgPath: '/shirley.png',
  url: '/shirley-cherotich'
},
{
  id: 3,
  title: 'Senior Director Occupational Health, Environment, Policy, and Social Initiatives',
  name: 'Christine Ajulu',
  imgPath: '/christine.png',
  url: '/christine-ajulu'
},
{
  id: 4,
  title: 'Director Software Engineering, Innovation and Research Division ',
  name: 'Austin Obimbo',
  imgPath: '/austin.png',
  url: '/austin-obimbo'
},
{
  id: 4,
  title: 'Senior Director Services TSDN',
  name: 'Ian Kipchumba',
  imgPath: '/ian.jpeg',
  url: '/ian-kipchumba'
},
{
  id: 4,
  title: 'Operations Officer TSDN ',
  name: 'Ms. Reginah Kinyanjui',
  imgPath: '/austin.png',
  url: '/reginah-kinyajui'
},
{ 
  id: 4,
  title: 'Director and counsel TSDN',
  name: 'Aaron Ngweno',
  imgPath: '/austin.png',
  url: '/aaron-ngweno'
},
{ 
  id: 4,
  title: 'Director and counsel TSDN',
  name: 'Abedi Amakobe',
  imgPath: '/abedi.jpeg',
  url: '/abedi-amakobe'
},
{ 
  id: 5,
  title: 'Director',
  name: 'Dr Romanus',
  imgPath: '/abedi.jpeg',
  url: '/dr-romanus'
},
]

const Directors = () => {
  return (
    <div className="container">
    <div className="row">
      {directors.map((director) => (
        <div className="col-md-4 mb-4 mt-4" key={director.id}>
          <Link className="text-decoration-none text-dark h-auto" to={director.url}>
            <div className="card w-100">
              <div className="card-header w-100 d-flex flex-row gap-10">
              <div className='w-20'>
                <img className="card-img-top w-10" src={director.imgPath} alt={director.name} />
              </div>
              <h5 className="card-title">{director.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text b-black">{director.title}</p>
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