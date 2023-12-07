import { Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import './App.css';
import Layout from './components/Layout';
import Mission from './components/pages/Mission';
import Transport from './components/pages/Transport';
import Themes from './components/pages/Themes';
import Footer from './components/Footer';
import ExecutiveDirector from './components/pages/ExecutiveDirector';
import Media from './components/pages/media/Media';
import Podcasts from './components/pages/media/Podcasts';
import PressRelease from './components/pages/media/PressRelease';
import Videos from './components/pages/media/Videos';
import Events from './components/pages/events/Events';
import Highlights from './components/pages/events/Highlights';
import OurCoreValues from './components/pages/OurCoreValues';
import AggInTransport from './components/pages/themes/AggInTransport';
import CapacityBuilding from './components/pages/themes/CapacityBuilding';
import EcoTransport from './components/pages/themes/EcoTransport';
import HumanResource from './components/pages/themes/HumanResource';
import ResearchAndDevelopment from './components/pages/themes/ResearchAndDevelopment';
import RoadSafety from './components/pages/themes/RoadSafety';
import TsdnAims from './components/pages/tsdnAims/TsdnAims';
import WhatWeDo from './components/pages/tsdnAims/WhatWeDo';
import KnowledgeSharing from './components/pages/themes/KnowledgeSharing';
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
          path="/about/"
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
            path="/about/our-core-values"
            element={<OurCoreValues />}
          />
        </Route>
        <Route
          path="/tsdn-aims"
          element={<Layout />}
          >
            <Route
              index
              element={<TsdnAims />}
            />
            <Route
              path="/tsdn-aims/what-we-do"
              element={<WhatWeDo />}
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
          <Route
            path="/themes/road-safety"
            element={<RoadSafety />}
          />
          <Route
            path="/themes/knowledge-sharing"
            element={<KnowledgeSharing />}
          />
          <Route
            path="/themes/capacity-building"
            element={<CapacityBuilding />}
          />
          <Route
            path="/themes/eco-transport-development"
            element={<EcoTransport />}
          />
          <Route
            path="/themes/human-resource-development"
            element={<HumanResource />}
          />
          <Route
            path="/themes/agg-in-transport-sector"
            element={<AggInTransport />}
          />
          <Route
            path="/themes/research-and-development"
            element={<ResearchAndDevelopment />}
          />
        </Route>
        <Route
         path="/media"
         element={<Layout />}
         >
          <Route 
             index
             element={<Media />}
             />
          <Route 
            path="/media/press-release"
            element={<PressRelease />}
            />
            <Route 
            path="/media/podcasts"
            element={<Podcasts />}
            />
            <Route 
            path="/media/videos"
            element={<Videos />}
            />
         </Route>
         <Route
           path="/meetings-and-events"
           element={<Layout/>}
          >
            <Route
              index
              element={<Events />}
            />
            <Route
              path="/meetings-and-events/meetings-and-events"
              element={<Events />}
            />
            <Route
              path="/meetings-and-events/ambush-highlights"
              element={<Highlights />}
            />
          </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
