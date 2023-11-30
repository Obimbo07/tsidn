import { Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/Navbar';
import About from './components/pages/About';
import './App.css';
import Layout from './components/Layout';
import Mission from './components/pages/Mission';
import Transport from './components/pages/Transport';
import Themes from './components/pages/Themes';

function App() {
  return (
    <>
      <Navbar />
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
            path="/about/mission"
            element={<Mission />}
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
    </>
  );
}

export default App;
