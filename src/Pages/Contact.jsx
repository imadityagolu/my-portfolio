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

function Contact(){
    return (
        <>
        
<div id="Contact" className="w-full h-155 text-center text-black bg-linear-to-r from-pink-600 to-amber-300 ring-1 ring-gray-950/10 ring-inset dark:from-pink-500 dark:to-amber-200 dark:ring-white/10">

<div className="relative top-15">

    <p className="text-3xl p-6 font-bold text-red-600">Contact me !</p>
<br></br>
    <a href="mailto:adityasng420.ak@gmail.com" className="flex place-content-center p-2">
        <CgMail className="text-3xl" /> 
        <p className="text-blue-700">adityasng420.ak@gmail.com</p>
    </a>
    
    <a href="https://api.whatsapp.com/send?phone=918083079692" className="flex place-content-center p-2">
        <MdOutlinePhoneCallback  className="text-3xl" /> 
        <p className="text-blue-700">+91 80830-79692</p>
    </a>
</div>

<br></br>

<div>
<p className="text-center place-content-center relative top-30 text-xl">You can connect with me on social media...</p>
</div>

<div className="flex place-content-center text-4xl gap-5 relative top-35">

<a href="https://www.instagram.com/imadityagolu/"><FaInstagram className="text-pink-700" /></a> 

<a href="https://www.facebook.com/imadityagolu/"><FaFacebook className="text-blue-500"/></a> 

<a href="https://github.com/imadityagolu"><FaGithub /></a> 

<a href="https://www.linkedin.com/in/imadityagolu/"><FaLinkedin className="text-blue-800"/></a> 

<a href="https://vercel.com/aditya-kumars-projects-a1b7703f"><TbBrandVercelFilled /></a> 

<a href="https://x.com/imAdityaGolu"><FaTwitter className="text-blue-500" /></a>

<a href="https://www.youtube.com/@imAdityaGolu"><FaYoutube className="text-red-600"/></a> 

<a href="https://api.whatsapp.com/send?phone=918083079692"><FaWhatsapp className="text-green-500"/></a>

<a href="https://web.telegram.org/k/#@ImAdityaGolu"><FaTelegramPlane className="text-blue-800"/></a>
</div>

<br></br>

<div className="flex text-center place-content-center relative top-55">    
Made by @imadityagolu © 2025
</div>

</div>
        </>
    );
}

export default Contact;