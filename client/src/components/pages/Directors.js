import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/directors.css"

const directors = [
{
  id: 1,
  title: 'CEO',
  name: 'Samuel Musumba',
  imgPath: '/obimbo.jpeg',
  url: '/director-austin' 
},
{
  id: 2,
  title: 'CTO',
  name: 'John2',
  imgPath: '/obimbo.jpeg',
  url: '/director-austin'
},
{
  id: 3,
  title: 'Director Innovation',
  name: 'John3',
  imgPath: '/obimbo.jpeg',
  url: '/director-austin'
},
{
  id: 4,
  title: 'Finance',
  name: 'John4',
  imgPath: '/obimbo.jpeg',
  url: '/director-john'
},
]

const Directors = () => {
  return (
    <div className="directors-body">
      {directors.map((director) => (
         <div key={director.name} >
         <div className="directors-section">
         <Link to={director.url}>
         <div>
         <img src={director.imgPath} alt='directors' />
         </div>
         <h2>{director.title}</h2>
         <h1>{director.name}</h1> 
         </Link>
         </div>
          </div>
      ))}
    </div>
  )
}

export default Directors;