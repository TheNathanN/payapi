import { useState } from 'react';

const ContactForm = () => {
  const [nameVal, setNameVal] = useState('');

  return (
    <form action='submit'>
      <input type='text' />
    </form>
  );
};

export default ContactForm;
