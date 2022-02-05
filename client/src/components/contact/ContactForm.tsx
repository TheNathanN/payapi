import React, { useState } from 'react';
import axios from 'axios';
import CheckSVG from '../svg/CheckSVG'

interface FormData {
  name: string;
  email: string;
  company: string;
  marketing: boolean;
  title?: string;
  message?: string;
}

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    marketing: false,
    title: undefined,
    message: undefined,
  });

  const handleClick = () => setFormData({ ...formData, marketing: !formData.marketing });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const submittedData = await axios.post('https://payapi-project.herokuapp.com/contactForm', formData);
      console.log(submittedData);
      alert('Form has been submitted');
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
  }

  return (

    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center w-full lg:pl-[10%]  '
    >
      <input
        required
        type='text'
        placeholder='Name'
        name='name'
        id='name'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        required
        type='email'
        placeholder='Email Address'
        name='email'
        id='email'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        required
        type='text'
        placeholder='Company Name'
        name='company'
        id='company'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        id='title'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <textarea
        name='message'
        id='message'
        cols={30}
        rows={3}
        placeholder='Message'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />

      <div className='flex items-center justify-start w-11/12 '>
        <input name='marketing' id='marketing' type='checkbox'
          onClick={(handleClick)} className='opacity-0 w-6 h-6 absolute ' />

        <div className="w-6 h-6 bg-secBlue bg-opacity-30 mr-4 flex items-center justify-center ">
          <div className='hidden '>
            <CheckSVG color='white' />
          </div>
        </div>

        <label htmlFor='marketing' className='w-10/12 text-body  text-secBlue font-sans '>
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

      {submitting && <div>Submitting Form...</div>}
    </form>

  );
};

export default ContactForm;
