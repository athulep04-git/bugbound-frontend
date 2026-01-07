'use client';

import { useRef } from 'react';
import './FuzzyText.css';

const FuzzyText = ({
  text = '404',
  as: Component = 'div',
  className = '',
  intensity = 6,
  speed = 40,
  ...props
}) => {
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  const startFuzz = () => {
    if (!textRef.current || intervalRef.current) return;

    const letters = textRef.current.querySelectorAll('.fuzzy-text__char');

    intervalRef.current = setInterval(() => {
      letters.forEach(letter => {
        const x = (Math.random() - 0.5) * intensity;
        const y = (Math.random() - 0.5) * intensity;
        letter.style.transform = `translate(${x}px, ${y}px)`;
      });
    }, speed);
  };

  const stopFuzz = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    if (!textRef.current) return;
    const letters = textRef.current.querySelectorAll('.fuzzy-text__char');
    letters.forEach(letter => {
      letter.style.transform = 'translate(0px, 0px)';
    });
  };

  return (
    <Component
      ref={textRef}
      className={`fuzzy-text ${className}`}
      onMouseEnter={startFuzz}
      onMouseLeave={stopFuzz}
      {...props}
    >
      {text.split('').map((char, i) => (
        <span key={i} className="fuzzy-text__char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

export default FuzzyText;
