import { features } from '../../companyData';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section>
      {features.map(feature => (
        <FeatureCard key={features.indexOf(feature)} feature={feature} />
      ))}
    </section>
  );
};

export default Features;
