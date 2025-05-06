import MyImage2 from '../my-image-2.jpg'
import P1 from '../p-1.png';
import P2 from '../p-2.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { FaPhp } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDataObject } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home(){

    const [flag, setFlag] = useState(false);


  function handleClick() {
    setFlag(!flag);
  }

    return (
        <>

    <div id="root">
        
    <nav className="w-full py-4 px-2 sticky bg-transparent backdrop-blur-md top-0 z-50 transition-all duration-300">
    
    <div className="flex justify-between items-center mx-2">
    
    <span className="md:block hidden cursor-pointer text-2xl font-semibold gradient-text shadow-text ml-3"> Aditya Kumar. </span>
    
    <span className="block md:hidden text-2xl cursor-pointer font-semibold gradient-text shadow-text ml-2"> Aditya Kumar </span>
    
    <ul className="hidden md:flex md:items-center gap-8">
    
        <li className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out">
    
        <a className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#home">
        Home</a>
        </li>

        <li className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out">
        <a className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#about">
        About</a>
        </li>
    
    
        <li className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out">
    
        <a className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#skills">
        Skills</a>
        </li>

        <li className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out">
    
        <a className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#projects">
        Projects</a>
        </li>
    
        <li className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out">
        <a className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#contact">
        Contact</a>
        </li>
        </ul>
    
        <Link className="hidden cursor-pointer text-center md:block py-2 px-4 text-white bg-black rounded-lg text-[16px] transition-all duration-300 hover:bg-gray-800" to="/HireMe">Hire Me</Link>
    
        <button className="text-2xl block md:hidden cursor-pointer transition-transform duration-300" onClick={handleClick}
          >
            {flag ? (
              <div className="transition-transform duration-300 rotate-90" > X </div>
            ) : (

                <Link to="" onClick={() => setFlag(false)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></Link>
            
            )}
        </button>
    </div>
    
    </nav>
    
    <section className={`md:hidden fixed top-6 left-0 w-full bg-white shadow-md z-50 transition-all duration-500 ease-in-out transform opacity-0 translate-y-10 pointer-events-none" ${
          flag
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}>
    
        <div className="p-4 space-y-2">
        <a className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#home">
        Home</a>
    
        <a className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#about">
        About</a>
    
        <a className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#skills">
        Skills</a>

        <a className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#projects">
        Projects</a>
    
        <a className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="#contact">
        Contact</a>
    
        <Link className="block cursor-pointer py-2 mt-4 text-center text-white bg-black rounded-lg text-[14px] hover:bg-gray-800 transition-all duration-300"to="/HireMe">Hire Me</Link>
    
    </div>
    
    </section>
    
    <div id="home">

    <section className="px-1 md:px-15 py-10 w-[100%]">
        <div className="mt-4 mx-2 space-y-4 flex flex-col justify-between items-center md:flex-row p-2">
            <div className="flex flex-col justify-between md:items-start w-full md:w-1/2 space-y-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                
                <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">Hi, I'm ADITYA KUMAR.</h1>
    
                <p className="index-module_type__E-SaG text-[22px] text-gray-950 font-medium md:text-2xl lg:text-3xl">Full Stack Developer</p>
    
            <div className="text-wrap w-full max-w-md md:max-w-lg aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
    
                <p className="text-sm md:text-lg text-gray-500">I am a software developer skilled in designing, and delivering scalable software solutions. Proficient in HTML5, CSS, Tailwind, JavaScript, MySQL and PHP. Passionate about problem solving and creating user focused applications while ensuring high quality optimized performance.</p>
    
            </div>
    
            <div className="flex items-center gap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                
            <Link className="flex gap-3 text-[14px] cursor-pointer items-center text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md" to="/HireMe">
            
            <span>Hire Me</span>
            
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    
            </svg>
            </Link>
    
            <a className="flex gap-2 text-[14px] items-center cursor-pointer text-black bg-white px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-md" href="#contact">
            Contact</a>
            
            </div>
    
            <div className="flex items-center gap-4 text-xl md:text-2xl text-gray-500 aos-init aos-animate" data-aos="fade-right" data-aos-delay="400">
    
            <a className="hover:text-gray-700" href="https://github.com/imadityagolu">
    
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    
            </svg>
            </a>
    
            <a className="hover:text-gray-700" href="mailto:adityasng420.ak@gmail.com" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
    
            </svg>
            </a>
    
            <a className="hover:text-gray-700" href="https://www.linkedin.com/in/imadityagolu/" target="_blank">
    
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    
            <rect width="4" height="12" x="2" y="9">
            </rect>
    
            <circle cx="4" cy="4" r="2"></circle>
    
            </svg>
    
            </a>
    
        </div>
    
        </div>
    
            <div className="flex justify-center items-center w-full md:w-1/2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
    
            <div className="w-full max-w-md md:max-w-xs m-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-full bg-white/70 backdrop-blur-md border border-gray-200 p-1">
    
            <img className="w-full object-cover block rounded-full" alt="Profile" src={MyImage2}></img>
    
            </div>
            </div>
        
        </div>
    
    </section>
    
    </div>
    
    <div>
    
    <section className="w-full bg-gray-50 flex justify-between items-center px-4 py-10" id="about">
    
    <div className="w-full flex flex-col items-center space-y-6">
        
        <div className="flex flex-col space-y-4 items-center w-full max-w-lg sm:max-w-xl md:max-w-4xl aos-init" data-aos="fade-right" data-aos-delay="500">
<br></br><br></br>
            <h1 className="text-3xl lg:text-4xl font-semibold">About Me</h1>
            
            <div className="h-1 rounded-lg w-20 bg-black inline-block"></div>
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mb-4">
                <p className="text-[16px] text-gray-500 text-center">I'm a passionate full stack developer with a focus on creating efficient, scalable, and user-friendly web applications.</p>
                
            </div>
        </div>
                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="left flex flex-col space-y-4 w-full md:px-4 aos-init" data-aos="fade-up" data-aos-delay="600">
                        
            <h1 className="text-2xl font-semibold">My Journey</h1>
                        
            <p className="text-gray-500">With over 1 years of experience in web development, I've worked on a variety of projects ranging from small business websites to complex enterprise applications.</p>
                        
            <p className="text-gray-500">I'm constantly learning and adapting to new technologies. My goal is to create digital experiences that are not only visually appealing but also highly functional and accessible to all users.</p>
                        
            </div>
                        
            <div className="right flex flex-col space-y-4 md:px-4 aos-init" data-aos="fade-up" data-aos-delay="800">
                            
            <h1 className="text-2xl mb-4 font-bold">Education &amp; Certificate</h1>
                            
            <div className="flex flex-col">
                                
            <p className="font-semibold">Bachelor of Computer Application</p><p className="text-gray-500">Cimage College, Magadh University (2016 - 2019)</p>
                                
            </div>
            
            <div className="flex flex-col">
                                    
                <p className="font-semibold">Full Stack Developer</p>
                                    
                <p className="text-gray-500">Geekster (2024 - Present Date)</p>
                                    
            </div>
        
            </div>
        
        </div>
                                    
        <div className="mt-4 w-[90%] aos-init" data-aos="zoom-in" data-aos-delay="500" id="skills">
            
            <h1 className="text-2xl font-bold mb-6 mt-20 text-center">My Skills</h1>
                                        
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="0">
            <div className='place-content-center flex'>
                <FaJava className="text-5xl flex text-blue-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'> java </p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="100">
            <div className='place-content-center flex'>
                <TbBrandJavascript className="text-5xl flex text-red-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>Javascript</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="200">
            <div className='place-content-center flex'>
                <BiLogoTypescript className="text-5xl flex text-blue-400 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>TypeScript</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="300">
            <div className='place-content-center flex'>
                <FaReact className="text-5xl flex text-rose-400 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>React</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="400">
            <div className='place-content-center flex'>
                <RiNextjsLine className="text-5xl flex text-black place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>Next.js</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="500">
            <div className='place-content-center flex'>
                <DiNodejs className="text-5xl flex text-green-500 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>Node.js</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="600">
            <div className='place-content-center flex'>
                <SiExpress className="text-5xl flex text-black place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>Express.js</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="700">
            <div className='place-content-center flex'>
                <BiLogoMongodb className="text-5xl flex text-green-500 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>MongoDB</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="800">
            <div className='place-content-center flex'>
                <GrMysql  className="text-5xl flex text-orange-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>MySQL</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="900">
            <div className='place-content-center flex'>
                <FaHtml5 className="text-5xl flex text-purple-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>HTML</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="900">
            <div className='place-content-center flex'>
                <IoLogoCss3 className="text-5xl flex text-yellow-400 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>CSS</p>
            </div>

            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1000">
            <div className='place-content-center flex'>
                <RiTailwindCssFill className="text-5xl flex text-red-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>Tailwind</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1100">
            <div className='place-content-center flex'>
                <BiLogoFigma className="text-5xl flex text-pink-300 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>figma</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1200">
            <div className='place-content-center flex'>
                <FaBootstrap  className="text-5xl flex text-blue-800 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>Bootstrap</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1300">
            <div className='place-content-center flex'>
                <FaGitAlt className="text-5xl flex text-yellow-500 place-content-center "/>
            </div>
                <p className='place-content-center font-semibold flex'>Git</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1400">
            <div className='place-content-center flex'>
                <VscVscode className="text-5xl flex text-blue-400 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>VS Code</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1500">
            <div className='place-content-center flex'>
                <FaPhp className="text-5xl flex text-purple-700 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>PHP</p>
            </div>
                                          
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1700">
            <div className='place-content-center flex'>
                <AiOutlineApi className="text-5xl flex text-yellow-700 place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>REST API</p>
            </div>
                                            
            <div className="bg-gray-200 px-3 py-3 font-semibold rounded-xl text-sm aos-init" data-aos="fade-up" data-aos-delay="1800">
            <div className='place-content-center flex'>
                <MdDataObject className="text-5xl flex text-black place-content-center " />
            </div>
                <p className='place-content-center font-semibold flex'>DSA</p>
            </div>
                                            
            </div>
                                            
<br></br><br></br>

            <h1 className="text-2xl font-bold mb-4 text-center aos-init" data-aos="fade-up" data-aos-delay="700">What I Do</h1>
                                            
        </div>
                                            
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                
            <div className="flex flex-col gap-4 items-center bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="flip-left" data-aos-delay="500">
                                                    
            <span className="bg-gray-200 rounded-full">
                                                        
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        
            <circle cx="12" cy="12" r="10"></circle>
                                                        
            <line x1="2" y1="12" x2="22" y2="12"></line>
                                                        
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                                        
            </svg>
                                                        
            </span>
                                                        
            <h1 className="text-xl font-semibold text-center">Frontend Development</h1>
                                                        
            <p className="text-center text-gray-500">Creating responsive, accessible, and beautiful user interfaces with modern frameworks.</p>
                                                        
            </div>
                                                        
            <div className="flex flex-col gap-4 items-center bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="flip-left" data-aos-delay="600">
                                                            
                <span className="bg-gray-200 rounded-full">
                                                                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                                                    
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                                                    
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                                                
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                                                                
                    </svg>
                
                </span>
                                                                
                <h1 className="text-xl font-semibold text-center">Backend Development</h1>
                                                                
                <p className="text-center text-gray-500">Building robust server-side applications and APIs that power web applications.</p>
                                                                
            </div>
                                                                
            <div className="flex flex-col gap-4 items-center bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="flip-left" data-aos-delay="700">
                                                                    
                <span className="bg-gray-200 rounded-full">
                                                                        
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                                        
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                                        
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                                                        
                </svg>
                </span>
                                                                        
                <h1 className="text-xl font-semibold text-center">Database Design</h1>
                                                                        
                <p className="text-center text-gray-500">Designing and implementing efficient database structures for optimal performance.</p>
                                                                        
                </div>
                                                                        
            <div className="flex flex-col gap-4 items-center bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="flip-left" data-aos-delay="800">
                                                                            
                <span className="bg-gray-200 rounded-full">
                                                                                
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                
                <path d="M9.04304 5.79285 2.83594 12 9.04304 18.2071 10.4573 16.7928 5.66436 12 10.4573 7.20706 9.04304 5.79285ZM14.957 18.2072 21.1641 12.0001 14.957 5.793 13.5427 7.20721 18.3356 12.0001 13.5427 16.793 14.957 18.2072Z"></path>
                                                                                
                </svg>
                                                                                
                </span>
                                                                                
                <h1 className="text-xl font-semibold text-center">API Development</h1>
                                                                                
                <p className="text-center text-gray-500">Creating RESTful and GraphQL APIs that connect frontend and backend systems.</p>
                                                                                
                </div>
            
            </div>
        </div>
    </section>
    </div>
                                                                                
    <div>
                                                                                    
    <section className="w-full px-4 py-10" id="projects">
<br></br>                                           
    <div className="w-full flex flex-col items-center space-y-6 my-5">
                                                        
    <div className="flex flex-col space-y-4 items-center mb-5 w-full max-w-lg sm:max-w-xl md:max-w-4xl aos-init" data-aos="fade-down" data-aos-delay="100">
                                                        
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">My Projects</h1>
                                                        
    <div className="h-1 rounded-lg w-20 bg-black inline-block aos-init" data-aos="fade-up" data-aos-delay="200"></div>
                                                        
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl aos-init" data-aos="fade-up" data-aos-delay="300">
                                                            
                                                            
    <p className="text-[16px] text-gray-500 text-center">Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered throughout my journey.</p>
                                                            
    </div>
                                                            
    </div>
                                                            
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                                                                
                                                                
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="zoom-in-up" data-aos-delay="400">
                                                                    
    <a href="#">
                                                                        
        <img className="rounded-t-lg w-full h-50 object-center object-cover block" alt="E-Commerce" src={P1} ></img>
                                                                        
    </a>
                                                                        
    <div className="p-5 space-y-3 md:p-8 flex flex-col">
                                                                    
    <a href="#"><h5 className="text-xl font-bold tracking-tight text-gray-900 aos-init" data-aos="fade-up" data-aos-delay="200">E-Commerce Platform</h5></a>
                                                                    
    <p className="font-normal text-gray-700 aos-init" data-aos="fade-up" data-aos-delay="300">A full-featured e-commerce platform with product management, cart functionality, and payment integration.</p>
                                                                    
                                                                    
    <div className="flex flex-wrap md:flex-nowrap gap-2 aos-init" data-aos="fade-up" data-aos-delay="300">
                                                                        
    <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">React</span>
                                                                    
                                                                    
    <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Node.js</span>
                                                                    
    <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">MongoDB</span>
                                                                    
                                                                    
    <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Tailwind CSS</span>
                                                                    
    </div>
                                                                    
    <div className="flex gap-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                                                                        
        <a aria-current="page" className="text-center rounded-md flex gap-2 hover:bg-gray-100 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3 active" href="https://phone-ecommerce-alpha.vercel.app/" data-discover="true">
                                                                    
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    
        <path d="M15 3h6v6"></path>
                                                                    
        <path d="M10 14 21 3"></path>
                                                                    
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                    
        </svg>
                                                                    
        <span>Live Demo</span>
        
        </a>
                                                                    
        <a aria-current="page" className="text-center hover:bg-gray-100 rounded-md flex gap-2 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3 active" href="https://github.com/imadityagolu/phone-ecommerce" data-discover="true">
                                                                    
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    
                                                                    
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                                    
                                                                    
        </svg>
                                                                    
        <span>Code</span>
                                                                    
        </a>
                                                                    
        </div>
                                                                    
        </div>
                                                                    
        </div>
                                                                    
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aos-init" data-aos="zoom-in-up" data-aos-delay="600">
                                                                        
        <a href="#">
                                                                        
            <img className="rounded-t-lg w-full h-50 object-center object-cover block" alt="E-Commerce" src={P2} ></img>
                                                                        
        </a>
                                                                        
        <div className="p-5 space-y-3 md:p-8 flex flex-col">
                                                                            
            <a href="#"><h5 className="text-xl font-bold tracking-tight text-gray-900 aos-init" data-aos="fade-up" data-aos-delay="300">Meditation Center</h5></a>
                                                                            
            <p className="font-normal text-gray-700 aos-init" data-aos="fade-up" data-aos-delay="400">A full-featured meditation platform with mind pleasuring tools to keep you calm and do yoga & exercise.</p>
                                                                            
            <div className="flex flex-wrap md:flex-nowrap gap-2 aos-init" data-aos="fade-up" data-aos-delay="400">
                                                            
            <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">React</span>
                                                        
            <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Node.js</span>
                                                        
            <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">MongoDB</span>
                                                        
            <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Tailwind CSS</span>
                                                        
            </div>
                                                        
                                                        
            <div className="flex gap-4 aos-init" data-aos="fade-up" data-aos-delay="400">
                                                            
            <a aria-current="page" className="text-center rounded-md flex gap-2 hover:bg-gray-100 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3 active" href="https://mct-meditation-application.vercel.app/" data-discover="true">
                                                            
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            
            <path d="M15 3h6v6"></path>
                                                            
            <path d="M10 14 21 3"></path>
                                                            
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                            
            </svg>
                                                            
            <span>Live Demo</span></a>
                                                            
            <a aria-current="page" className="text-center hover:bg-gray-100 rounded-md flex gap-2 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3 active" href="https://github.com/imadityagolu/mct-meditation-application" data-discover="true">
                                                            
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                            
            </svg>
                                                            
            <span>Code</span>
                                                            
            </a>
                                                            
            </div>
                                                            
            </div>
                                                            
            </div>
                                                            
            </div>
                                                            
            </div>
                                                            
        </section>
                                                            
            </div>
                                                            
                                                            
            <div>
                                                                
                <section className="w-full px-4 py-15 bg-gray-50" id="contact">
<br></br>                                           
                <div className="w-full flex justify-center items-center">
                                                                    
                <div className="flex flex-col space-y-4 items-center mb-5 w-full max-w-lg sm:max-w-xl md:max-w-4xl">
                                                                    
                <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold aos-init" data-aos="fade-down" data-aos-delay="0">Get In Touch</h1>
                                                                
                <div className="h-1 rounded-lg w-20 bg-black inline-block aos-init" data-aos="fade-up" data-aos-delay="100"></div>
                                                                
                <div className="w-full max-wmd sm:max-w-lg md:max-w-2xl aos-init" data-aos="fade-up" data-aos-delay="200">
                                                                    
                <p className="text-[16px] text-gray-500 text-center">Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the details below or through my contact information.</p>
                                                                
                </div>
                                                                
                </div>
                                                                
                </div>
                                                                
                <div className="space-y-7">
                                                                    
                <h1 className="text-2xl font-semibold aos-init" data-aos="fade-right" data-aos-delay="300">Contact Information</h1>
                                                                
                <div className="flex items-center gap-4 aos-init" data-aos="zoom-in" data-aos-delay="400">
                                                                    
                <span className="bg-gray-200 text-center rounded-full">
                                                                    
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                                
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                                                                
                </svg>
                                                                
                </span>
                                                                
                <div>
                                                                    
                <p className="font-semibold">Email</p>
                                                                
                <p className="text-gray-500 hover:text-gray-900 cursor-pointer"><a href="mailto:adityasng420.ak@gmail.com">adityasng420.ak@gmail.com</a></p>
                                                                
                </div>
                                                                
                </div>
                                                                
                <div className="flex items-center gap-4 aos-init" data-aos="zoom-in" data-aos-delay="500">
                                                                    
                <span className="bg-gray-200 text-center rounded-full">
                                                                    
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                                
                </svg>
                                                                
                </span>
                                                                
                <div>
                                                                    
                <p className="font-semibold">Phone</p>
                                                                
                <p className="text-gray-500 hover:text-gray-900 cursor-pointer"><a href="tel:+918083079692">+91 80830-79692</a></p>
                                                                
                </div>
                                                                
                </div>
                                                                
                <div className="flex items-center gap-4 aos-init" data-aos="zoom-in" data-aos-delay="600">
                                                                    
                <span className="bg-gray-200 text-center rounded-full">
                                                                    
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-5xl p-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                
                                                                
                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path>
                                                                
                <circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                                                                
                </svg>
                                                                
                </span>
                                                                
                <div>
                                                                    
                <p className="font-semibold">Location</p>
                                                                
                <p className="text-gray-500">Patna, Bihar, India</p>
                                                                
                </div>
                                                                
            </div>
                                                                
            <h1 className="text-2xl font-semibold aos-init" data-aos="fade-right" data-aos-delay="700">Follow Me</h1>

                                                                
            <p data-aos="fade-up" data-aos-delay="800" className="aos-init">Connect with me on social media to stay updated with my latest projects and activities.</p>
                                                                
            <div className="flex gap-2 aos-init" data-aos="fade-up" data-aos-delay="900">
                                                                    
            <a className="bg-gray-50 hover:bg-gray-200 text-center rounded-full cursor-pointer" href="https://github.com/imadityagolu" target="blank">
            <FaGithubSquare className="text-4xl" />                       
            </a>
                                                                
            <a className="bg-gray-50 hover:bg-gray-200 text-center rounded-full cursor-pointer" href="https://www.linkedin.com/in/imadityagolu/" target="blank">
            <FaLinkedin className="text-4xl" />
            </a>
                                                                
            </div>
                                                                
            </div>
                                                                
            </section>
                                                                
            </div>

                                                
            <footer className="flex w-full py-2 sm:py-4 px-2 bg-gray-50 place-content-center bg-gray-500 text-white">
                                                                    
                <div className="flex flex-col md:flex-row justify-between items-center mx-2 mb-5 text-center">
                                                                  
                    <div className="text-[14px]  ltr:text-center text-gray-500">
                                                                        
                        <p className="text-white pt-5">All rights reserved © 2025 </p>
                                                                
                    </div>
                                                                    
                </div>
                                                                    
            </footer>
                                                                    
    </div>
  
        </>
    );
}

export default Home;