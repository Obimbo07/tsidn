import React from 'react';
import BlogCarousel from './blogCarousel';
import CardComponent from './Cards';
import '../styles/Homepage.css';
import Navbar from './Navbar';
import Footer from '../Footer'; 

const blogPosts = [
    { id: 1, title: 'Post 2', content: 'Content for post 2', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 2, title: 'Post 2', content: 'Content for post 3', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 3, title: 'Post 2', content: 'Content for post 5', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 4, title: 'Post 2', content: 'Content for post 6', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },

  ];

const pressReleases = [
  { id: 1,
     title: 'news 2', 
     content: 'Sample Dataset for the press realeases.',
    Date: '25th Nov 2023',

  },
  {
    id: 2,
    title: 'news 3',
    content: 'Sample Dataset for the press realeases.',
    Date: '23rd Dec 2023',
  },
  {
    id: 3,
    title: 'news 4',
    content: 'Sample Dataset for the press realeases.',
    Date: '23rd Dec 2023',
  }

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
     </div>
     </div>
     <div className="bottom-section">
     <div className="bottom-content">
     <div className="press-releases">
  <h3>Press releases</h3>
  <div className="timeline">
    {pressReleases.map((release) => (
      <div className="timeline-item" key={release.id}>
        <div className="date">{release.Date}</div>
        <div className="press-content">
          <h4>{release.title}</h4>
          <p>{release.content}</p>
        </div>
      </div>
    ))}
  </div>
</div>
     <div className="missions-section">
        <div className="missions">
         <p>Company missions</p>
          <div className="Company-video">
          <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/LFrQ0kfRY_I?si=Ki97nqDyF3FQZv7F"
        title="YouTube Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
          ></iframe>
          </div>
        </div>
     </div>
     </div>
    </div>
    <CardComponent />
    <div className="lower-section">
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
    <Footer />
    </> 
  )
}

export default Homepage