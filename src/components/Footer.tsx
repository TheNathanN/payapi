import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer>
      <div className='mb-14 md:mb-32 '>
        <h2 className='text-center font-serif text-secBlue text-h4 my-6 md:text-h2 md:my-9 '>
          Ready to start?
        </h2>
        <SignupForm />
      </div>
      <FooterNav />
    </footer>
  );
};
export default Footer;
