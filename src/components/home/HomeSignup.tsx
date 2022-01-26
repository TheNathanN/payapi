import { Link } from 'react-router-dom';
import SignupForm from '../SignupForm';

const HomeSignup = () => {
  return (
    <section>
      <div className='relative flex justify-center items-center pl-9 pt-6 '>
        <img
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 md:w-60 '
        />
      </div>

      <div className='flex items-center justify-center'>
        <h2 className='font-serif text-h3lg text-center text-secBlue px-6 pb-4 max-w-md md:text-h2 md:max-w-xl '>
          Start building with our APIs for absolutely free.
        </h2>
      </div>

      <SignupForm />

      <p className='text-center text-body mt-1 text-secLightBlue '>
        Have any questions?{' '}
        <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
          <Link to='/contact'>Contact Us</Link>
        </span>
      </p>
    </section>
  );
};

export default HomeSignup;
