import MyImage from '../my-image-1.jpg'
import MyImage2 from '../my-image-2.jpg'
import { SiGmail } from "react-icons/si";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Home(){
    return (
        <>

<div id="about" className="flex mt-8 pl-[15%] gap-3 items-center ">

<div className="">
    <img 
    src={MyImage2} 
    alt="myImage" 
    className="rounded-2xl h-100 shadow-xl border"/>
</div>

<div className='p-5'>
    <h1 
    className="text-3xl font-bold">
        Aditya Kumar.</h1>

    <p 
    className='text-lg italic'>
        Full Stack Developer</p>

    <br></br><br></br>

    <a href="mailto:adityasng420.ak@gmail.com" 
    className='flex gap-2'>
        <SiGmail className="text-red-500 text-2xl rounded border p-1" />
        adityasng420.ak@gmail.com</a>

    <br></br>

    <a href="tel:+918083079692" 
    className='flex gap-2'>
        <MdOutlinePhoneCallback  className="text-blue-500 text-2xl rounded border p-1" />
        +91 80830-79692</a>

    <br></br><br></br>

    <p 
    className='flex gap-2'>
        <FaLocationDot className="text-green-500 text-2xl"  />
        <i>Live-in: Patna, Bihar, India.</i></p>

    <br></br><br></br>
    
    <a 
    href="https://www.linkedin.com/in/imadityagolu/" 
    className='flex gap-2'>
        <FaLinkedin  className='text-2xl text-blue-800'/>
        <p className="underline text-blue-500">
            Linkedin profile</p>
    </a>

    <br></br>

    <a 
    href="https://github.com/imadityagolu" 
    className='flex gap-2'>
        <FaGithubSquare  className='text-2xl'/>
        <p className="underline text-blue-500"> 
            GitHub repos</p>
    </a>
</div>
</div>

<div className="relative pl-[17%] pr-[15%] top-8">
<h1 className='text-2xl font-bold text-rose-500'>About</h1>
<p>I am a software developer skilled in designing, and delivering scalable software solutions. Proficient in HTML5, CSS, Tailwind, JavaScript, MySQL and PHP. Passionate about problem solving and creating user focused applications while ensuring high quality optimized performance.</p>
</div>
        </>
    );
}

export default Home;