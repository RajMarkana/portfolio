import React from 'react';
import { Link } from 'react-router-dom';
import { MdContactPage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot,FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
    return (
        <div className='p-5'>
            <div data-aos="fade-in" data-aos-duration="1000" className='flex justify-start items-center text-blue-500 mb-7 text-2xl' >
                <MdContactPage className='mr-2' />
                <h1 className='font-semibold'>Contact Us</h1>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1   gap-10">
                <Link className="flex  flex-col justify-center rounded-lg p-5  transition-all hover:bg-slate-100 items-center mb-3" to={"tel:+918128158552"}>
                    <FaPhoneAlt className="m-3 mb-5 text-blue-500" size={54} />
                    <span>+91 8128158552</span>
                </Link>
                <Link className="flex flex-col justify-center rounded-lg p-5 transition-all hover:bg-slate-100 items-center mb-3" to={"mailto:rajmarkana1324@gmail.com"} target='_blank'>
                    <MdMail className="m-3 text-red-600" size={54} />
                    <span>rajmarkana1324@gmail.com</span>
                </Link>
                <Link className="flex flex-col justify-center rounded-lg p-5 transition-all hover:bg-slate-100 items-center mb-3" to={""}>
                    <FaLocationDot className="m-3 text-green-600" size={54} />
                    <span>Rajkot,Gujarat</span>
                </Link>

            </div>
            <br />
            <hr />
            <br />
            <h1 className='text-center m-6 text-xl text-slate-700 font-semibold'>Follow On Social Media</h1>
            <div className="flex items-center justify-center gap-10 flex-wrap">

                <a href="https://www.facebook.com/profile.php?id=100071721978203" target="_blank" rel="noopener noreferrer" className=" rounded-lg p-5 text-slate-700 transition-all hover:bg-slate-100 hover:text-blue-700 items-center mb-3 w-fit">
                    <AiFillFacebook size={32} />
                </a>
                <a href="https://instagram.com/rajmarkana13/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-5 text-slate-700 transition-all hover:bg-slate-100 hover:text-red-600 items-center mb-3 w-fit">
                    <AiFillInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com/in/rajmarkana/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-5 text-slate-700 transition-all hover:bg-slate-100 hover:text-blue-700 items-center mb-3 w-fit">
                    <AiFillLinkedin size={32} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-lg p-5 text-slate-700 transition-all hover:bg-slate-100 hover:text-black items-center mb-3 w-fit">
                    <FaXTwitter size={32} />
                </a>
                <a href="https://github.com/RajMarkana" target="_blank" rel="noopener noreferrer" className="rounded-lg p-5 text-slate-700  transition-all hover:bg-slate-100 hover:text-black items-center mb-3 w-fit">
                    <AiOutlineGithub size={32} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
