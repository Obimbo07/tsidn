import { Routes, Route } from 'react-router-dom'; 
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  );
}

export default App;
