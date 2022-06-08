import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div
      className={
        formSubmitting
          ? 'h-screen w-screen overflow-hidden relative '
          : 'min-h-screen relative overflow-hidden '
      }
    >
      {formSubmitting ? <FormStatusModal /> : ''}
      <div
        className={
          mobileNav
            ? 'h-screen w-screen overflow-hidden relative bg-bgGreen md:h-full '
            : 'bg-bgGreen '
        }
      >
        <AnimatePresence>
          {mobileNav ? (
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              transition={{ duration: 0.5, stiffness: 300 }}
              className='bg-secDarkBlue min-h-screen w-10/12 absolute z-20 right-0 py-4 px-4 md:hidden '
            >
              <MobileNav />
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
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
