import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavProgressBarProps {
  itemRef: React.RefObject<HTMLDivElement>;
}
function NavProgressBar({ itemRef }: NavProgressBarProps) {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrolledPast = rect.top <= -rect.height;
        const endInView = rect.bottom <= windowHeight;
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        setScrollProgress(
          scrolledPast || endInView ? 1 : Math.max(0, progress),
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemRef]);

  return (
    <motion.div
      animate={{ height: `${Math.round(scrollProgress * 100)}%` }}
      className="absolute right-5 z-50 h-full w-2 rounded-b-lg bg-customBlack"
    >
      <motion.div
        className={`relative -mt-2 h-2 rounded-lg rounded-b-lg bg-white`}
        animate={{ top: `${Math.round(scrollProgress * 100)}%` }}
        role="progressbar"
      />
    </motion.div>
  );
}

export default NavProgressBar;
