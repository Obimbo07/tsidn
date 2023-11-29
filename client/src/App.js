
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Front from './adminPages/Front';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/Navbar';

function App() {
  return (
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/dashboard' element={<Front />} />,
        </Routes>
      </>
  );
}

export default App;
