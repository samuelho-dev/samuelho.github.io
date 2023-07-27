import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavProgressBarProps {
  itemRef: React.RefObject<HTMLDivElement>;
}
function NavProgressBar({ itemRef }: NavProgressBarProps) {
  const [hookedYPostion, setHookedYPosition] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const scrollTop = itemRef.current.scrollHeight;
        const parentHeight = rect.height / 4;
        const parentTop = rect.top + scrollTop;
        let scrollProgress = (scrollTop - parentTop) / parentHeight;

        // Check if at bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          scrollProgress = 1;
        }

        setHookedYPosition(Math.min(Math.max(scrollProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemRef]);

  return (
    <motion.div
      animate={{ height: `${Math.round(hookedYPostion * 100)}%` }}
      className="absolute right-5 z-50 h-full w-2 rounded-b-lg bg-customBlack"
    >
      <motion.div
        className={`relative -mt-2 h-2 rounded-lg rounded-b-lg bg-white`}
        animate={{ top: `${Math.round(hookedYPostion * 100)}%` }}
        role="progressbar"
      />
    </motion.div>
  );
}

export default NavProgressBar;
