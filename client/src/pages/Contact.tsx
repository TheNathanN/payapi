import ContactForm from '../components/contact/ContactForm';
import Partners from '../components/contact/Partners';
import PageContainer from './PageContainer';

const Contact = () => {
  const title = "Submit a help request and we'll get in touch shortly.";
  return (
    <PageContainer title={title}>
      <section className='w-full max-w-[1440px] flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start '>
        <ContactForm />
        <Partners />
      </section>
    </PageContainer>
  );
};

export default Contact;
