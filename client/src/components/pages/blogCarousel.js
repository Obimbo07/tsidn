import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/BlogCarousel.css';



const Events = [
  { id: 1, title: 'Major Events', content: 'Company writeup that is displayed on each card and listed from the api data.'},
  { id: 2, title: 'Test Events', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 3, title: 'Events', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  { id: 4, title: 'Company  Events', content: 'Company writeup that is displayed on each card and listed from the api data.' },
]


const BlogCarousel = ({ blogPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
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
              src={URL.createObjectURL(new Blob([new Uint8Array(post.post_image.data)],{type: 'image/jpeg', }))}
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
                <div className="event-card"  key={event.id}>
                  <div className="card-logo">
                    <img src='../../LogoFinal.svg'  className="cardLogo" alt="tsdn-logo" />
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
