
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Front from './adminPages/Front';
import TransportSafety from './adminPages/TransportSafety';
import Homepage from './components/pages/Homepage';

function App() {
  return (
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/dashboard' element={<Front />} />
          <Route path='/transportSafety' element={<TransportSafety />} />
        </Routes>
      </>
  );
}

export default App;
