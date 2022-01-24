import { CardInfo } from '../../types';

const ExperienceCard = ({ title, info }: CardInfo) => {
  return (
    <div className='text-center '>
      <h2 className='font-serif text-h3lg text-primWhite '>{title}</h2>
      <p className='font-sans text-body text-bgGrey px-4 mt-4 '>{info}</p>
    </div>
  );
};

export default ExperienceCard;
