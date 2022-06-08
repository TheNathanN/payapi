import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { experience } from '../../app/companyData';
import CompanyList from '../CompanyList';
import AboutBtn from './AboutBtn';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='w-full max-w-[1440px] relative '>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='lg:flex lg:px-[10%] lg:py-[7%] lg:justify-center lg:items-center '
      >
        {/* Background Circle */}
        <div className='absolute w-[780px] -top-[602px] right-1/2 translate-x-1/2 md:-top-[548px] lg:-top-[359px] lg:-left-[50%] '>
          <img
            src='/assets/shared/desktop/bg-pattern-circle.svg'
            alt='cirlce'
            className='w-full '
          />
        </div>

        {/* Tablet & Mobile Layout */}
        <div className='my-8 flex items-center justify-center lg:hidden '>
          <CompanyList color='white' />
        </div>

        {/* Experience Card for both Layouts */}
        <div className='px-4 z-10 lg:w-[40%] '>
          <ExperienceCard title={experience.title} info={experience.info} />
          <AboutBtn />
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:my-8 lg:flex lg:items-center lg:justify-end lg:w-[60%] '>
          <CompanyList color='white' />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
