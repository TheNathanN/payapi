import SignupDesktop from './desktop/SignupDesktop';
import SignupTabMob from './tablet-mobile/SignupTabMob';

const HomeSignup = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center lg:flex-row  '>
      {/* Desktop Layout */}
      <SignupDesktop />

      {/* Phone SVG */}
      <div className='relative flex justify-center items-center pl-9 pt-6 lg:pl-0 lg:pt-0 lg:w-2/5 '>
        <img
          src='/assets/home/desktop/illustration-phone-mockup.svg'
          alt='phone mockup'
          className='w-52 md:w-60 lg:w-80 '
        />
      </div>

      {/* Tablet & Mobile Layout */}
      <SignupTabMob />
    </section>
  );
};

export default HomeSignup;
