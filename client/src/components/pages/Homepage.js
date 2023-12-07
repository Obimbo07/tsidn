import React from 'react';
import BlogCarousel from './blogCarousel';
import '../styles/Homepage.css';
import Navbar from './Navbar';

const blogPosts = [
    { id: 1, title: 'Post 2', content: 'Content for post 2', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
  ];

const Events = [
  { id: 1, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data. ' },
  { id: 2, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 3, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 4, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
]

const pressReleases = [
  { id: 1,
     title: 'news 2', 
     content: 'Sample Dataset for the press realeases.',
    Date: '25th Nov 2023',

  },
  {
    id: 1,
    title: 'news 3',
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
     <div className="events-section">
        <div className="events-container">
         <span className="stn-header">MAJOR EVENTS</span>
           <div classname="events-section">
              {Events.map((event) => (
                <div className="event-card" key={event.id}>
                  <div className="card-logo">
                    <img src='../../LOGO.jpg'  className="cardLogo" alt="tsdn-logo" />
                </div>
                <div className="card-content">
                 <span>{event.title}</span>
                 <span>{event.content}</span>
                </div>
                </div>
              ))}
           </div>
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
        <div className="involvement">
  <div className="quick-info" >
    <img src="your_image_url_1" alt="Element 1" />
    <div className="info-text">
      <h3>REPORT ROAD SAFETY OFFENDERS</h3>
    </div>
  </div>

  <div className="quick-info" >
    <img src="your_image_url_2" alt="Element 2" />
    <div className="info-text">
      <h3>BOOK TRAININGS</h3>
    </div>
  </div>
</div>
     </div>
     </div>
    </div>
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
    </> 
  )
}

export default Homepage