import React from 'react';
import { Link } from 'react-router-dom';
import { GrProjects } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
const projects = [
    {
        name: 'InfoMovie',
        description: 'Infomovie is the website to Find Your Favorite Movie Details With a Download link.',
        image: './infomovie.png',
        link: 'https://rtechcode.rf.gd/infomovie/'
    },
    {
        name: 'Socient',
        description: 'Socient is a social media website like Facebook where you make friends, chat with them, and post images, videos, thoughts, etc...',
        image: './socient.png',
        link: 'https://dev-socient.pantheonsite.io/'
    },
    {
        name: 'PicSave',
        description: 'Download Beautiful, free images and photos that you can use for any project. Over a million free high-resolution photos.',
        image: './picsave.png',
        link: 'https://rtechcode.rf.gd/picsave/'
    },
    // {
    //     name: 'URLDEV',
    //     description: 'URL/Link Shortener. Make Your Link Safe, Small, Simple, and Faster with URLDEV​.',
    //     image: './urldev.png',
    //     link: 'https://rtechcode.rf.gd/urldev/'
    // },
    // {
    //     name: 'Chat Gen',
    //     description: 'ChatGPT Prompt Database for Generate Prompt for 100+ Specific Roles.',
    //     image: './chatgen.png',
    //     link: 'https://rtechcode.rf.gd/chatgen/'
    // },
    {
        name: 'LiteCode AI',
        description: 'Code Analysis, Refactor and Customization with Interview Questions. ',
        image: './litecodeai.png',
        link: 'https://litecode-ai.vercel.app'
    },
    {
        name: 'WeatherCloud',
        description: 'Weather search application enabling users to instantly access weather information for any city worldwide.',
        image: './weathercloud.png',
        link: 'https://rajmarkana.github.io/WeatherCloud/' // Replace with your project's link
    }
];

const Projects = () => {
    return (
        <>
            <div className='p-5'>
                <div data-aos="fade-in" data-aos-duration="1000" className='flex justify-start items-center text-blue-500 mb-7 text-2xl' >
                    <GrProjects className='mr-2' />
                    <h1 className='  font-semibold '>Projects</h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="1500" className="flex flex-wrap ">
                    {projects.map((project, index) => (
                        <div className="lg:w-1/3 sm:w-3/4 md:w-3/5 p-4" key={index}>
                            <div className="hover:bg-gray-100 p-6 transition-all bg-white  rounded-xl">
                                <img className="h-36 bg-white rounded-xl w-full object-contain mb-6" src={project.image} alt={project.name} />
                                <h2 className="text-xl text-blue-500 font-semibold title-font ">{project.name}</h2><hr className='my-4' />
                                <p className="leading-relaxed text-justify">{project.description}</p>
                                <Link className={`text-lg mt-5 bg-blue-100 rounded-full w-fit  flex items-center py-2 px-5 `} to={project.link} target='_blank'>
                                    {/* <FaFolder className='mr-2 text-yellow-500' /> */}
                                    <HiOutlineLink className='mr-2' />
                                    <p>Open</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;
