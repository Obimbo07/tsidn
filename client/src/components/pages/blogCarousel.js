import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/BlogCarousel.css';

const BlogCarousel = ({ blogPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null, 
  };

  return (
    <div className="blog-carousel">
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div className="slider-inner" key={post.id}>
            <div className="intro-section">
              <a href="#" className="continue-reading-link">
              <h2>{post.title}</h2>
              <p>{post.content}</p>              
              </a>
            </div>
            <img
              src={post.image}
              alt={post.title}
              loading="lazy" // Add lazy loading attribute
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
