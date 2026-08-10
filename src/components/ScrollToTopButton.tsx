'use client';

import { useEffect, useState } from 'react';

import styles from '../css/ScrollToTopButton.module.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={styles['scroll-to-top']}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;
