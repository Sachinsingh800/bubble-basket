// SlidingAnimation.js
import React, { useState, useEffect } from 'react';
import './SlidingAnimation.css'; // Import your CSS file for styling
import product1 from "../Images/dom perignon lady gaga rose.png";
import product2 from "../Images/perrier jouet grand brut.png";
import product3 from "../Images/silver oak aNapa valley PNG.png";

export const SlidingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Hold in the middle for 1 second
    }, 2000); // Slide in from the right after 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="animation-container">
      <div className={isVisible ? 'slideOutLeft' : 'slideInRight'}>
      <h1>MADE WITH PASSION</h1>
        <img className='img' src={product1} alt='beer' />
      </div>
    </div>
  );
};

export const SlidingAnimation2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Hold in the middle for 1 second
    }, 2000); // Slide in from the right after 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="animation-container">
      <div className={isVisible ? 'slideOutLeft' : 'slideInRight'}>
      <h1>MADE WITH PASSION</h1>
        <img className='img' src={product1} alt='beer' />
      </div>
    </div>
  );
};

export const SlidingAnimation3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Hold in the middle for 1 second
    }, 2000); // Slide in from the right after 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="animation-container">
      <div className={isVisible ? 'slideOutLeft' : 'slideInRight'}>
      <h1>MADE WITH PASSION</h1>
        <img className='img' src={product1} alt='beer' />
      </div>
    </div>
  );
};
