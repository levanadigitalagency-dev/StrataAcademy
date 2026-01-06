'use client';

import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import CohortCard, { CohortCardProps } from './CohortCard';

type CohortSliderProps = {
  data: CohortCardProps[];
};

export default function CohortSlider({ data }: CohortSliderProps) {
  const [width, setWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const calculateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    checkIsDesktop();
    calculateWidth();

    window.addEventListener('resize', checkIsDesktop);
    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('resize', calculateWidth);
    };
  }, [data]);

  return (

    <div className="md:overflow-hidden w-full cursor-default md:cursor-grab md:active:cursor-grabbing">
      <motion.div
        ref={carouselRef}
        drag={isDesktop ? "x" : false}
        dragConstraints={{ right: 0, left: -width }}
        whileTap={isDesktop ? { cursor: "grabbing" } : {}}
        className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-8"
      >
        {data.map((card, index) => (
          <motion.div
            key={index}
            className="flex w-full md:w-auto justify-center"
            style={{ flexShrink: 0 }}
          >
            <CohortCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
