import { Link } from 'react-router-dom';

const AboutBtn = () => {
  return (
    <div className='text-primWhite flex items-center justify-center py-16 '>
      <Link to='/about'>
        <button className='border-[1px] py-4 px-10 rounded-full font-sans font-semibold hover:bg-primWhite hover:text-secBlue transition-all '>
          About Us
        </button>
      </Link>
    </div>
  );
};

export default AboutBtn;
