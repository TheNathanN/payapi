import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { toggleMobileNav } from '../app/reduxSlices/mobileNavSlice';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageContainer = ({ children, title }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleMobileNav(false));
    window.scrollTo(0, 0);
  }, [dispatch])

  return (
    <div className='w-full lg:flex lg:flex-col lg:items-center' >
      <div className='absolute w-[780px] -top-[644px] right-1/4 translate-x-3/4 md:-top-[464px] md:right-[15%] lg:-top-[527px] lg:right-[40%] '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
        />
      </div>

      <Nav />

      <div className='w-full max-w-[1440px] flex flex-col items-center justify-center lg:items-start '>
        <h1 className='w-3/4 font-serif text-center text-h3lg text-secBlue my-8 px-4 md:text-h2 md:my-12 lg:px-[10%] lg:text-left '>
          {title}
        </h1>
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
