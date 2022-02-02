import { Link } from 'react-router-dom';
import SignupForm from '../../SignupForm';

const SignupDesktop = () => {
  return (
    <div className='hidden lg:flex items-start justify-center flex-col w-3/5 px-[10%]  '>
      <h2 className='font-serif text-h1lg text-left text-secBlue max-w-md '>
        Start building with our APIs for absolutely free.
      </h2>

      <div className='w-full pt-8 max-w-md '>
        <SignupForm />

        <p className='text-left text-body mt-1 text-secLightBlue pl-6 '>
          Have any questions?{' '}
          <span className='font-bold text-secBlue hover:cursor-pointer hover:text-secLightBlue transition-all '>
            <Link to='/contact'>Contact Us</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupDesktop;
