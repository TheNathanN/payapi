const SignupForm = () => {
  return (
    <div>
      <form action='' className='flex flex-col px-6 '>
        <input
          type='text'
          placeholder='Enter email address'
          className='focus:outline-none py-2 px-6 rounded-3xl text-sans font-semibold placeholder-secLightBlue text-body mb-2 shadow-md '
        />
        <button
          type='submit'
          className='bg-primPink text-center text-primWhite rounded-3xl text-sans font-semibold py-2 text-body my-2 '
        >
          Schedule a Demo
        </button>
      </form>
      <p className='text-center text-body mt-1 text-secLightBlue '>
        Have any questions?{' '}
        <span className='font-bold text-secBlue '>Contact Us</span>
      </p>
    </div>
  );
};

export default SignupForm;
