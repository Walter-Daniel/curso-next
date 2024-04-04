import React, { useState, useEffect } from 'react';
import { Button, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollToTopButtonProps {
  targetId: string;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ targetId }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const distanceToTarget = targetElement.offsetTop - scrollTop;
        setShowButton(distanceToTarget < window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetId]);

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={showButton}>
      <Button
        onClick={scrollToTarget}
        color="primary"
        variant='contained'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Zoom>
  );
};