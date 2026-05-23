import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen/LoadingScreen.tsx';
import Home from './pages/Home/Home.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Members from './pages/Members/Members.tsx';
import Robots from './pages/Robots/Robots.tsx';
import Sponsors from './pages/Sponsors/Sponsors.tsx';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    async function initialize() {
      await new Promise((r) => setTimeout(r, 1500));

      // trigger exit animation
      setIsExiting(true);

      // wait for animation to finish before unmounting
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // match CSS duration + page load timeout
    }

    initialize();
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen exiting={isExiting} />}
      <MainApp />
    </>
  );
}

export default App





function MainApp() {

  return (
    <Routes>

      <Route 
        path='/' 
        element={<Home />} 
      />

      <Route 
        path='/projects' 
        element={<Projects />} 
      />

      <Route 
        path='/members' 
        element={<Members />} 
      />

      <Route 
        path='/robots' 
        element={<Robots />} 
      />

      <Route 
        path='/sponsors' 
        element={<Sponsors />} 
      />

    </Routes>
  )
}
