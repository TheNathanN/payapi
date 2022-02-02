import PricingInfo from '../components/pricing/PricingInfo';
import PageContainer from './PageContainer';

const Pricing = () => {
  const title = 'Pricing';

  return (
    <PageContainer title={title}>
      <PricingInfo />
    </PageContainer>
  );
};

export default Pricing;
