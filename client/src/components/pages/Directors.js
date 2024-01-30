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
  url: '/director-austin'
},
{
  id: 3,
  title: 'Senior Director Occupational Health, Environment, Policy, and Social Initiatives',
  name: 'Christine Ajulu',
  imgPath: '/christine.png',
  url: '/director-austin'
},
{
  id: 4,
  title: 'Director Software Engineering, Innovation and Research Division ',
  name: 'Austin Obimbo',
  imgPath: '/austin.png',
  url: '/director-john'
},
{
  id: 4,
  title: 'Senior Director Services TSDN',
  name: 'Ian Kipchumba',
  imgPath: '/ian.jpeg',
  url: '/director-john'
},
{
  id: 4,
  title: 'Operations Officer TSDN ',
  name: 'Ms. Reginah Kinyanjui',
  imgPath: '/austin.png',
  url: '/director-john'
},
{ 
  id: 4,
  title: 'Director and counsel TSDN',
  name: 'Aaron Ngweno',
  imgPath: '/austin.png',
  url: '/director-john'
},
{ 
  id: 4,
  title: 'Director and counsel TSDN',
  name: 'Abedi Amakobe',
  imgPath: '/abedi.jpeg',
  url: '/director-john'
},
]

const Directors = () => {
  return (
    <div className="directors-body">
      {directors.map((director) => (
         <div className="directors" key={director.name} >
         <div className="directors-section">
         <Link to={director.url}>
         <div>
         <img src={director.imgPath} alt='directors' />
         </div>
         <h1 className="director-title">{director.name}</h1>
         <h6 className="director-title">{director.title}</h6>
         </Link>
         </div>
          </div>
      ))}
    </div>
  )
}

export default Directors;