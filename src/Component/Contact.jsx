import { BiSolidLocationPlus } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Contact = () => {
    return (
        <div id="contact" className="max-w-7xl mx-auto p-6 lg:p-20 space-y-8">
            <h1 className="text-center text-2xl font-bold text-blue-600 lg:text-left">CONTACT</h1>
            <p className=" text-center text-3xl lg:text-3xl lg:text-start font-semibold ">Don't be shy! Hit me up! 👇</p>

            <div className="hidden lg:flex gap-20">
                <div className="font-bold text-center lg:text-start flex">
                    <BiSolidLocationPlus className='bg-slate-100 p-2 items-center shadow-lg rounded-full mt-3 ' color='blue' size={50}></BiSolidLocationPlus>
                    <h1 className='p-1 text-2xl'>Location <br /> Dhaka, Bangladesh</h1>
                </div>
                <div className="hidden lg:flex gap-4">
                    <div className="font-bold text-center flex lg:text-start">
                        <HiOutlineMailOpen className='bg-slate-100 p-2 items-center shadow-lg rounded-full mt-3 ' color='blue' size={50}></HiOutlineMailOpen>
                        <h1 className='p-1 text-2xl'>Mail <br /> smsaikat000@gmail.com</h1>
                    </div>
                </div>
            </div>


            <div className=" lg:hidden ">
                <div className="">
                    <BiSolidLocationPlus className='bg-slate-100 p-2 mx-auto shadow-lg rounded-full mt-3' color='blue' size={50}></BiSolidLocationPlus>
                    <h1 className=' text-center'>Location <br /> Dhaka, Bangladesh</h1>
                </div>
                <div className="mt-5">
                    <div className="flex flex-col justify-center">
                        <HiOutlineMailOpen className='bg-slate-100 p-2 mx-auto shadow-lg rounded-full mt-3 ' color='blue' size={50}></HiOutlineMailOpen>
                        <h1 className=' text-center'>Mail <br /> smsaikat000@gmail.com</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
