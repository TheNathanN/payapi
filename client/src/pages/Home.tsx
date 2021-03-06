import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { toggleMobileNav } from '../app/reduxSlices/mobileNavSlice';
import HomeSignup from '../components/home/HomeSignup';
import Experience from '../components/home/Experience';
import Benefits from '../components/home/Benefits';
import Features from '../components/home/Features';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleMobileNav(false));
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div>
      <div className='flex items-center justify-center '>
        <Nav />
      </div>

      <section className='flex items-center justify-center '>
        <HomeSignup />
      </section>

      <section className='flex items-center justify-center my-16 bg-secDarkBlue overflow-hidden relative  '>
        <Experience />
      </section>

      <section className='flex items-center justify-center '>
        <Benefits />
      </section>

      <section className='flex items-center justify-center '>
        <Features />
      </section>

      <div className='flex items-center justify-center '>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
