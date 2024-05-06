import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import '../style/Loading.css';

const Music = ({closeMusic}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(false); // Pause the player while changing the song
  };

  const playPreviousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(false); // Pause the player while changing the song
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        }
      };
    }
  }, [currentSongIndex]);

  const handleCanPlayThrough = () => {
    if (isPlaying) {
      audioRef.current.play();
    }

  };
  const songs = [
    "/music/Track1.mp3",
    "/music/Track2.mp3",
    "/music/Track3.mp3",
    
  ];
  return (
    <>
      <div className='flex backdrop-filter shadow-2xl backdrop-blur-md bg-opacity-80  bg-white p-5 rounded-lg justify-center absolute bottom-20 right-0 items-center  mr-6'>
        <img src="/music2.jpg" className={`w-14 h-14  mr-3 ${isPlaying ? "animateSpin " : ""} rounded-full`} alt="Music" />
        <button className=" text-slate-600 text-lg font-bold py-2 px-3 rounded" onClick={playPreviousSong}>
          <FaBackward />
        </button>
        <button className=" text-blue-500 text-lg font-bold py-2 px-3 rounded" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        {/* <p>{songs[currentSongIndex]}</p> */}
        <button className=" text-slate-600 text-lg font-bold py-2 px-3 rounded" onClick={playNextSong}>
          <FaForward />
        </button>
        <button onClick={() => { closeMusic(); setIsPlaying(false); }} className="absolute top-0 right-0 mx-4 my-1 text-2xl text-slate-600">&times;</button>

        <audio ref={audioRef} src={songs[currentSongIndex]} />
      </div>
    </>
  )
}

export default Music