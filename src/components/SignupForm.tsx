import React, { useState } from 'react';

interface FormData {
  email: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      alert('Form has been submitted');
    }, 3000)
  }
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  return (
    <div className='w-full flex items-center justify-center '>
      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center w-full md:relative md:px-0 '
      >
        <input
          type='email'
          placeholder='Enter email address'
          name='email'
          onChange={changeHandler}
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
