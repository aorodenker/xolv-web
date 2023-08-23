import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Serve from './components/pages/Serve';
import Solutions from './components/pages/Solutions';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Home />} />
          <Route path="/careers" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;