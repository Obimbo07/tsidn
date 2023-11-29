import { Routes, Route } from 'react-router-dom'; 
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/Navbar';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
