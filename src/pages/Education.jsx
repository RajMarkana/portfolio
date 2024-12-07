import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";

const Education = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=' justify-center flex items-center'>
                    <img src="./6.png" width={400} className='' alt="" /></div>
                <div className='px-10 py-10 flex justify-center items-center'>
                    <div>
                        <div data-aos="fade-in" data-aos-duration="1000" className='flex items-center text-blue-500 mb-10 text-3xl' >
                            <FaGraduationCap className='mr-2' />
                            <h1 className='  font-semibold '>Education</h1>
                        </div>
                        <div data-aos="fade-down" data-as-duration="1500" class="flex  relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center text-white bg-blue-500 relative ">
                                <SiFuturelearn />
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-md text-primary  mb-1 tracking-wider">Diploma In Computer Engineering</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">Darshan University, Rajkot</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">2020-2023</h2>
                                <p class="leading-relaxed">I gained foundational knowledge in computer science, programming languages, and software engineering principles. This program equipped me with practical skills in hardware and software systems, networking, and database management.</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000" class="flex relative pb-12">

                            <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center bg-blue-500 text-white relative ">
                                <FaGraduationCap />
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font  text-md text-primary mb-1 tracking-wider">B.Tech In Computer Engineering</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">Charusat University</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">2023-present</h2>
                                <p class="leading-relaxed">In this program, I am delving into advanced topics such as computer architecture, artificial intelligence, cybersecurity, and software development methodologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-10 mb-14'>
                <div className='flex items-center text-blue-500 mb-10 text-3xl' >
                    <MdOutlineWork className='mr-2' />
                    <h1 className='  font-semibold '>Experience</h1>
                </div>
                <div className='bg-blue-50 rounded-xl  p-10'>
                    <p className='text-2xl text-blue-500'>Freelancer</p>
                    <p className='text-thin'>Wordpress Developer & Graphics Designer • 2+ Years</p>
                    <div className='flex flex-wrap justify-between mt-10 gap-20 items-center'>
                        <img src="./freelancerlogo.png" width={280} alt="" />
                        <img src="./fiverrlogo.png" width={200} alt="" />
                        <img src="./upworklogo.png" width={200} alt="" />
                    </div>

                </div>
                <br/><br/>
                <hr />

                <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">INTERNSHIP</span>
                        <span class="mt-1 text-gray-500 text-sm">13 May 2024 - 13 Nov 2024 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">MERN Stack Developer at <a href='https://www.charusat.ac.in/' target='_blank' class="text-blue-500 underline ">Charusat University</a></h2>
                        <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p>
                        {/* <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education