import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#032a3b] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#b6a488]">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
                    <div>
                        <p className="sm:text-right text-4xl font-bold">Hi. I'm Al Fatih, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>
                        I’m 20 Years old, Enthusiastic Informatic Engineering undergraduate student with about 1 year of experience in web development and design. Obtained React Certification from several online Course. Looking to deliver excellent web development skills in React and Javascript to help grow the business
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About