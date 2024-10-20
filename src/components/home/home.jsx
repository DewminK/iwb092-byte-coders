import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for the carousel
import Header from './header';
import './header.css';
import './home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay to ensure smooth appearance
    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleLearnMore = () => {
    console.log('Learn more about the iPhone 16 Pro');
  };

  const handleBuy = () => {
    console.log('Redirect to iPhone 16 Pro buying page');
  };

  return (
    <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
        <div className="hero-section">
          <img 
            src="src/components/images/main.webp" 
            alt="iPhone 16 Pro" 
            className="hero-image"
            style={{ width: '100%', height: 'auto' }}
          />
          <h1>Welcome to FlagX</h1>
          <p>Experience the Future of Mobile Technology</p>
          <button onClick={handleLearnMore}>Learn more</button>
          <button onClick={handleBuy}>Buy</button>
        </div>

        <div className="slideshow-section">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
            <div>
              <img src="src/components/images/16.jpg" alt="Slide 1" className="carousel-img" />
              <p className="legend">iPhone 16 Pro - Sleek Design</p>
            </div>
            <div>
              <img src="src/components/images/s24.jpg" alt="Slide 2" className="carousel-img" />
              <p className="legend">Samsung Galaxy S24 Ultra</p>
            </div>
            <div>
              <img src="src/components/images/pixel9.png" alt="Slide 3" className="carousel-img" />
              <p className="legend">Google Pixel 9</p>
            </div>
          </Carousel>
        </div>

        <div className="flyer-section">
          <div className="flyer-box">
            <img src="src/components/images/pixel.webp" alt="Flyer 1" className="flyer-image" />
            <button className="share-button">Latest News</button>
          </div>
          <div className="flyer-box">
            <img src="src/components/images/16pmx.webp" alt="Flyer 2" className="flyer-image" />
            <button className="share-button">Comparison</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
