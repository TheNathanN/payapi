import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../../../app/animations';
import SignupForm from '../../SignupForm';

const SignupDesktop = () => {
  return (
    <div className='hidden lg:flex items-start justify-center flex-col w-3/5 px-[10%]  '>
      <motion.h2
        variants={fadeInLeft}
        initial='hidden'
        animate='visible'
        className='font-serif text-h1lg text-left text-secBlue max-w-md '
      >
        Start building with our APIs for absolutely free.
      </motion.h2>

      <motion.div
        variants={fadeInLeft}
        initial='hidden'
        animate='visible'
        className='w-full pt-8 max-w-md '
      >
        <SignupForm />

        <p className='text-left text-body mt-1 text-secLightBlue pl-6 '>
          Have any questions?{' '}
          <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupDesktop;
