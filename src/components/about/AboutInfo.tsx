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
        <img
          src='/assets/about/mobile/image-team-members.jpg'
          alt='a team'
          className='md:hidden'
        />
        <img
          src='/assets/about/tablet/image-team-members.jpg'
          alt='a team'
          className='sm:hidden md:block lg:hidden '
        />
        <img
          src='/assets/about/desktop/image-team-members.jpg'
          alt='a team'
          className='sm:hidden lg:block '
        />
      </div>

      <div className='max-w-[1440px] border-y-[1px] border-y-secBlue border-opacity-40 mx-4 flex flex-col items-center justify-center md:border-none md:flex-row md:mx-8 md:my-16 lg:px-[10%] '>
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
