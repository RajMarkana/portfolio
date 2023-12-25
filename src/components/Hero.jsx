import React from 'react'

const Hero = () => {
    return (
        <>
            <section id='dashboard' className="text-slate-100 ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">Freelance
                            <span className="text-violet-400"> Web</span> & <span className="text-violet-400"> Software</span> Developer
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">

                        Experienced in diverse projects, from personal websites to corporate software and e-commerce platforms. Results-oriented and highly motivated, I thrive on new challenges. Confident in delivering high-quality services, available for both short-term and long-term projects.

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Contact</a>
                            <a rel="noopener noreferrer" href="#skills" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Skills</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/232296699/original/b18a8cf867ec32db9d2e3179b59249362e472bf5/be-your-enterprise-dotnet-core-api-engineer.jpg" alt="" className="object-contain h-72 rounded-3xl shadow-2xl shadow-violet-900 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero