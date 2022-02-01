import React, { useState } from 'react';
import CheckSVG from '../svg/CheckSVG'

interface FormData {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  'marketing-list': string;

}

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
    'marketing-list': ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      alert('Form has been submitted');
    }, 3000)
  }

  return (

    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center w-full lg:pl-[10%]  '
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        id='name'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        id='email'
        onChange={handleChange}
        className='placeholder-secBlue placeholder-opacity-50 bg-bgGreen border-b-[1px] border-b-secBlue border-opacity-50 w-11/12 text-body text-secBlue pb-3 px-4 mb-6 focus:outline-none focus:border-opacity-100 autofill:bg-bgGreen autofill:text-secBlue '
      />
      <input
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
        <input name='marketing-list' value='checked' id='marketing-list' type='checkbox'
          onChange={handleChange} className='opacity-0 w-6 h-6 absolute ' />

        <div className="w-6 h-6 bg-secBlue bg-opacity-30 mr-4 flex items-center justify-center ">
          <div className='hidden '>
            <CheckSVG color='white' />
          </div>
        </div>

        <label htmlFor='marketing-list' className='w-10/12 text-body  text-secBlue font-sans '>
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
