import { Link } from 'react-router-dom';

interface Props {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ setMobileNav }: Props) => {
  return (
    <div className='bg-secDarkBlue min-h-screen w-10/12 absolute z-10 right-0 py-4 px-4 '>
      <div
        className='border-b-[1px] border-bgGrey flex justify-end py-4 mb-8 '
        onClick={() => setMobileNav(false)}
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

      <div className='flex items-center justify-center'>
        <button className='bg-primPink hover:bg-secPink transition-all text-center text-primWhite rounded-3xl text-sans font-semibold px-12 py-2 text-body my-2 '>
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
