import { CardInfo } from '../../types';

const BenefitCard = ({ title, info, image, imgAlt, imgStyling }: CardInfo) => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='flex justify-center items-center max-w-md '>
        <img src={image} alt={imgAlt} className={imgStyling} />
      </div>

      <div className='text-center px-4 '>
        <h2 className='font-serif text-h3lg text-secBlue md:text-h2 '>
          {title}
        </h2>
        <p className='font-sans text-body text-secLightBlue my-4 max-w-lg '>
          {info}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
