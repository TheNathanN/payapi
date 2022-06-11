import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import axios from 'axios';
import {
  setFormStatus,
  toggleSubmitting,
} from '../app/reduxSlices/formStatusSlice';

interface FormData {
  email: string;
}

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(toggleSubmitting(true));

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/demoForm`,
        formData
      );
      console.log(response);
      dispatch(setFormStatus(true));
    } catch (err) {
      console.log(err);
      dispatch(setFormStatus(false));
    }

    setFormData({
      email: '',
    });
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      email: e.currentTarget.value,
    });
  };

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
          value={formData.email}
          onChange={changeHandler}
          required
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
