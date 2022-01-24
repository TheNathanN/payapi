import Footer from '../components/Footer';
import Nav from '../components/Nav';

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageContainer = ({ children, title }: Props) => {
  return (
    <div>
      <div className='absolute w-[780px] -top-[644px] left-[74px]  '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
        />
      </div>
      <Nav />
      <h2 className='font-serif text-center text-h3lg text-secBlue my-8 px-4 '>
        {title}
      </h2>
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
