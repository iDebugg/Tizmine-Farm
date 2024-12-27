import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
