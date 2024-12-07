import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegWindowMinimize, FaRegSquare, FaDesktop } from "react-icons/fa";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import Loading from './components/Loading';
import Bottom from './components/Bottom';
import Screen from './components/Screen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Music from './components/Music';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false); // Set to true initially
  const [showMusic, setShowMusic] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Simulate loading time
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle showing main content
  const handleShowMainContent = () => {
    setShowMainContent(true);
  };

  const handleShowMusic = () => {
    setShowMusic(true);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - windowPosition.x;
    const offsetY = e.clientY - windowPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const offsetX = e.touches[0].clientX - windowPosition.x;
    const offsetY = e.touches[0].clientY - windowPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      const maxPosX = window.innerWidth - e.target.offsetWidth;
      const maxPosY = window.innerHeight - e.target.offsetHeight;
      let newX = clientX - dragOffset.x;
      let newY = clientY - dragOffset.y;
      newX = Math.max(0, Math.min(newX, maxPosX));
      newY = Math.max(0, Math.min(newY, maxPosY));
      setWindowPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const initialX = (window.innerWidth - 1350) / 2;
    const initialY = (window.innerHeight - 800) / 2;
    setWindowPosition({ x: initialX, y: initialY });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 800) {
      // If window width is less than or equal to 768 (mobile device), set window position to center
      const initialX = (window.innerWidth - 600) / 2; // Adjust width as needed
      const initialY = (window.innerHeight - 400) / 2; // Adjust height as needed
      setWindowPosition({ x: initialX, y: initialY });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newX = (window.innerWidth - 1350) / 2;
      const newY = (window.innerHeight - 800) / 2;
      setWindowPosition({ x: newX, y: newY });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatPath = (pathname) => {
    const segments = pathname.split('/').filter(segment => segment.trim() !== '');
    // alert(segments);
    const formattedSegments = segments.map(segment => `> ${segment}`);
    return formattedSegments.join(' ');
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col h-screen" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onTouchMove={handleMouseMove} onTouchEnd={handleMouseUp}>
          {window.innerWidth <= 700 ? (
            <>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/w9.jpg')", filter: "blur(20px)" }}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img src="./4.png" width={400} alt="" />
                <h1 className='mt-4 text-lg text-center text-white'>Switch to Desktop or Laptop <br/>for Best Experience</h1>
              </div>
            </>

          ) : (
            <>
              <div className="flex flex-grow bg-cover flex-col items-center justify-center p-4" style={{ backgroundImage: 'url("/w9.jpg")' }}>
                {showMainContent && (
                  <div className='w-4/5 h-3/4 absolute shadow-2xl' style={{ top: windowPosition.y, left: windowPosition.x, cursor: isDragging ? 'grabbing' : 'default', userSelect: 'none' }} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
                    
                    <Screen closeScreen={() => { setShowMainContent(false) }} />
                  </div>
                )}
                {showMusic ? (<Music closeMusic={() => { setShowMusic(false) }} />) : (<div></div>)}
              </div>
              <Bottom onClick={handleShowMainContent} openMusic={handleShowMusic} />
            </>
          )}
        </div>
      )}
      <SpeedInsights />
    </>
  );
};

export default App;
