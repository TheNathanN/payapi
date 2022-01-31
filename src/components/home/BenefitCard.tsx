import { CardInfo } from '../../types';

const BenefitCard = ({ title, info, image, imgAlt, imgStyling, direction }: CardInfo) => {
  return (
    <div>
      {/* The direction prop determines which div to show with the desktop display */}
      {direction === 'left' ? (
        <div className='flex flex-col items-center justify-center relative lg:flex-row lg:px-[10%] lg:justify-between '>
          <div className='flex justify-center items-center max-w-md '>
            <img src={image} alt={imgAlt} className={imgStyling} />
          </div>

          <div className='text-center px-4 lg:text-left '>
            <h2 className='font-serif text-h3lg text-secBlue md:text-h2 '>
              {title}
            </h2>
            <p className='font-sans text-body text-secLightBlue my-4 max-w-lg lg:pr-8 '>
              {info}
            </p>
          </div>
        </div>
      ) : ''}

      {direction === 'right' ? (
        <div className='flex flex-col items-center justify-center relative lg:flex-row lg:px-[10%] lg:justify-between '>
          {/* This image shows while in Tablet/Mobile display */}
          <div className='flex justify-center items-center max-w-md lg:hidden '>
            <img src={image} alt={imgAlt} className={imgStyling} />
          </div>

          <div className='text-center lg:text-left px-4 '>
            <h2 className='font-serif text-h3lg text-secBlue md:text-h2 '>
              {title}
            </h2>
            <p className='font-sans text-body text-secLightBlue my-4 max-w-lg lg:pr-8 '>
              {info}
            </p>
          </div>

          {/* This image shows while in Desktop display */}
          <div className='hidden lg:flex justify-center items-center max-w-md '>
            <img src={image} alt={imgAlt} className={imgStyling} />
          </div>
        </div>
      ) : ''}
    </div>
  );
};

export default BenefitCard;
