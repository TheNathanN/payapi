import AboutCard from './AboutCard';
import { CardInfo } from '../../types';

const AboutInfo = () => {
  const ourInfo: CardInfo[] = [
    {
      title: 'Our Vision',
      info: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.',
    },
    {
      title: 'Our Business',
      info: 'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.',
    },
  ];

  const theInfo: CardInfo[] = [
    {
      title: 'The Culture',
      info: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
    },
    {
      title: 'The People',
      info: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
    },
  ];
  return (
    <section>
      {ourInfo.map(data => (
        <AboutCard
          title={data.title}
          info={data.info}
          key={ourInfo.indexOf(data)}
        />
      ))}

      {theInfo.map(data => (
        <AboutCard
          title={data.title}
          info={data.info}
          key={theInfo.indexOf(data) + 5}
        />
      ))}
    </section>
  );
};

export default AboutInfo;
