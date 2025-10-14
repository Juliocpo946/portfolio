import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <main>
        <About />
        <Technologies />
        <Services />
        <RecentWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;