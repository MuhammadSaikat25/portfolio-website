import profileImg from '../assets/Home-image.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
const Home = () => {
    return (
        <div className='bg-slate-100 mt-[1px] py-20'>
            <div id='home' className='lg:flex justify-around items-center lg:mb-20'>

                <div className="mb-20 lg:mb-0 space-y-5">
                    <h1 className='font-semibold text-center  text-3xl lg:text-7xl lg:text-left '>Front-End React</h1>
                    <h1 className='font-semibold text-center  text-3xl lg:text-7xl lg:text-left'>Developer</h1>
                    <p className='text-2xl text-center lg:text-left'>Hi, I'm Muhammad Saikat. A passionate Front-end React<br />Developer based in Dhaka, Bangladesh. </p>
                    <div className="flex justify-center lg:flex gap-5">
                        <span className=''><FaLinkedin size={30}></FaLinkedin></span>
                        <span ><FaGithub size={30}></FaGithub></span>
                    </div>
                </div>

                <div className="mb-32 lg:mb-0">
                    <img className='w-[300px] h-[300px] ml-10 lg:ml-0 object-cover rounded-full' src={profileImg} alt="" />
                </div>
            </div>
            <div className="mt-30 text-center w-full lg:flex justify-between lg:text-left lg:w-[50%] lg:ml-32">
                <div className=" lg:flex items-center gap-3 lg:mb-10">
                    <h1 className='underline lg:no-underline text-2xl font-semibold'>Tech Stack</h1>
                    <h1 className=' lg:border-l-2 border-black h-5'></h1>
                </div>
                <div className="grid grid-cols-4 ml-4 lg:flex gap-6 lg:ml-0">
                    <img className='w-[50px] h-[50px] bg-white shadow-md p-2 rounded-full' src={html} alt="" />
                    <img className='w-[50px] h-[50px] bg-white shadow-md p-2 rounded-full' src={css} alt="" />
                    <img className='w-[50px] h-[50px] bg-white shadow-md p-2 rounded-full' src={tailwind} alt="" />
                    <img className='w-[50px] h-[50px] bg-white shadow-md p-2 rounded-full' src={js} alt="" />
                    <img className='w-[50px] h-[50px] bg-white shadow-md p-2 rounded-full' src={react} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;

