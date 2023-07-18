import Doctor from '../../assets/Panda.png'
import { FaGithub } from "react-icons/fa";
const PandaRestaurant = () => {
    return (
        <div className="lg:flex gap-5 e-full lg:w-[90%] lg:mx-auto bg-white shadow-lg rounded-xl p-10 mb-10">
            <div className="w-full lg:w-[50%] h-full p-4">
                <h1 className='font-semibold inline-flex items-center justify-center w-full'>Panda <span className='text-rose-400 ml-2'>Restaurant</span></h1>
                <p className='text-center h-full text-sm mt-5 lg:text-base text-gray-700 font-medium'>
                    I developed a Panda Restaurant website using the MERN stack, Firebase, and JWT for authentication. The website includes an admin dashboard and a user dashboard. Users can register, order food and track their orders. Admins have additional privileges, such as managing users and food. The website is mobile responsive and securely stores user data in MongoDB. It showcases my skills in front-end development, Firebase integration, JWT security, and mobile responsiveness.</p>
                <div className="flex mt-10 w-full justify-center items-center gap-4 font-bold ">
                    <h1 className=' bg-gray-50 shadow-md rounder-md  p-2'>React</h1>
                    <h1 className=' bg-gray-50 shadow-md rounder-md  p-2'>Tailwind CSS</h1>

                </div>
                <div className="mt-10 w-full text-center gap-4 font-bold ">
                    <p>Admin:smsaikat000gmail.com</p>
                    <p>password:1234567</p>
                </div>
                <div className=" mt-10">
                    <div className='space-y-3 lg:flex gap-4 items-center lg:justify-center'>
                        <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://github.com/MuhammadSaikat25/panad-restaurant-client">Front End
                            <span>
                                <FaGithub size={30}></FaGithub>
                            </span>
                        </a>
                        <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://github.com/MuhammadSaikat25/panda-restaurant-server">Back End
                            <span>
                                <FaGithub color='blue' size={30}></FaGithub>
                            </span>
                        </a>
                        <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://panda-restaurant-a2e5b.web.app/">Live link
                            <span>
                                <FaGithub size={30}></FaGithub>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <img className=' shadow p-3 rounded-xl lg:w-[500px] ' src={Doctor} alt="" />
        </div>
    );
};

export default PandaRestaurant;