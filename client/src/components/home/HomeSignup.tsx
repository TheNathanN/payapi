import { motion } from 'framer-motion';
import SignupDesktop from './desktop/SignupDesktop';
import SignupTabMob from './tablet-mobile/SignupTabMob';

const HomeSignup = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col items-center justify-center lg:flex-row '>
      <div className='absolute w-[780px] -top-[550px] right-1/2 translate-x-1/2 md:w-[949px] md:-top-[663px] lg:w-[800px] lg:-top-[172px] lg:right-1/4 lg:translate-x-3/4 '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
          className='w-full '
        />
      </div>

      {/* Desktop Layout */}
      <SignupDesktop />

      {/* Phone SVG */}
      <div className='relative flex justify-center items-center pl-9 pt-6 lg:pl-0 lg:pt-0 lg:w-2/5 '>
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 md:w-60 lg:w-80 '
        />
      </div>

      {/* Tablet & Mobile Layout */}
      <SignupTabMob />
    </div>
  );
};

export default HomeSignup;
