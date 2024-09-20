import React, { useState, useEffect } from 'react';
import Web from './Web.json';
import Free from './Free.json';
import HomeAnimation from './HomeAnimation.json';
import Lottie from 'lottie-react';
import { Carousel } from 'react-bootstrap';
import '../../CSS/Style.css'; // Import your custom CSS file

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming 3 slides (0, 1, 2)
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const renderAnimation = (animationData) => {
    return (
      <Lottie
        className="croimgg"
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    );
  };

  return (
    <div className="container z">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null} // Disable automatic sliding on hover
        pause="hover" // Pause on carousel hover
        indicators={false} // Hide the slide indicators
        nextIcon={<span className="carousel-control-next"><i className="fas fa-chevron-right text-white"></i></span>}
        prevIcon={<span className="carousel-control-prev"><i className="fas fa-chevron-left text-white"></i></span>}
      >
        <Carousel.Item>
          <div className="container">
            <div className='row'>
              <div className='col-12 col-md-7 d-flex align-items-center p-0'>
                <h1 className='display-3 oswald'>Unlock Your Cosmic Potential: Discover Your Unique Astrological Blueprint!</h1>
              </div>
              <div className="col-12 col-md-5 ">
                {renderAnimation(Web)}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className='row'>
              <div className='col-12 col-md-7 d-flex align-items-center p-0'>
                <h1 className='display-3 oswald'>Navigate Life's Journey with Personalized Astrology Insights!</h1>
              </div>
              <div className="col-12 col-md-5">
                {renderAnimation(Free)}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className='row'>
              <div className='col-12 col-md-7 d-flex align-items-center p-0'>
                <h1 className='display-3 oswald'>Embrace the Stars: Transform Your Future with Expert Astrological Guidance!</h1>
              </div>
              <div className="col-12 col-md-5">
                {renderAnimation(HomeAnimation)}
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
