import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbBrandVercelFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneCallback } from "react-icons/md";

function Footer(){
    return (
        <>
        <div id="Contact" className="w-full h-130 bg-black text-center text-white">

        <div className="relative top-15">

            <p className="text-3xl p-6">Contact me !</p>
            
            <a href="mailto:adityasng420.ak@gmail.com" className="flex place-content-center p-2">
                <CgMail className="text-3xl" /> 
                adityasng420.ak@gmail.com
            </a>
            
            <a href="mailto:adityasng420.ak@gmail.com" className="flex place-content-center p-2">
                <MdOutlinePhoneCallback  className="text-3xl" /> 
                +91 80830-79692
            </a>
        </div>

        <div>
        <p className="text-center place-content-center relative top-30">You can connect with me on social media...</p>
        </div>

        <div className="flex place-content-center text-3xl gap-5 relative top-35">
        <a href="https://www.instagram.com/imadityagolu/"><FaInstagram /></a> 
        <a href="https://github.com/imadityagolu"><FaGithub /></a> 
        <a href="https://vercel.com/aditya-kumars-projects-a1b7703f"><TbBrandVercelFilled /></a> 
        <a href="https://www.linkedin.com/in/imadityagolu/"><FaLinkedin /></a> 
        <a href="https://www.facebook.com/imadityagolu/"><FaFacebook /></a> 
        <a href="https://www.youtube.com/@imAdityaGolu"><FaYoutube /></a> 
        <a href="https://api.whatsapp.com/send?phone=918083079692"><FaWhatsapp /></a>
        <a href="https://x.com/imAdityaGolu"><FaTwitter /></a>
        <a href="https://web.telegram.org/k/#@ImAdityaGolu"><FaTelegramPlane /></a>
        </div>

        <div className="flex text-center place-content-center relative top-55">    
        Made with <FaHeart className="text-red-500 flex relative top-1 m-1" /> by @imadityagolu
        </div>

        </div>
        </>
    );
}

export default Footer;