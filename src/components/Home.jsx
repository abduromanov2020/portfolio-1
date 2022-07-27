import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#032a3b]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#e5cda7] font-semibold">Hello, my name is</p>
                <h1 className="text-4xl small:text-7xl font-bold text-[#b6a488]">
                    Al Fatih Abdurrahman
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#e5cda7] ">I'm a Web Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px] font-semibold">
                    I'm a web developer specializing in building (and ocasionally
                    designing) exceptional digital experiences. Currently, I'm focused on
                    building responsive web application using React and Javascript
                </p>
                <div>
                <Link to="about" smooth={true} duration={500} >
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b6a488] hover:border-[#b6a488] hover:text-[#032a3b] font-semibold">
                            View Work
                        <span className="group-hover:rotate-90 duration-300 ml-3">
                            <HiArrowNarrowRight />
                        </span>
                    </button>
                </Link>

                </div>
            </div>


        </div >
    )
}

export default Home