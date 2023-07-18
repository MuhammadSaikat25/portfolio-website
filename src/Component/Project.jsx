import Doctor from '../assets/Doctor.png'
import teethLogo from '../assets/teethLogo.png'
import { FaGithub } from "react-icons/fa";
import MyProjects from './myProjects/MyProjects';

const Project = () => {
    return (
        <div id="project" className="p-7 bg-slate-100 lg:p-28">
            <h1 className='text-blue-500 font-semibold text-center text-2xl'>PORTFOLIO</h1>
            <p className='font-semibold lg:text-2xl mt-3 text-center mb-7'>Each project is a unique piece of development 🧩</p>
                <MyProjects></MyProjects>
        </div>
    );
};

export default Project;