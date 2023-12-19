import React from 'react';
import BlogCarousel from './blogCarousel';
import CardComponent from './Cards';
import '../styles/Homepage.css';
import Navbar from './Navbar';
import Footer from '../Footer'; 
import { useSelector, useDispatch } from 'react-redux';
import useEffect from 'react';
import { fetchPosts } from '../../redux/Posts/postSlice';




const Homepage = () => {
  const blogPosts = useSelector((state) => state.data);
const dispatch = useDispatch();
console.log(blogPosts);

useEffect(() => {
  dispatch(fetchPosts())
}, [dispatch])
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
    {blogPosts.map((release) => (
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
        src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
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