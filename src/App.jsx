import Navbar from './components/Project';
import Hero from './components/Navbar';
import Header from './components/Hero';
import Projects from './components/Service';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
