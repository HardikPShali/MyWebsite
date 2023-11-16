import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Projectmeeting from './components/projectmeeting';
import Services from './components/services';
import Process from './components/process';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Subsidebar from './components/subsidebar';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      {/* <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router> */}
      <Home />
      <Header />
      <About />
      <Portfolio />
      <Projectmeeting />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
      <Subsidebar />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
