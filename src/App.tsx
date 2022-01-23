import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import MobileNav from './components/MobileNav';

const App = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div
      className={
        mobileNav
          ? 'h-screen w-screen overflow-hidden bg-bgGreen relative '
          : 'bg-bgGreen min-h-screen relative overflow-hidden '
      }
    >
      {mobileNav ? <MobileNav setMobileNav={setMobileNav} /> : ''}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
