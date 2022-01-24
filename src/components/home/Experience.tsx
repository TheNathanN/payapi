import { experience } from '../../companyData';
import CompanyList from '../CompanyList';
import AboutBtn from './AboutBtn';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section className='my-16 '>
      <div className='bg-secDarkBlue overflow-hidden relative '>
        <div className='absolute w-[780px] -top-[602px] -left-[202px] '>
          <img
            src='/assets/shared/desktop/bg-pattern-circle.svg'
            alt='cirlce'
          />
        </div>
        <CompanyList color='white' />
        <ExperienceCard title={experience.title} info={experience.info} />
        <AboutBtn />
      </div>
    </section>
  );
};

export default Experience;
