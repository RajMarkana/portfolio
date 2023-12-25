import React from 'react'
import '../App.css'
import Hero from './Hero'
import Skills from './Skills'
import Gallery from './Gallery'
import Team from './Team'
import Feedback from './Feedback'
import Contact from './Contact'


const Home = () => {
    return (
        <>
            <div class="w-full scroll-smooth h-full text-slate-100 sm:w-3/4 p-4 b50 overflow-x-hidden overflow-y-scroll ">
                <Hero />
                <br></br>
                <Skills />
                <br></br><br></br>
                <Gallery />
                {/* <br></br> */}
                {/* <Team /> */}
                <br /><br />
                <Feedback />
                <br /><br /><br />
                <Contact/>


            </div>

            {/* --------------- */}


        </>
    )
}

export default Home