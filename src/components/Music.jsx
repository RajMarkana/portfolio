import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import '../style/Loading.css';

const songs = [
  {
    src: "/music/Track1.mp3",
    title: "Infinity",
    artist: "Jaymes Young"
  },
  {
    src: "/music/Track2.mp3",
    title: "Gangster's Paradise",
    artist: "Coolio"
  },
  {
    src: "/music/Track3.mp3",
    title: "In The End",
    artist: "Mellen Gi"
  },
];

const Music = ({ closeMusic }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;

      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      const handleSongEnd = () => {
        playNextSong();
      };

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', handleSongEnd);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleSongEnd);
      };
    }
  }, [currentSongIndex, volume]); // Add volume to dependencies

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error('Playback failed:', error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]); // Rerun effect when isPlaying or song changes

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true); // Automatically play next song
  };

  const playPreviousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true); // Automatically play previous song
  };

  const handleSeek = (e) => {
    const seekTime = audioRef.current.duration * (e.target.value / 100);
    audioRef.current.currentTime = seekTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const currentSong = songs[currentSongIndex];

  return (
    <>
      <div className='flex flex-col backdrop-filter shadow-2xl backdrop-blur-md bg-opacity-80 bg-white p-5 rounded-lg absolute bottom-20 right-0 mr-6'>
        <div className="flex items-center mb-4">
          <img src="/music2.png" className={`w-14 h-14 shadow-2xl mr-3 ${isPlaying ? "animateSpin " : ""} rounded-full`} alt="Music" />
          <div>
            <h3 className="text-slate-800 font-semibold text-sm">{currentSong.title}</h3>
            <p className="text-slate-600 text-xs">{currentSong.artist}</p>
          </div>
          <button onClick={() => { closeMusic(); setIsPlaying(false); }} className="absolute top-2 right-2 text-xl text-slate-600">&times;</button>
        </div>

        {/* Playback Controls */}
        <div className="flex justify-center items-center mb-4">
          <button className="text-slate-600 text-lg font-bold py-2 px-3 rounded" onClick={playPreviousSong}>
            <FaBackward />
          </button>
          <button className="text-blue-500 text-xl font-bold py-2 px-3 rounded" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="text-slate-600 text-lg font-bold py-2 px-3 rounded" onClick={playNextSong}>
            <FaForward />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center mb-4">
          <span className="text-slate-600 text-xs mr-2">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            className="w-full h-1 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            onChange={handleSeek}
            disabled={isNaN(duration) || duration === 0}
          />
          <span className="text-slate-600 text-xs ml-2">{formatTime(duration)}</span>
        </div>

        {/* Volume Control */}
        <div className="flex items-center">
          {volume === 0 ? <IoVolumeMuteOutline className="text-slate-600 text-lg mr-2" /> : <IoVolumeMediumOutline className="text-slate-600 text-lg mr-2" />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            className="w-24 h-1 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            onChange={handleVolumeChange}
          />
        </div>

        <audio ref={audioRef} src={currentSong.src} preload="metadata" />
      </div>
    </>
  );
};

export default Music;