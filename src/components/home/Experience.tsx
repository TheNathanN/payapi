import CompanyList from '../CompanyList';

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

        <div className='text-center '>
          <h2 className='font-serif text-h3lg text-primWhite '>
            Who we work with
          </h2>
          <p className='font-sans text-body text-bgGrey px-4 mt-4 '>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
        </div>

        <div className='text-primWhite flex items-center justify-center py-16 '>
          <button className='border-[1px] py-4 px-10 rounded-full font-sans font-semibold '>
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
