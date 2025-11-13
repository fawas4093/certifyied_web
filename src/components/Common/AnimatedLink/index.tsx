'use client';
import { useState } from 'react';
import { Div, Word, Span, AbsoluteContainer } from './styles';
import { Variants } from 'framer-motion';

const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo: Variants = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

interface AnimatedLinkProps {
  title: string;
  url?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ title, url = '/' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <Div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AbsoluteContainer href={url} onClick={handleClick}>
        <Word
          variants={titleAnimation}
          initial="rest"
          animate={isHovered ? 'hover' : 'rest'}
        >
          {title.split('').map((char, i) =>
            char === ' ' ? (
              <Span key={i}>&nbsp;</Span>
            ) : (
              <Span
                variants={char === title[0] ? letterAnimation : letterAnimationTwo}
                key={i}
              >
                {char}
              </Span>
            )
          )}
        </Word>
      </AbsoluteContainer>
    </Div>
  );
};

export default AnimatedLink;
