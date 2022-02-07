import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import MobileNav from './components/MobileNav';
import FormStatusModal from './components/FormStatusModal';

const App = () => {
  const mobileNav = useAppSelector(state => state.mobileNav.openNav);
  const formSubmitting = useAppSelector(state => state.formStatus.submitting);

  return (
    <div>
      {formSubmitting ? <FormStatusModal /> : ''}
      <div
        className={
          mobileNav
            ? 'h-screen w-screen overflow-hidden bg-bgGreen relative md:h-full '
            : 'bg-bgGreen min-h-screen relative overflow-hidden '
        }
      >
        {mobileNav ? <MobileNav /> : ''}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
