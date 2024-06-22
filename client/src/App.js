import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { fetchPosts } from '../src/redux/posts/postSlice';
import './App.css';
import DashHome from './adminPages/DashHome';
import Front from './adminPages/Front';
import Meetings from './adminPages/Meetings';
import News from './adminPages/News';
import Pay from './adminPages/Pay';
import PodcastsAdmin from './adminPages/PodcastsAdmin';
import Press from './adminPages/Press';
import Training from './adminPages/Training';
import TransportSafety from './adminPages/TransportSafety';
import Layout from './components/Layout';
import DirectorAbedi from './components/pages/directors/DirectorAbedi';
import Directors from './components/pages/Directors';
import ExecutiveDirector from './components/pages/directors/ExecutiveDirector';
import FullPostContent from './components/pages/FullPostContent';
import Homepage from './components/pages/Homepage';
import Mission from './components/pages/Mission';
import OurCoreValues from './components/pages/OurCoreValues';
import Events from './components/pages/events/Events';
import Highlights from './components/pages/events/Highlights';
import Media from './components/pages/media/Media';
import Podcasts from './components/pages/media/Podcasts';
import PressRelease from './components/pages/media/PressRelease';
import Videos from './components/pages/media/Videos';
import EcoTransport from './components/pages/themes/EcoTransport';
import KnowledgeSharing from './components/pages/themes/KnowledgeSharing';
import ResearchAndDevelopmentInTransport from './components/pages/themes/ResearchAndDevelopmentInTransport';
import TsdnAims from './components/pages/tsdnAims/TsdnAims';
import WhatWeDo from './components/pages/tsdnAims/WhatWeDo';
import DirectorAustin from './components/pages/directors/DirectorAustin';
import DirectorIan from './components/pages/directors/DirectorIan';
import DirectorChristine from './components/pages/directors/DirectorChristine';
import DirectorShirley from './components/pages/directors/DirectorShirley';
import CapacityBuildingAndHumanResourceDevelopmentInTransport from './components/pages/themes/CapacityBuildingAndHumanResourceDevelopmentInTransport';
import TransportSafetyAndDevelopment from './components/pages/themes/TransportSafetyAndDevelopment';
import AdvocacyForGoodGovernanceInTransportSafetyAndDevelopment from './components/pages/themes/AdvocacyForGoodGovernanceInTransportSafetyAndDevelopment';
import CatalyzingFinancingForRoadTransportSafetyImprovementProgrammes from './components/pages/themes/CatalyzingFinancingForRoadTransportSafetyImprovementProgrammes';
import Modal from './components/Modal';
import Pricing from './components/pages/pricing/Pricing';
import Login from './components/Login';

function App() {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/" element={<Layout />}>
          <Route index element={<Mission />} />
          <Route path="/about/executives" element={<Directors />} />
          <Route path="/about/director-ian" element={<DirectorIan />} />
          <Route path="/about/director-abedi" element={<DirectorAbedi />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/our-core-values" element={<OurCoreValues />} />
        </Route>
        <Route path="/tsdn-aims" element={<Layout />}>
          <Route index element={<TsdnAims />} />
          <Route path="/tsdn-aims/what-we-do" element={<WhatWeDo />} />
        </Route>
        <Route path="/themes/" element={<Layout />}>
          <Route index element={<TransportSafetyAndDevelopment />} />
          <Route path="/themes/transport-safety-and-development" element={<TransportSafetyAndDevelopment />} />
          <Route path="/themes/expert-knowledge-sharing-in-transport-safety-development" element={<KnowledgeSharing />} />
          <Route path="/themes/capacity-building-and-human-resource-development-in-transport" element={<CapacityBuildingAndHumanResourceDevelopmentInTransport />} />
          <Route path="/themes/eco-transport-development" element={<EcoTransport />} />
          <Route path="/themes/research-and-development-in-transport" element={<ResearchAndDevelopmentInTransport />} />
          <Route path="/themes/advocacy-for-good-governance-in-transport-safety-and-development" element={<AdvocacyForGoodGovernanceInTransportSafetyAndDevelopment />} />
          <Route path="/themes/catalyzing-financing-for-road-transport-safety-improvement-programmes" element={<CatalyzingFinancingForRoadTransportSafetyImprovementProgrammes />} />
        </Route>
        <Route path="/media" element={<Layout />}>
          <Route index element={<Media />} />
          <Route path="/media/press-release" element={<PressRelease />} />
          <Route path="/media/podcasts" element={<Podcasts />} />
          <Route path="/media/videos" element={<Videos />} />
        </Route>
        <Route path="/meetings-and-events" element={<Layout />}>
          <Route index element={<Events />} />
          <Route path="/meetings-and-events/meetings-and-events" element={<Events />} />
          <Route path="/meetings-and-events/ambush-highlights" element={<Highlights />} />
        </Route>
        <Route path="/blog/:id" element={<Layout blogPosts={posts} />}>
          <Route index element={<FullPostContent blogPosts={posts} />} />
        </Route>
        <Route path="/executive-director" element={<ExecutiveDirector />} />
        <Route path="/christine-ajulu" element={<DirectorChristine />} />
        <Route path="/shirley-cherotich" element={<DirectorShirley />} />
        <Route path="/austin-obimbo" element={<DirectorAustin />} />
        <Route path="/ian-kipchumba" element={<DirectorIan />} />
        <Route path="/abedi-amakobe" element={<DirectorAbedi />} />
        <Route path="/dashboard" element={<Front />}>
          <Route path="" element={<DashHome />} />
          <Route path="transportSafety" element={<TransportSafety />} />
          <Route path="training" element={<Training />} />
          <Route path="press" element={<Press />} />
          <Route path="podcasts" element={<PodcastsAdmin />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="news" element={<News />} />
          <Route path="pay" element={<Pay />} />
        </Route>
        <Route path="/register" element={<Modal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
