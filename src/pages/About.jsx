import React from 'react'
import { Link } from 'react-router-dom';
import { FaFolder, FaFileAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const About = () => {

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-md p-5'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <div  className='flex items-center text-blue-500 mb-5 text-3xl' >
              <IoInformationCircle className='mr-2'/>
              <h1  className='  font-semibold '>About</h1>
            </div>
            <p data-aos="fade-down" data-aos-duration="1500" className='text-justify'>I am a highly skilled and experienced freelance web developer and graphic designer with over 2+ years of experience. I am proficient in a variety of programming languages, including Java, Python, PHP, and JavaScript. I am also an expert in graphic design, with a strong understanding of Adobe Photoshop and CorelDraw
              <br />
              <br />I have worked on a wide range of projects, from small personal websites or software to large corporate websites or software. I am also experienced in developing computer software and e-commerce websites. I am a highly motivated and results-oriented individual, and I am always looking for new challenges.
              <br />

              <br />I am confident that I can provide you with the high-quality services that you need. I am available for both short-term and long-term projects. <br />
            </p>

            <div className='mt-7 flex gap-10 items-center'>
              <Link  className='px-5 py-2 text-center rounded-full' to={"/education"}><FaFolder className='text-7xl text-yellow-500' />Education</Link>
              <Link  className='px-5 py-2 text-center rounded-full' to={"/skills"}><FaFolder className='text-7xl text-yellow-500' />Skills</Link>

            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img  src="./5.png" width={400} alt="" />


        </div>
      </div>
    </>
  );
}

export default About