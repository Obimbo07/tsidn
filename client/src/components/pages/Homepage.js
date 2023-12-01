import React from 'react';
import BlogCarousel from './blogCarousel';
import '../styles/Homepage.css';
import Navbar from './Navbar';

const blogPosts = [
    { id: 1, title: 'Post 1', content: 'Content for post 1' },
    { id: 2, title: 'Post 2', content: 'Content for post 2' },
  ];
const Homepage = () => {
  return (
    <>
    <Navbar />
      <div  className="top-section">
     <div className="topContent">
     <div className="carousel">
     <BlogCarousel blogPosts={blogPosts} />
     </div>
     <div className="events-section">
        <div className="events-container">
         <h3>Major Events</h3>
         
        </div>
     </div>
     </div>
     <div className="press-releases">
         <p>Press releases</p>
     </div>
     <div className="missions-section">
        <div className="missions">
         <p>Company missions</p>
        </div>
     </div>
     <div className="featured-videos">
      <h3>FEATURED VIDEOS</h3>
     <div className="video-container">
      <iframe
        width="460"
        height="315"
        src="https://www.youtube.com/embed/LFrQ0kfRY_I?si=Ki97nqDyF3FQZv7F"
        title="YouTube Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        width="460"
        height="315"
        src="https://www.youtube.com/embed/LFrQ0kfRY_I?si=Ki97nqDyF3FQZv7F"
        title="YouTube Video 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
     </div>
    </div>
    </>
    
  )
}

export default Homepage