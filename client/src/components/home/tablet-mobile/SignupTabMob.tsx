import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../../../app/animations';
import SignupForm from '../../SignupForm';

const SignupTabMob = () => {
  return (
    <div className='w-full px-6 flex flex-col items-center justify-center max-w-md md:max-w-xl lg:hidden  '>
      <motion.div
        variants={fadeInLeft}
        initial='hidden'
        animate='visible'
        className='flex items-center justify-center '
      >
        <h2 className='font-serif text-h3lg text-center text-secBlue pb-4 md:text-h2 '>
          Start building with our APIs for absolutely free.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center justify-center w-full md:px-12 md:pt-4 '
      >
        <SignupForm />

        <p className='text-center text-body mt-1 text-secLightBlue '>
          Have any questions?{' '}
          <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupTabMob;
