import { logoGreen } from '../svg';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center pt-9 px-5 relative '>
      <div>{logoGreen}</div>
      <div>
        <img src='/assets/shared/mobile/menu.svg' alt='menu logo' />
      </div>
    </nav>
  );
};

export default Nav;
