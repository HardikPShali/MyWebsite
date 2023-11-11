import './App.css';
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
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
