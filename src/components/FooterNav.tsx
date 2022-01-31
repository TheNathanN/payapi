import { Link } from 'react-router-dom';
import { logoWhite } from '../svg';
import SignupForm from './SignupForm';
import FacebookSVG from './svg/FacebookSVG';
import TwitterSVG from './svg/TwitterSVG';
import LinkedInSVG from './svg/LinkedInSVG';

const FooterNav = () => {
  return (
    <div className='w-full max-w-[1440px] overflow-hidden relative md:flex md:items-center md:justify-between '>
      <div className='flex items-center justify-center py-8 md:ml-8 '>
        <Link to='/'>{logoWhite}</Link>
      </div>

      <ul className='text-center font-sans font-bold text-body text-bgGrey relative z-10 md:flex  '>
        <li className='mb-4 cursor-pointer hover:text-primWhite transition-all md:mb-0 md:mx-8 '>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li className='mb-4 cursor-pointer hover:text-primWhite transition-all md:mb-0 md:mx-8 '>
          <Link to='/about'>About</Link>
        </li>
        <li className='mb-4 cursor-pointer hover:text-primWhite transition-all md:mb-0 md:mx-8 '>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='flex items-center justify-center pt-4 pb-9 relative z-10 md:py-0 md:mr-2 '>
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

      <div className='absolute w-[780px] top-[177px] right-1/2 translate-x-1/2 md:-top-[136px] md:right-0 '>
        <img src='/assets/shared/desktop/bg-pattern-circle.svg' alt='circle' />
      </div>
    </div>
  );
};

export default FooterNav;
