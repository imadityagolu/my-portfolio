import icon from './logo.ico';
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { LuContactRound } from "react-icons/lu";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


function Header(){
    return (
        <>
        <div className="w-full h-17 bg-gray-300  flex p-3 gap-2 shadow-xl place-content-center ">

        <Link to="/" className="text-xl font-bold flex relative top-0 gap-2">
        <img src={icon} className="w-11 h-11 border-1 rounded-sm" />
        </Link>
        
        <Link to="/" 
        className="flex w-23 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <IoHome   className="text-2xl" /> 
        Home </Link>

        <Link to="/Skills" 
        className="flex w-23 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <FaLaptopCode  className="text-2xl" /> 
        Skills </Link>

        <Link to="/About" 
        className="flex w-31 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <LuContactRound  className="text-2xl" /> 
        Certificates </Link>
        
        <Link to="/Projects" 
        className="flex w-25 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <AiOutlineFundProjectionScreen  className="text-2xl" /> 
        Projects </Link>

        <Link to="/Contact" 
        className="flex w-25 p-2 rounded-md text-black border-1 gap-1 bg-gray-400">
        <MdOutlinePermPhoneMsg  className="text-2xl" /> 
        Contact </Link>
        </div>

        </>
    );
}

export default Header;