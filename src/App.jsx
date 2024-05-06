import React, { useState, useEffect } from 'react';
import { useLocation, } from 'react-router-dom';
import { FaRegWindowMinimize, FaRegSquare, FaDesktop } from "react-icons/fa";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import Loading from './components/Loading';
import Bottom from './components/Bottom';
import Screen from './components/Screen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Music from './components/Music';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
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

  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - windowPosition.x;
    const offsetY = e.clientY - windowPosition.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const maxPosX = window.innerWidth - e.target.offsetWidth;
      const maxPosY = window.innerHeight - e.target.offsetHeight;
      let newX = e.clientX - dragOffset.x;
      let newY = e.clientY - dragOffset.y;
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

  const formatPath = (pathname) => {
    // Split the pathname into segments
    const segments = pathname.split('/').filter(segment => segment.trim() !== ''); // Remove empty segments

    // Convert each segment to the desired format (e.g., capitalize first letter and add '>' prefix)
    const formattedSegments = segments.map(segment => `> ${segment}`);

    // Join the formatted segments with '>'
    return formattedSegments.join(' ');
  }



  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col h-screen" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          {/* <Header /> */}
          <div className="flex flex-grow bg-cover flex-col items-center justify-center  p-4" style={{ backgroundImage: 'url("/w9.jpg")' }}>
            {showMainContent ? (
              <>
                <div className='w-4/5 h-3/4 absolute shadow-2xl' style={{ top: windowPosition.y, left: windowPosition.x, cursor: isDragging ? 'grabbing' : 'default', userSelect: 'none' }}
                  onMouseDown={handleMouseDown}>

                  <div className="bg-slate-300  rounded-tl-lg rounded-tr-lg w-full text-slate-900 p-3 flex justify-between flex-wrap gap-3 items-center">
                    <div className='flex justify-center items-center'>
                      <FaDesktop className='text-blue-500' /><p className='ml-2'>This PC</p>
                    </div>
                    <div className='flex items-center justify-around'>
                      <IoIosArrowBack className="mr-2 text-xl cursor-pointer" />
                      <IoIosArrowForward className="ml-2 text-xl cursor-pointer" />
                      <div className='w-4'></div>
                      <div className="bg-white w-96 p-2 rounded-md ">
                        <p>RajMarkana {formatPath(location.pathname)}</p>
                      </div>
                    </div>
                    <div className='flex items-center'>

                      <div className="bg-white w-72 p-2 rounded-md flex justify-center items-center">
                        <input type="text" placeholder='Search This PC' className='border-none outline-none w-full' />
                        <IoIosSearch className='text-xl' />
                      </div>

                    </div>

                    <div className="flex justify-center items-center">
                      <div className=" mr-2 hover:bg-slate-200 p-2 cursor-pointer rounded-sm" onClick={() => { setShowMainContent(false) }}><FaRegWindowMinimize /></div>

                      <div id="maximize" className="mr-2 hover:bg-slate-200 cursor-pointer p-2 rounded-sm"><FaRegSquare /></div>

                      <div className="hover:bg-red-500 cursor-pointer rounded-sm text-2xl p-1 hover:text-white" onClick={() => { setShowMainContent(false) }}><IoMdClose /></div>
                    </div>
                  </div>
                  <Screen />
                </div>
              </>
            ) : (
              <div></div>
            )}

            {
              showMusic ?
                (
                  <Music closeMusic={()=>{ setShowMusic(false)}} />
                )
                :
                (
                  <div></div>
                )}

          </div>
          <Bottom onClick={handleShowMainContent} openMusic={handleShowMusic} />
        </div>
      )}
    </>
  );
};

export default App;