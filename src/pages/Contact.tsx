import ContactForm from '../components/contact/ContactForm';
import Partners from '../components/contact/Partners';
import PageContainer from './PageContainer';

const Contact = () => {
  const title = "Submit a help request and we'll get in touch shortly.";
  return (
    <PageContainer title={title}>
      <section>
        <ContactForm />
        <Partners />
      </section>
    </PageContainer>
  );
};

export default Contact;
