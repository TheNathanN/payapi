import { features } from '../../companyData';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className='mb-8 md:flex md:px-4 md:mt-8 md:mb-16 '>
      {features.map(feature => (
        <FeatureCard key={features.indexOf(feature)} feature={feature} />
      ))}
    </section>
  );
};

export default Features;
