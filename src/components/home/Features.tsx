import { features } from '../../companyData';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className='w-full max-w-[1440px] mb-8 md:flex md:items-center md:justify-center md:px-4 md:mt-8 md:mb-16 '>
      {features.map(feature => (
        <div className='lg:first:pl-[10%] lg:last:pr-[10%] ' >
          <FeatureCard key={features.indexOf(feature)} feature={feature} />
        </div>
      ))}
    </div>
  );
};

export default Features;
