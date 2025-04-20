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

function Skills(){
    return (
        <>

<div id="skills" className="w-full h-156 text-center text-black bg-linear-to-r from-pink-600 to-amber-300 ring-1 ring-gray-950/10 ring-inset dark:from-pink-500 dark:to-amber-200 dark:ring-white/10">

<div className="relative top-15">

<h1 className='text-3xl font-bold text-red-600 p-5'>My Skills !</h1>

<div id="Certificate" className='pt-5 pl-[15%] pr-[15%] mt-0'>
<br></br>
        <div className='flex gap-5 justify-between p-4'>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg bg-blue-200'>
            <div className='place-content-center flex'><FaJava className="text-5xl flex text-blue-500 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> java </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-purple-200'>
            <div className='place-content-center flex'><FaHtml5 className="text-5xl flex text-purple-500 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> html </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-yellow-100'>
            <div className='place-content-center flex'><IoLogoCss3 className="text-5xl flex text-yellow-400 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> CSS </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-red-100'>
            <div className='place-content-center flex'><TbBrandJavascript className="text-5xl flex text-red-500 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> JavaScript </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-blue-200'>
            <div className='place-content-center flex'><FaBootstrap  className="text-5xl flex text-blue-800 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> Bootstrap </p>
        </div>
        
        </div>
        
        <div className='flex gap-5 justify-between p-5'>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-rose-100'>
            <div className='place-content-center flex'><FaReact className="text-5xl flex text-rose-400 place-content-center "/> </div>
        <p className='place-content-center font-semibold flex '> React </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-yellow-100'>
            <div className='place-content-center flex'><FaGitAlt className="text-5xl flex text-yellow-600 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> Git </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-blue-100'>
            <div className='place-content-center flex'><BiLogoTypescript className="text-5xl flex text-blue-400 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> TypeScript </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-orange-100'>
            <div className='place-content-center flex'><GrMysql  className="text-5xl flex text-orange-500 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> MySQL </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg  bg-red-100'>
            <div className='place-content-center flex'><RiTailwindCssFill className="text-5xl flex text-red-500 place-content-center "/> </div>
            <p className='place-content-center font-semibold flex '> Tailwind </p>
        </div>
        
        </div>
</div>
</div>
</div>

        </>
    );
}
export default Skills;