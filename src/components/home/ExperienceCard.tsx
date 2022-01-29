import { CardInfo } from '../../types';

const ExperienceCard = ({ title, info }: CardInfo) => {
  return (
    <div className='text-center flex flex-col items-center justify-center '>
      <h2 className='font-serif text-h3lg text-primWhite md:text-h2 '>
        {title}
      </h2>
      <p className='font-sans text-body text-bgGrey px-4 mt-4 max-w-lg '>
        {info}
      </p>
    </div>
  );
};

export default ExperienceCard;
