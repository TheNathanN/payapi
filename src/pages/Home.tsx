import Experience from '../components/home/Experience';
import HomeSignup from '../components/home/HomeSignup';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className='bg-bgGreen min-h-screen relative overflow-hidden '>
      <div className='absolute w-[780px] h-[780px] -top-[550px] -left-[202px] '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
        />
      </div>
      <Nav />
      <HomeSignup />
      <Experience />
    </div>
  );
};

export default Home;
