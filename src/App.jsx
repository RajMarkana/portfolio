import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegWindowMinimize, FaRegSquare, FaDesktop } from "react-icons/fa";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import Loading from './components/Loading';
import Bottom from './components/Bottom';
import Screen from './components/Screen';
import VsCodeScreen from './components/VsCodeScreen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Music from './components/Music';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [screenPosition, setScreenPosition] = useState({ x: 0, y: 0 });
  const [vscodePosition, setVscodePosition] = useState({ x: 0, y: 0 });
  const [activeWindow, setActiveWindow] = useState(null);
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

  const handleMouseDown = (e, windowType) => {
    setIsDragging(true);
    setActiveWindow(windowType);
    const currentPosition = windowType === 'screen' ? screenPosition : vscodePosition;
    const offsetX = e.clientX - currentPosition.x;
    const offsetY = e.clientY - currentPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleTouchStart = (e, windowType) => {
    setIsDragging(true);
    setActiveWindow(windowType);
    const currentPosition = windowType === 'screen' ? screenPosition : vscodePosition;
    const offsetX = e.touches[0].clientX - currentPosition.x;
    const offsetY = e.touches[0].clientY - currentPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging && activeWindow) {
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      const maxPosX = window.innerWidth - 1350;
      const maxPosY = window.innerHeight - 800;
      let newX = clientX - dragOffset.x;
      let newY = clientY - dragOffset.y;
      newX = Math.max(0, Math.min(newX, maxPosX));
      newY = Math.max(0, Math.min(newY, maxPosY));

      if (activeWindow === 'screen') {
        setScreenPosition({ x: newX, y: newY });
      } else if (activeWindow === 'vscode') {
        setVscodePosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveWindow(null);
  };

  useEffect(() => {
    const initialX = (window.innerWidth - 1350) / 2;
    const initialY = (window.innerHeight - 800) / 2;
    setScreenPosition({ x: initialX, y: initialY });
    setVscodePosition({ x: initialX + 50, y: initialY + 50 }); // Offset VSCode window slightly
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 800) {
      const initialX = (window.innerWidth - 600) / 2;
      const initialY = (window.innerHeight - 400) / 2;
      setScreenPosition({ x: initialX, y: initialY });
      setVscodePosition({ x: initialX + 50, y: initialY + 50 });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newX = (window.innerWidth - 1350) / 2;
      const newY = (window.innerHeight - 800) / 2;
      setScreenPosition({ x: newX, y: newY });
      setVscodePosition({ x: newX + 50, y: newY + 50 });
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
                <h1 className='mt-4 text-lg text-center text-white'>Switch to Desktop or Laptop <br />for Best Experience</h1>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-grow bg-cover flex-col items-center justify-center p-4" style={{ backgroundImage: 'url("/w9.jpg")' }}>
                {showMainContent && (
                  <div
                    className='w-4/5 h-3/4 absolute shadow-2xl'
                    style={{
                      top: screenPosition.y,
                      left: screenPosition.x,
                      cursor: isDragging && activeWindow === 'screen' ? 'grabbing' : 'default',
                      userSelect: 'none',
                      zIndex: activeWindow === 'screen' ? 50 : 40
                    }}
                    onMouseDown={(e) => handleMouseDown(e, 'screen')}
                    onTouchStart={(e) => handleTouchStart(e, 'screen')}
                  >
                    <Screen closeScreen={() => { setShowMainContent(false) }} />
                  </div>
                )}
                {showBrowser && (
                  <div
                    className='w-4/5 h-3/4 absolute shadow-2xl'
                    style={{
                      top: vscodePosition.y,
                      left: vscodePosition.x,
                      cursor: isDragging && activeWindow === 'vscode' ? 'grabbing' : 'default',
                      userSelect: 'none',
                      zIndex: activeWindow === 'vscode' ? 50 : 40
                    }}
                    onMouseDown={(e) => handleMouseDown(e, 'vscode')}
                    onTouchStart={(e) => handleTouchStart(e, 'vscode')}
                  >
                    <VsCodeScreen closeScreen={() => { setShowBrowser(false) }} />
                  </div>
                )}
                {showMusic ? (<Music closeMusic={() => { setShowMusic(false) }} />) : (<div></div>)}
              </div>
              <Bottom
                onClick={handleShowMainContent}
                openMusic={handleShowMusic}
                openBrowser={() => setShowBrowser(true)}
              />
            </>
          )}
        </div>
      )}
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
