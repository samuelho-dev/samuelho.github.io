import { useRef } from 'react';
import { motion, useInView, stagger } from 'framer-motion';

interface ProjectContainerProps {
  style: string;
  bool: boolean;
  children: any;
}

function ProjectContainer({ style, bool, children }: ProjectContainerProps) {
  const listRef = useRef(null);
  const isInView = useInView(listRef);
  const headerVariants = {
    offscreen: {
      x: bool ? -30 : 30,
      opacity: 0.5,
    },
    onscreen: {
      x: 0,

      opacity: 1,
      transition: {
        type: 'bounce',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={listRef}
      variants={headerVariants}
      initial="offscreen"
      className={style}
      animate={isInView ? 'onscreen' : 'offscreen'}
    >
      {children}
    </motion.div>
  );
}

export default ProjectContainer;
