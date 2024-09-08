import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import ProgressCircle from './components/ProgressCircle';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <ProgressCircle/>
        <Footer/>
      </div>

    </>
  );
}

export default App
