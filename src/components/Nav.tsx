import { Link } from 'react-router-dom';
import { logoGreen } from '../svg';

const Nav = () => {
  return (
    <nav className='md:mx-2 w-full max-w-[1440px] relative z-10 '>
      <div className='flex justify-between items-center pt-9 px-5 relative lg:px-[10%] '>
        <div>
          <Link to='/'>{logoGreen}</Link>
        </div>

        <ul className='hidden md:flex font-sans text-center text-secBlue font-bold text-h3sm  '>
          <li className='hover:text-secLightBlue transition-all my-8 mx-5 lg:mx-3 '>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li className='hover:text-secLightBlue transition-all my-8 mx-5 lg:mx-3 '>
            <Link to='/about'>About</Link>
          </li>
          <li className='hover:text-secLightBlue transition-all my-8 mx-5 lg:mx-3 '>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='hidden md:flex items-center justify-center lg:justify-end lg:w-2/4 '>
          <button className='bg-primPink hover:bg-secPink transition-all text-center text-primWhite rounded-3xl text-sans font-semibold px-10 py-3 text-body my-2 '>
            Schedule a Demo
          </button>
        </div>

        <div className='md:hidden '>
          <img src='/assets/shared/mobile/menu.svg' alt='menu logo' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
