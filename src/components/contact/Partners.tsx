import CompanyList from '../CompanyList';

const Partners = () => {
  return (
    <div className='text-center mt-12 '>
      <h2 className='font-serif font-thin text-secLightBlue text-h4 mx-4 '>
        Join the thousands of innovators already building with us
      </h2>
      <div className='mb-12 '>
        <CompanyList color='green' />
      </div>
    </div>
  );
};

export default Partners;
