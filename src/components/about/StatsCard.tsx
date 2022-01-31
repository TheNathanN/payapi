import { CardInfo } from '../../app/types';

const StatsCard = ({ title, info }: CardInfo) => {
  return (
    <div className='text-center md:border-y-[1px] md:border-y-secBlue md:border-opacity-40 md:text-left md:w-1/3 md:mx-2 '>
      <p className='font-sans text-body text-secLightBlue my-2 '>{title}</p>
      <p className='font-serif text-h2 font-light text-primPink mb-4 '>
        {info}
      </p>
    </div>
  );
};

export default StatsCard;
