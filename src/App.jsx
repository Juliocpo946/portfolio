import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Education from './components/Education';
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
        <Experience />
        <Education />
        <RecentWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;