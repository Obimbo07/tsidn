import { Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/Navbar';
import About from './components/pages/About';
import './App.css';
import Layout from './components/Layout';
import Mission from './components/pages/Mission';
import Transport from './components/pages/Transport';
import Themes from './components/pages/Themes';
import Trainings from './components/pages/Trainings';
import Footer from './components/Footer';
import ExecutiveDirector from './components/pages/ExecutiveDirector';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/about"
          element={<Layout />}
        >
          <Route
            index
            element={<About />}
          />
          <Route 
            path="/about/executive-director"
            element={<ExecutiveDirector />}
          />
          <Route
            path="/about/mission"
            element={<Mission />}
          />
          <Route
          path="/about/trainings"
          element={<Trainings />}
          />
        </Route>
        <Route
          path="/themes"
          element={<Layout />}
        >
          <Route
            index
            element={<Themes />}
          />
          <Route
            path="/themes/transport"
            element={<Transport />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
