import { benefits } from '../../companyData';
import BenefitCard from './BenefitCard';

const Benefits = () => {
  return (
    <section>
      <BenefitCard
        title={benefits[0].title}
        info={benefits[0].info}
        image={benefits[0].image}
        imgAlt={benefits[0].imgAlt}
        imgStyling={benefits[0].imgStyling}
        direction='left'
      />

      <BenefitCard
        title={benefits[1].title}
        info={benefits[1].info}
        image={benefits[1].image}
        imgAlt={benefits[1].imgAlt}
        imgStyling={benefits[1].imgStyling}
        direction='right'
      />
    </section>
  );
};

export default Benefits;
