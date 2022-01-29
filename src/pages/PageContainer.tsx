import Footer from '../components/Footer';
import Nav from '../components/Nav';

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageContainer = ({ children, title }: Props) => {
  return (
    <div>
      <div className='absolute w-[780px] -top-[644px] right-1/4 translate-x-3/4 md:-top-[464px] md:right-[15%] '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
        />
      </div>

      <Nav />

      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-serif text-center text-h3lg text-secBlue my-8 px-4 max-w-xl md:text-h2 md:my-12 '>
          {title}
        </h1>
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
