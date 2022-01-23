import { Link } from 'react-router-dom';
import { logoWhite } from '../svg';
import SignupForm from './SignupForm';
import FacebookSVG from './svg/FacebookSVG';
import TwitterSVG from './svg/TwitterSVG';
import LinkedInSVG from './svg/LinkedInSVG';

const Footer = () => {
  return (
    <footer>
      <div className='mb-14 '>
        <h2 className='text-center font-serif text-secBlue text-h4 my-6 '>
          Ready to start?
        </h2>
        <SignupForm />
      </div>

      <div className='bg-secDarkBlue overflow-hidden relative '>
        <div className='flex items-center justify-center py-8 '>
          <Link to='/'>{logoWhite}</Link>
        </div>

        <ul className='text-center font-sans font-bold text-body text-bgGrey relative z-10 '>
          <li className='mb-4 cursor-pointer hover:text-primWhite transition-all '>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li className='mb-4 cursor-pointer hover:text-primWhite transition-all '>
            <Link to='/about'>About</Link>
          </li>
          <li className='mb-4 cursor-pointer hover:text-primWhite transition-all '>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center justify-center pt-4 pb-9 relative z-10 '>
          <div className='mx-4'>
            <FacebookSVG />
          </div>
          <div className='mx-4'>
            <TwitterSVG />
          </div>
          <div className='mx-4'>
            <LinkedInSVG />
          </div>
        </div>

        <div className='absolute w-[780px] top-[177px] -left-[202px] '>
          <img
            src='/assets/shared/desktop/bg-pattern-circle.svg'
            alt='circle'
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
