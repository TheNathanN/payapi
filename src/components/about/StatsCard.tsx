import { CardInfo } from '../../types';

const StatsCard = ({ title, info }: CardInfo) => {
  return (
    <div className='text-center '>
      <p className='font-sans text-body text-secLightBlue my-2 '>{title}</p>
      <p className='font-serif text-h2 font-light text-primPink mb-4 '>
        {info}
      </p>
    </div>
  );
};

export default StatsCard;
