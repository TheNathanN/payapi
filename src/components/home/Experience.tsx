import { experience } from '../../companyData';
import CompanyList from '../CompanyList';
import AboutBtn from './AboutBtn';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section className='my-16 '>
      <div className='bg-secDarkBlue overflow-hidden relative '>
        <div className='absolute w-[780px] -top-[602px] right-1/2 translate-x-1/2 '>
          <img
            src='/assets/shared/desktop/bg-pattern-circle.svg'
            alt='cirlce'
            className='w-full'
          />
        </div>
        <div className='my-8'>
          <CompanyList color='white' />
        </div>
        <ExperienceCard title={experience.title} info={experience.info} />
        <AboutBtn />
      </div>
    </section>
  );
};

export default Experience;
