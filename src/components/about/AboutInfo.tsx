import { ourAboutInfo, theAboutInfo, stats } from '../../companyData';
import AboutCard from './AboutCard';
import StatsCard from './StatsCard';

const AboutInfo = () => {
  return (
    <section>
      {ourAboutInfo.map(data => (
        <AboutCard
          title={data.title}
          info={data.info}
          key={ourAboutInfo.indexOf(data)}
        />
      ))}

      <div className='my-8 flex items-center justify-center '>
        <img src='/assets/about/mobile/image-team-members.jpg' alt='a team' />
      </div>

      <div className='border-y-[1px] border-y-secBlue border-opacity-40 mx-4 flex flex-col items-center justify-center '>
        {stats.map(stat => (
          <StatsCard
            key={stats.indexOf(stat)}
            title={stat.title}
            info={stat.info}
          />
        ))}
      </div>

      {theAboutInfo.map(data => (
        <AboutCard
          title={data.title}
          info={data.info}
          key={theAboutInfo.indexOf(data) + 5}
        />
      ))}
    </section>
  );
};

export default AboutInfo;
