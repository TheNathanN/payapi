import SignupForm from './SignupForm';

const HomeSignup = () => {
  return (
    <div>
      <div className='relative flex justify-center items-center pl-9 pt-6 '>
        <img
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 '
        />
      </div>

      <div>
        <h1 className='font-serif text-h3lg text-center text-secBlue px-6 pb-4 '>
          Start building with our APIs for absolutely free.
        </h1>
      </div>

      <SignupForm />
    </div>
  );
};

export default HomeSignup;
