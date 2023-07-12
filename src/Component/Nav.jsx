import { useState } from "react";
import { Link } from "react-scroll";
import { FiAlignJustify } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="hidden sticky top-0 bg-white  shadow-md text-gray-800 lg:flex justify-between items-center p-7 font-semibold text-2xl">
                <h1 className="cursor-pointer">Saikat</h1>
                <ul className="flex gap-10 mr-20 cursor-pointer">
                    <li><Link to="home" spy={true} smooth={true} offset={100} duration={500}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li><Link to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <span className="lg:hidden" onClick={() => setOpen(!open)}>
                {
                    open ? <FaXmark size={30}></FaXmark> : <FiAlignJustify size={30}></FiAlignJustify>
                }
            </span>
            {
                open && (
                    <div className="h-screen bg-white z-10 font-semibold sticky top-0 ">
                        <ul className="flex gap-5 flex-col cursor-pointer">
                            <li><Link onClick={() => setOpen(!open)} to="home" spy={true} smooth={true} offset={100} duration={500}>SAIKAT.COM</Link></li>
                            <li><Link to="home" spy={true} smooth={true} offset={100} duration={500}>Home</Link></li>
                            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                            <li><Link to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link></li>
                            <li><Link to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default Nav;
