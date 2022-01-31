import SignupForm from './SignupForm';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className='w-screen flex flex-col items-center justify-center '>
      <div className='w-full max-w-[1440px] flex items-center justify-center ' >
        <div className='mb-14 md:mb-32 w-full max-w-lg lg:flex lg:items-center lg:justify-between lg:max-w-full lg:px-[10%] lg:mb-16 '>
          <h2 className='text-center font-serif text-secBlue text-h4 my-6 md:text-h2 md:my-9 lg:text-left '>
            Ready to start?
          </h2>

          <div className='px-8 lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:max-w-md '>
            <SignupForm />
          </div>
        </div>
      </div>

      <div className='bg-secDarkBlue  w-screen flex justify-center items-center'>
        <FooterNav />
      </div>
    </footer>
  );
};
export default Footer;
