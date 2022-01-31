const SignupForm = () => {
  return (
    <div className='w-full flex items-center justify-center '>
      <form
        action=''
        className='flex flex-col items-center w-full md:relative md:px-0 '
      >
        <input
          type='text'
          placeholder='Enter email address'
          className='focus:outline-none py-2 px-6 rounded-3xl text-sans font-bold text-body text-secBlue placeholder-secLightBlue placeholder-opacity-50 mb-2 shadow-md w-full  '
        />
        <button
          type='submit'
          className='bg-primPink hover:bg-secPink transition-all text-center text-primWhite rounded-3xl text-sans font-semibold py-2 text-body my-2 w-full md:absolute md:my-0 md:right-0 md:w-5/12 '
        >
          Schedule a Demo
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
