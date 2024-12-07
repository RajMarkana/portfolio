import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFolder, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const typingOptions = ['Web Developer', 'Data Analytics', 'Graphic Designer', 'Freelancer'];
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const images = ['./profile7.png'];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[0]);
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingText(typingOptions[typingIndex].substring(0, typingText.length + 1));
    }, 150);

    if (typingText === typingOptions[typingIndex]) {
      setTimeout(() => {
        setShowCursor(false);
        setTimeout(() => {
          setTypingText('');
          setTypingIndex((prevIndex) => (prevIndex + 1) % typingOptions.length);
          setShowCursor(true);
        }, 1500);
      }, 500);
    }

    return () => clearInterval(typingInterval);
  }, [typingIndex, typingText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <div className='grid text-slate-900 grid-cols-1 lg:grid-cols-2 text-xl'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <p data-aos="fade-in" data-aos-duration="1000"> 👋 Hello, I am </p>
            <h1 data-aos="fade-in" data-aos-duration="1500" className='text-5xl mt-4 text-blue-500 font-bold mb-5'>Raj Markana</h1>
            <p data-aos="zoom-in" data-aos-duration="2000">{typingText}{showCursor && <span>|</span>}</p>
            <div data-aos="fade-right" data-aos-duration="3000" className='mt-7 flex gap-10 items-center'>
              <Link className='px-5 py-2 rounded-full' to={"/contact"}><FaFolder className='text-7xl text-yellow-500' />Contact</Link>
              <a className='px-5 py-2 rounded-full' href="Raj's_Resume.pdf" target='_blank' download={"./Raj's_Resume.pdf"}><FaFileAlt className='text-6xl m-2 text-red-500' />Resume</a>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img src={randomImage} width={500} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
