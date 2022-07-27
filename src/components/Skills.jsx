import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import Laravel from '../assets/laravel.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Codeigniter from '../assets/codeigniter.png'

const Skills = () => {
    return (
        <div name="skills" className="w-full md:h-screen bg-[#032a3b] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#b6a488]">Experience</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                        <p className="my-4 font-semibold">HTML</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                        <p className="my-4 font-semibold">CSS</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                        <p className="my-4 font-semibold">JavaScript</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
                        <p className="my-4 font-semibold">React</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="Node icon" />
                        <p className="my-4 font-semibold">Node JS</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={FireBase} alt="FireBase icon" />
                        <p className="my-4 font-semibold">Fire Base</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Github} alt="Github icon" />
                        <p className="my-4 font-semibold">Github</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
                        <p className="my-4 font-semibold">Tailwind</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Codeigniter} alt="Mongo icon" />
                        <p className="my-4 font-semibold">CodeIgniter</p>
                    </div>
                    <div className="shadom-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Laravel} alt="AWS icon" />
                        <p className="my-4 font-semibold">Laravel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills