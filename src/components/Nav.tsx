import { Link } from 'react-router-dom';
import { logoGreen } from '../svg';

const Nav = () => {
  return (
    <nav>
      <div className='flex justify-between items-center pt-9 px-5 relative '>
        <div>
          <Link to='/'>{logoGreen}</Link>
        </div>
        <div>
          <img src='/assets/shared/mobile/menu.svg' alt='menu logo' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
