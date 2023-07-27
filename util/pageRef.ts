import { useRef } from 'react';

export default function usePageRefs() {
  const pageRef = useRef<HTMLDivElement>(null);
  const frontpageRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const beatRef = useRef<HTMLDivElement>(null);

  return {
    pageRef,
    frontpageRef,
    aboutRef,
    workRef,
    contactRef,
    beatRef,
  };
}
