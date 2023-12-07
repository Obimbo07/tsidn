
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashHome from './adminPages/DashHome';
import Front from './adminPages/Front';
import Meetings from './adminPages/Meetings';
import News from './adminPages/News';
import Pay from './adminPages/Pay';
import Podcasts from './adminPages/Podcasts';
import PressRelease from './adminPages/PressRelease';
import Training from './adminPages/Training';
import TransportSafety from './adminPages/TransportSafety';
import Homepage from './components/pages/Homepage';

function App() {
  return (
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/dashboard' element={<Front />} >
            <Route path="" element={<DashHome />} />
            <Route path="transportSafety" element={<TransportSafety />} />
            <Route path="training" element={<Training />} />
            <Route path="pressRelease" element={<PressRelease/>} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="news" element={<News />} />
            <Route path="pay" element={<Pay />} />
          </Route>
          
          
        </Routes>
      </>
  );
}

export default App;
