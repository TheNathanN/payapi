import { CardInfo } from '../../app/types';

interface Props {
  feature: CardInfo;
}

const FeatureCard = ({ feature }: Props) => {
  return (
    <div className=' w-full flex flex-col items-center justify-center '>
      <div className='flex items-center justify-center my-12 '>
        <img src={feature.image} alt='icon' className='mb-2 ' />
      </div>
      <div className='text-center px-4 md:px-3 '>
        <h3 className='font-sans text-secBlue text-h3sm font-bold my-4 '>
          {feature.title}
        </h3>
        <p className='font-sans text-body text-secLightBlue max-w-lg  '>
          {feature.info}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
