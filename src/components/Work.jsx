import React from 'react'
import Project0 from '../assets/project-0.jpg'
import Project1 from '../assets/project-1.jpg'
import Project2 from '../assets/project-2.jpg'
import Project3 from '../assets/project-3.jpg'
import Project4 from '../assets/project-4.png'
import Project6 from '../assets/project-6.jpg'
import Project7 from '../assets/project-7.png'

const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#032a3b]">
            <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#b6a488]">Work</p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* Grid Items */}
                    <div style={{ backgroundImage: `url(${Project1})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Covid React App
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://covidapp-abduromanov.vercel.app/" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div style={{ backgroundImage: `url(${Project7})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Chat GPT Clone
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://chatgpt-clone-alfatihdevs.vercel.app/" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div style={{ backgroundImage: `url(${Project0})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Google Maps API
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://maps-api-alfatihdevs.vercel.app/" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    

                    <div style={{ backgroundImage: `url(${Project2})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Movie App
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://movieapp-abduromanov.vercel.app/" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Project4})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                UI Design
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://www.figma.com/file/HASbHwcfP7Rsqukm0Id9OL/WebJarvis?node-id=29%3A28" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Project3})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Memory Game
                            </span>
                            <div className="pt-2 text-center">
                                <a href="https://cardmemory-abduromanov.vercel.app/" target="_blank">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ backgroundImage: `url(${Project6})` }} className="shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-lg">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Laravel Pharmacy Website
                            </span>
                            <div className="pt-2 text-center">
                                    <button className="text-center rounded-sm px-6 py-2 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg border-2 bg-[transparent] text-white border-[#fff]">Visit</button>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Work