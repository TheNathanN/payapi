import { Link } from 'react-router-dom';
import SignupForm from '../SignupForm';

const HomeSignup = () => {
  return (
    <section>
      <div className='relative flex justify-center items-center pl-9 pt-6 '>
        <img
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 '
        />
      </div>

      <h2 className='font-serif text-h3lg text-center text-secBlue px-6 pb-4 '>
        Start building with our APIs for absolutely free.
      </h2>

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
