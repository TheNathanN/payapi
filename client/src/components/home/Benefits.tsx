import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { fadeInRight } from '../../app/animations';
import { benefits } from '../../app/companyData';
import BenefitCard from './BenefitCard';

const Benefits = () => {
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
    <div ref={ref} className='max-w-[1440px] w-full '>
      <div className='hidden lg:block absolute w-[780px] -right-[30%] -translate-x-[5%] top-1/2 '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='cirlce'
          className='w-full '
        />
      </div>
      <motion.div variants={fadeInRight} initial='hidden' animate={controls}>
        <BenefitCard
          title={benefits[0].title}
          info={benefits[0].info}
          image={benefits[0].image}
          imgAlt={benefits[0].imgAlt}
          imgStyling={benefits[0].imgStyling}
          direction='left'
        />

        <BenefitCard
          title={benefits[1].title}
          info={benefits[1].info}
          image={benefits[1].image}
          imgAlt={benefits[1].imgAlt}
          imgStyling={benefits[1].imgStyling}
          direction='right'
        />
      </motion.div>
    </div>
  );
};

export default Benefits;
