import { Link } from 'react-router-dom';

const RequestBtn = () => {
  return (
    <Link to='/contact'>
      <button className='border-[1px] border-secBlue rounded-full py-2 px-4 text-body font-bold text-secBlue hover:bg-secBlue hover:text-primWhite transition-all  '>
        Request Access
      </button>
    </Link>
  );
};

export default RequestBtn;
