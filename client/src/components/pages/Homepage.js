import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCarousel from './blogCarousel';
import CardComponent from './Cards';
import '../styles/Homepage.css';
import Navbar from './Navbar';
import Footer from '../Footer';
import Modal from '../Modal';
import { fetchPosts } from '../../redux/posts/postSlice';

const pressReleases = [
  { id: 1, title: 'news 2', content: 'Sample Dataset for the press releases with released or scheduled date.', Date: '25th Nov 2023' },
  { id: 2, title: 'news 3', content: 'Sample Dataset for the press releases with released or scheduled date.', Date: '23rd Dec 2023' },
  { id: 3, title: 'news 4', content: 'Sample Dataset for the press releases with released or scheduled date', Date: '23rd Dec 2023' },
];

const Homepage = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <Navbar />
      <div className="top-section">
        <div className="topContent">
          <div className="carousel">
            <BlogCarousel blogPosts={posts} />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <div className="press-releases">
            <h3>PRESS RELEASES</h3>
            <div className="timeline">
              {pressReleases.map((release) => (
                <div className="timeline-item" key={release.id}>
                  <div className="date">{release.Date}</div>
                  <div className="press-content">
                    <a href="#">
                    <p>{release.content}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="missions-section">
            <div className="missions">
              <p>Company missions</p>
              <div className="Company-video">
                <iframe
                  width= "-webkit-fill-available"
                  height="200"
                  src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
                  title="YouTube Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
        <CardComponent />
        <div className="lower-section">
          <div className="featured-videos">
            <h3>FEATURED VIDEOS</h3>
            <div className="video-container">

              <iframe
                width="460"
                height="315"
                src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
                title="YouTube Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
