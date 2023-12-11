import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Footer";
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/xHf2sD9/bg.png)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-black dark:text-white">
                        <h1 className="mb-5 text-5xl font-bold">Get in Touch With Me</h1>
                        <p className="mb-5">You can contact me for any need you may have and to discuss about your organization or your personal website thanks</p>
                        <p className="text-xl font-bold flex gap-4 items-center justify-center"><FaLocationDot /> Rangpur, Bangladesh</p>
                        <p className="text-xl font-bold flex gap-4 items-center justify-center py-6"><MdEmail /> mr.forhad1030@gmail.com</p>
                        <p className="text-xl font-bold flex gap-4 items-center justify-center "><FaPhone /> 01306181767</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;