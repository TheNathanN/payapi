import { CardInfo } from '../../types';

interface Props {
  feature: CardInfo;
}

const FeatureCard = ({ feature }: Props) => {
  return (
    <div>
      <div className='flex items-center justify-center my-12 '>
        <img src={feature.image} alt='icon' className='mb-2 ' />
      </div>
      <div className='text-center px-4 '>
        <h3 className='font-sans text-secBlue text-h3sm font-bold my-4 '>
          {feature.title}
        </h3>
        <p className='font-sans text-body text-secLightBlue '>{feature.info}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
