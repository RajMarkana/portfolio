import React from 'react'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJava,FaCode } from "react-icons/fa6";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript, IoGlobeOutline  } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiPhp, SiJquery, SiMysql, SiGithub, SiMongodb, SiCloudera, SiAdobephotoshop, SiCplusplus, SiPython, SiDotnet, SiCoreldraw, SiWordpress } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";

const Skills = () => {
    return (
        <>
            <div className='p-5'>

                <div>
                    <div data-aos="fade-in" data-aos-duration="1000" className='flex items-center text-blue-500 mb-7 text-2xl' >
                        <IoGlobeOutline className='mr-2' />
                        <h1 className='  font-semibold '>Web Development</h1>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="2000" className='flex text-7xl gap-16 flex-wrap justify-start items-center'>
                        <FaHtml5  className='text-orange-600' />
                        <FaCss3Alt className='text-blue-800' />
                        <IoLogoJavascript className='text-yellow-500' />
                        <SiJquery className='text-blue-800' />
                        <FaReact className='text-cyan-500' />
                        <FaBootstrap className='text-purple-700' />
                        <SiTailwindcss className='text-cyan-700' />
                        <FaNodeJs className='text-green-700' />
                        <SiExpress className='text-gray-800' />
                        <SiPhp className='text-indigo-950' />
                        <SiMysql className='text-blue-800' />
                        <SiMongodb className='text-green-600' />
                        <SiWordpress className='text-blue-950' />
                    </div>
                </div>
                <br /><br />
                <hr />
                <br /><br />
                <div>
                    <div data-aos="fade-in" data-aos-duration="2500" className='flex items-center text-blue-500 mb-7 text-2xl' >
                        <FaCode className='mr-2' />
                        <h1 className='  font-semibold '>Programming Language</h1>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="3000" className='flex text-7xl gap-16 flex-wrap justify-start items-center'>
                        <SiCloudera className='text-slate-900' />
                        <SiCplusplus className='text-blue-950' />
                        <FaJava className='text-red-700' />
                        <SiPython className='text-blue-900' />
                        <SiDotnet className='text-blue-500' />
                    </div>
                </div>
                <br /><br />
                <hr />
                <br /><br />
                <div>
                <div data-aos="fade-in" data-aos-duration="3000" className='flex items-center text-blue-500 mb-7 text-2xl' >
                        <IoIosGitBranch  className='mr-2' />
                        <h1 className='  font-semibold '>Other Skills</h1>
                    </div>
                    <div  className='flex text-7xl gap-16 flex-wrap justify-start items-center'>
                        <SiGithub className='text-black' />
                        <FaGitAlt className='text-red-500' />
                        <SiAdobephotoshop className='text-blue-950' />
                        <SiCoreldraw className='text-green-700' />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Skills