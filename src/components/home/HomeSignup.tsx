import { Link } from 'react-router-dom';
import SignupForm from '../SignupForm';

const HomeSignup = () => {
  return (
    <section className='lg:flex '>
      <div className='flex items-center justify-center lg:flex-col lg:w-2/4  '>
        <h2 className='hidden font-serif text-h3lg text-center text-secBlue px-6 pb-4 max-w-md lg:block lg:text-h1sm '>
          Start building with our APIs for absolutely free.
        </h2>

        <div className='hidden lg:block'>
          <SignupForm />

          <p className='text-center text-body mt-1 text-secLightBlue '>
            Have any questions?{' '}
            <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
              <Link to='/contact'>Contact Us</Link>
            </span>
          </p>
        </div>
      </div>

      <div className='relative flex justify-center items-center pl-9 pt-6 '>
        <img
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 md:w-60 '
        />
      </div>

      <div className='flex items-center justify-center'>
        <h2 className='font-serif text-h3lg text-center text-secBlue px-6 pb-4 max-w-md md:text-h2 md:max-w-xl lg:hidden '>
          Start building with our APIs for absolutely free.
        </h2>
      </div>

      <div className='lg:hidden '>
        <SignupForm />

        <p className='text-center text-body mt-1 text-secLightBlue '>
          Have any questions?{' '}
          <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default HomeSignup;
