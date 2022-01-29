import Benefits from '../components/home/Benefits';
import Experience from '../components/home/Experience';
import Features from '../components/home/Features';
import HomeSignup from '../components/home/HomeSignup';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div>
      <div className='absolute w-[780px] -top-[550px] right-1/2 translate-x-1/2 md:w-[949px] md:-top-[663px] lg:w-[800px] lg:-top-[172px] lg:right-1/4 lg:translate-x-3/4 '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
          className='w-full '
        />
      </div>

      <Nav />
      <HomeSignup />
      <Experience />
      <Benefits />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
