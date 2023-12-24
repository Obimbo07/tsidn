import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/BlogCarousel.css';


const Events = [
  { id: 1, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data. ' },
  { id: 2, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 3, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 4, title: 'MajorEvents', content: 'Company writeup that is displayed on each card and listed from the api data.' },
]


const BlogCarousel = ({ blogPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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
              <h2>{post.title}</h2>
              <p>{post.content}</p>              
              </a>
            </div>
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="carousel-image"
            />
          </div>
        ))}
        </Slider>
    </div>
    <div className="event-section">
    <span className="stn-header">MAJOR EVENTS</span>
      <div className="events-section">
        <div className="events-container">
           <div className="events-section">
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
      </div>
    </div>
  );
};

export default BlogCarousel;
