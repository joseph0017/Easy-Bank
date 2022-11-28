import './App.css';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Midsection from './components/Midsection';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Section />
      <Midsection />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
