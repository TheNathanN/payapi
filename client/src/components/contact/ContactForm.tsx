import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import axios from 'axios';
import CheckSVG from '../svg/CheckSVG'
import { setFormStatus, toggleSubmitting } from '../../app/reduxSlices/formStatusSlice';

interface FormData {
  name: string;
  email: string;
  company: string;
  marketing: boolean;
  title?: string;
  message?: string;
}

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    marketing: false,
    title: '',
    message: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleCheckbox = () => {
    setFormData({
      ...formData,
      marketing: !formData.marketing
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(toggleSubmitting(true));

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/contactForm`, formData);
      console.log(response);
      dispatch(setFormStatus(true));
    } catch (err) {
      console.log(err);
      dispatch(setFormStatus(false));
    }

    setFormData({
      name: '',
      email: '',
      company: '',
      marketing: false,
      title: '',
      message: '',
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center w-full lg:pl-[10%]  '
    >
      <input
        required
        type='text'
        placeholder='Name*'
        name='name'
        id='name'
        value={formData.name}
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue focus:invalid:border-b-[#ff0000] focus:invalid:placeholder-[#ff0000] focus:invalid:placeholder-opacity-50 '
      />
      <input
        required
        type='email'
        placeholder='Email Address*'
        name='email'
        id='email'
        value={formData.email}
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue focus:invalid:border-b-red focus:invalid:placeholder-red focus:invalid:placeholder-opacity-50 '
      />
      <input
        required
        type='text'
        placeholder='Company Name*'
        name='company'
        id='company'
        value={formData.company}
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue focus:invalid:border-b-red focus:invalid:placeholder-red focus:invalid:placeholder-opacity-50 '
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        id='title'
        value={formData.title}
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <textarea
        name='message'
        id='message'
        cols={30}
        rows={3}
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />

      <div className='flex items-center justify-start w-11/12 '>
        <input name='marketing' id='marketing' type='checkbox' onChange={handleCheckbox} checked={formData.marketing}
          className='opacity-0 w-6 h-6 absolute cursor-pointer ' />

        <div className="w-6 h-6 bg-secBlue bg-opacity-30 mr-4 flex items-center justify-center ">
          <div className='hidden '>
            <CheckSVG color='white' />
          </div>
        </div>

        <label htmlFor='marketing' className='w-10/12 text-body  text-secBlue font-sans cursor-pointer '>
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>

      <div className='w-11/12 '>
        <button
          type='submit'
          className='border-[1px] border-secBlue py-2 px-10 justify-items-start rounded-full font-sans font-bold text-body text-secBlue my-4 hover:bg-secBlue hover:text-primWhite transition-all  '
        >
          Submit
        </button>
      </div>
    </form>

  );
};

export default ContactForm;
