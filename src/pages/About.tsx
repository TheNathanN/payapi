import PageContainer from './PageContainer';
import AboutInfo from '../components/about/AboutInfo';

const About = () => {
  const title =
    'We empower innovators by delivering access to the financial system';

  return (
    <PageContainer title={title}>
      <AboutInfo />
    </PageContainer>
  );
};

export default About;
