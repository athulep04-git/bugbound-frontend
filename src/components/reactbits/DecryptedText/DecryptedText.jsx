'use client';

import { useEffect, useRef, useState } from 'react';
import './DecryptedText.css';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

const DecryptedText = ({
  text = '',
  as: Component = 'span',
  speed = 40,
  revealSpeed = 1,
  className = '',
  hover = true,
  ...props
}) => {
  const [output, setOutput] = useState(text);
  const frame = useRef(0);
  const intervalRef = useRef(null);

  const scramble = () => {
    clearInterval(intervalRef.current);
    frame.current = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (index < frame.current / revealSpeed) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setOutput(scrambled);

      frame.current += 1;

      if (frame.current >= text.length * revealSpeed) {
        clearInterval(intervalRef.current);
        setOutput(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (!hover) scramble();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Component
      className={`decrypted-text ${className}`}
      onMouseEnter={hover ? scramble : undefined}
      {...props}
    >
      {output}
    </Component>
  );
};

export default DecryptedText;
