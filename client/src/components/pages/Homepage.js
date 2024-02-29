import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCarousel from './blogCarousel';
import CardComponent from './Cards';
import '../styles/Homepage.css';
import Footer from '../Footer';
import Modal from '../Modal';
import { fetchPosts } from '../../redux/posts/postSlice';
import { Link } from 'react-router-dom';
import Component from './Component';

const pressReleases = [
  { id: 1, title: 'news 2', content: 'Sample Dataset for the press releases with released or scheduled date.', Date: '25th Nov 2023' },
  { id: 2, title: 'news 3', content: 'Sample Dataset for the press releases with released or scheduled date.', Date: '23rd Dec 2023' },
  { id: 3, title: 'news 4', content: 'Sample Dataset for the press releases with released or scheduled date', Date: '23rd Dec 2023' },
];

const podcasts = [
  { id: 1, title: 'Fundamentals of road safety', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 2, title: 'Policy and regulatory framework in transport sector', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 3, title: 'Managing road safety risks', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 4, title: 'Speed management', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 5, title: 'Fatigue management', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 6, title: 'Journey planning', date: '23rd Dec 2023 - 20th Dec 2023' },
  { id: 7, title: 'Drunk/drug driving', date: '23rd Dec 2023 - 20th Dec 2023' }
]

const Homepage = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <Component />
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
          <div className="podcasts dark-bg">
          <h3>Podcasts</h3>
           <div className="podcasts-section">
            {podcasts.map((podcast) => (
              <div className="podcast-section m-2" key={podcast.id}>
               <Link>
                 <div className='p-2'>
                  <h5 className="text-white">{podcast.title}</h5>
                  <p className="text-white">{podcast.date}</p>
                 </div>
                </Link>
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
