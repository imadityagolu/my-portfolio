import icon from './logo.ico';
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { LuContactRound } from "react-icons/lu";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

function Header(){
    return (
        <>
        <div className="w-full h-17 bg-gray-300  flex relative p-3 gap-2 shadow-lg">

        <Link to="/" className="text-xl font-bold flex relative top-1 underline gap-2">
        <img src={icon} className="w-10 h-10 border-1 rounded-sm" />
        @imAdityaGolu</Link>
        
        <div className="flex absolute right-5 gap-2">
        <Link 
        to="/About" 
        className="flex w-25 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <LuContactRound className="text-2xl" /> About</Link>
        
        <Link 
        to="/Skills" 
        className="flex w-21 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <FaLaptopCode  className="text-2xl" /> Skills </Link>

        <Link 
        to="/Projects" 
        className="flex w-25 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <AiOutlineFundProjectionScreen  className="text-2xl" /> 
        Projects </Link>
        
        <a href="#Contact" 
        className="flex w-25 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <MdOutlinePermPhoneMsg  className="text-2xl" /> 
        Contact </a>
        </div>

        </div>
        </>
    );
}

export default Header;