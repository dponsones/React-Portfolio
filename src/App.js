import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume/>;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
