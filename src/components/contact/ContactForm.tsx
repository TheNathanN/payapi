const ContactForm = () => {
  return (
    <form
      action='submit'
      className='flex flex-col items-center justify-center w-full lg:pl-[10%]  '
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        id='name'
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        id='email'
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        type='text'
        placeholder='Company Name'
        name='company'
        id='company'
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        id='title'
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <textarea
        name='message'
        id='message'
        cols={30}
        rows={3}
        placeholder='Message'
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <div className='flex items-center justify-start w-11/12 '>
        <div className='w-6 h-6 bg-secBlue bg-opacity-30 mr-4 '></div>
        <p className='w-10/12 text-body  text-secBlue font-sans '>
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>

      <div className='w-11/12 '>
        <button
          type='submit'
          className='border-[1px] border-secBlue py-2 px-10 justify-items-start rounded-full font-sans font-bold text-body text-secBlue my-4 '
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
