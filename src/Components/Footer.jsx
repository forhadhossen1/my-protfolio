import logo from '../assets/favF.png';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div>
            <footer className="py-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
                <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
                    <div className="grid grid-cols-12">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                    <img src={logo} alt="" />
                                </div>
                                <span className="self-center text-2xl font-semibold">Forhad Hossen</span>
                            </a>
                        </div>

                    </div>
                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2023 All rights reserved</span>
                            <a rel="noopener noreferrer" href="#">
                                <span>Privacy policy</span>
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                <span>Terms of service</span>
                            </a>
                        </div>
                        <div className="flex justify-center pt-4 my-8 space-x-4 lg:pt-0 lg:col-end-13">
                            <a href="mailto:mr.forhad1030@gmail.com" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white dark:bg-violet-400 dark:text-gray-900">
                                <MdEmail className='text-4xl text-red-600'/>

                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100085288886971" title="facebook" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900 hover:bg-white">
                                <FaFacebook className='text-4xl text-blue-700'></FaFacebook>
                            </a>
                            <a href="https://github.com/forhadhossen1" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white dark:bg-violet-400 dark:text-gray-900">
                                <FaGithub className='text-4xl text-black'/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;