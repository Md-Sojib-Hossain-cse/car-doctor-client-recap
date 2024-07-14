import { AiFillMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendar, IoTime } from "react-icons/io5";
import { TbOvalVerticalFilled } from "react-icons/tb";

const ContactInfo = () => {
    return (
        <div className="bg-[#151515] text-white min-h-56 mt-8 md:mt-10 lg:mt-12 flex flex-col md:flex-row justify-evenly py-12 md:py-24 gap-8 rounded-sm md:rounded-lg">
            <div className="flex justify-center items-center gap-4">
                <div className="relative">
                    <IoCalendar className="text-4xl"/>
                    <IoTime className="text-2xl text-[#FF3811] absolute -bottom-1 -right-1"/>
                </div>
                <div>
                    <p className="font-medium text-sm md:text-base mb-1">We are open monday-friday</p>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="relative">
                    <FaPhoneAlt className="text-4xl"/>
                    <AiFillMessage className="text-2xl text-[#FF3811] absolute top-0 -right-2"/>
                </div>
                <div>
                    <p className="font-medium text-sm md:text-base mb-1">Have a question?</p>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl">+2546 251 2658</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="relative ">
                    <FaLocationDot className="text-4xl text-[#FF3811] absolute top-0 z-10" />
                    <TbOvalVerticalFilled className="text-4xl text-white relative -bottom-5"/>
                </div>
                <div>
                    <p className="font-medium text-sm md:text-base mb-1">Need a repair? our address</p>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;