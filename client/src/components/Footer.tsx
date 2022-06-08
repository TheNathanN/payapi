import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../app/animations';
import SignupForm from './SignupForm';
import FooterNav from './FooterNav';

const Footer = () => {
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
    <footer
      ref={ref}
      className='w-screen flex flex-col items-center justify-center '
    >
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        animate={controls}
        className='w-full max-w-[1440px] flex items-center justify-center '
      >
        <div className='mb-14 md:mb-32 w-full max-w-lg lg:flex lg:items-center lg:justify-between lg:max-w-full lg:px-[10%] lg:mb-16 '>
          <h2 className='text-center font-serif text-secBlue text-h4 my-6 md:text-h2 md:my-9 lg:text-left '>
            Ready to start?
          </h2>

          <div className='px-8 lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:max-w-md '>
            <SignupForm />
          </div>
        </div>
      </motion.div>

      <div className='bg-secDarkBlue  w-screen flex justify-center items-center'>
        <FooterNav />
      </div>
    </footer>
  );
};
export default Footer;
