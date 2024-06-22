import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/BlogCarousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchMeetings } from '../../redux/posts/postSlice';



// const Events = [
//   { id: 1, title: '2 DAY EVENT AT CITAM', date: '14th - 20th January, Nairobi', content: 'Company writeup that is displayed on each card and listed from the api data.'},
//   { id: 2, title: 'ROAD SAFETY TRAINING TO SCHOOL DRIVERS', date: '20th - 22th January 2023, ', content: 'Company writeup that is displayed on each card and listed from the api data.' },
//   { id: 3, title: 'APPLICATION OF DRIVERS LISENCE AND RENEWALS', date: '25th - 20th January', content: 'Company writeup that is displayed on each card and listed from the api data.' },
//   { id: 4, title: 'MOMBASA ECO-TRANSPORT LAUNCH', date: '14th - 20th February', content: 'Company writeup that is displayed on each card and listed from the api data.' },
// ]



const BlogCarousel = () => {
  const blogPosts = useSelector((state) => state.posts.data);
  const meetingEvents = useSelector((state) => state.posts.meetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchMeetings())
  }, [dispatch]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null, 
  };

  return (
    <div className="slider-section">
    <div className="blog-carousel">
      <Slider {...settings}>
      {blogPosts.map((post) => (
          <div className="slider-inner" key={post.id}>
            <div className="intro-section">
              <a href={`blog/${post.id}`} className="continue-reading-link">
              <h6>{post.post_title}</h6>
              </a>
            </div>
            <img
              src={URL.createObjectURL(new Blob([new Uint8Array(post.post_image.data)],{type: 'image/jpg', }))}
              alt={post.title}
              loading="lazy"
              className="carousel-image"
            />
          </div>
        ))}
        </Slider>
    </div>
    <div className="event-section">
    <span className="stn-header bg-white">MAJOR EVENTS</span>
      <div className="events-section">
        <div className="events-container">
           <div className="events-section">
              {meetingEvents.map((event) => (
                <div className="event-card"  key={event.id}>
                  <div className="card-logo">
                    <img src='../../LogoFinal.svg'  className="cardLogo" alt="tsdn-logo" />
                  </div>
                <div className="card-content">
                 <a href="https://me.com" className="event-title">
                 <h4>{event.post_title}</h4>
                 </a>
                 <span>{event.start_date} to {event.end_date} </span>
                </div>
                </div>
              ))}
           </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
