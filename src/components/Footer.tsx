import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className='w-screen flex flex-col items-center justify-center '>
      <div className='mb-14 md:mb-32 w-full max-w-lg lg:flex lg:items-center lg:justify-between lg:max-w-full lg:px-[10%] '>
        <h2 className='text-center font-serif text-secBlue text-h4 my-6 md:text-h2 md:my-9 lg:text-left '>
          Ready to start?
        </h2>
        <div className='px-8 lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:max-w-md '>
          <SignupForm />
        </div>
      </div>

      <FooterNav />
    </footer>
  );
};
export default Footer;
