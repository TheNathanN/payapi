import Benefits from '../components/home/Benefits';
import Experience from '../components/home/Experience';
import Features from '../components/home/Features';
import HomeSignup from '../components/home/HomeSignup';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div>
      <div className='absolute w-[780px] -top-[550px] -left-[202px] '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
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
