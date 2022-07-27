import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGit } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import resume from '../assets/resume.pdf'


const Navbar = () => {
    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#032a3b] text-[#e5cda7]">
            <div className="">
                <h1 className="text-2xl small:text-7xl font-bold">alfatihdevs</h1>
            </div>

            {/* menu */}
            <div className="hidden md:flex">
                <ul className="hidden md:flex font-bold">
                    <li>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={-100} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} offset={-100} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-semibold bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/alfatihabd/" target="_blank">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-semibold bg-[#333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/abduromanov2020" target="_blank">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-semibold bg-[#05595B]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://mail.google.com/mail/u/0/?fs=1&to=alfatihdevs@gmail.com&tf=cm" target="_blank">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-semibold bg-[#3E497A]">
                        <a className="flex justify-between items-center w-full text-gray-300" href={resume} download target="_blank">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar