import { Link } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { toggleMobileNav } from '../app/reduxSlices/mobileNavSlice';

const MobileNav = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className='border-b-[1px] border-bgGrey flex justify-end py-4 mb-8 cursor-pointer '
        onClick={() => dispatch(toggleMobileNav(false))}
      >
        <img src='/assets/shared/mobile/close.svg' alt='close icon' />
      </div>

      <ul className='font-sans text-center text-bgGrey font-bold text-h3sm '>
        <li className='hover:text-secLightBlue transition-all my-8 '>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li className='hover:text-secLightBlue transition-all my-8 '>
          <Link to='/about'>About</Link>
        </li>
        <li className='hover:text-secLightBlue transition-all my-8 '>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='flex items-center justify-center '>
        <Link to='/'>
          <button className='bg-primPink hover:bg-secPink transition-all text-center text-primWhite rounded-3xl text-sans font-semibold px-12 py-2 text-body my-2 '>
            Schedule a Demo
          </button>
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
