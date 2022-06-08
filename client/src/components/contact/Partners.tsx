import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { fadeInUp } from '../../app/animations';
import CompanyList from '../CompanyList';

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      className='w-full text-center mt-12 flex flex-col items-center max-w-xl mr-2'
    >
      <motion.div variants={fadeInUp} initial='hidden' animate={controls}>
        <h2 className='font-serif font-thin text-secLightBlue text-h4 w-full mx-1'>
          Join the thousands of innovators already building with us
        </h2>
        <div className='mb-12'>
          <CompanyList color='green' />
        </div>
      </motion.div>
    </div>
  );
};

export default Partners;
