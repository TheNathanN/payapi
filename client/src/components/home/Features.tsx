import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fadeInUp } from '../../app/animations';
import { useInView } from 'react-intersection-observer';
import { features } from '../../app/companyData';
import FeatureCard from './FeatureCard';

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className='w-full max-w-[1440px] mb-8 md:flex md:items-center md:justify-center md:px-4 md:mt-8 md:mb-16 '
    >
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        animate={controls}
        className='w-full max-w-[1440px] mb-8 md:flex md:items-center md:justify-center md:px-4 md:mt-8 md:mb-16 '
      >
        {features.map(feature => (
          <div
            key={features.indexOf(feature)}
            className='lg:first:pl-[10%] lg:last:pr-[10%] '
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
