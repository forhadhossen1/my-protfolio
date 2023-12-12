import { Link } from "react-router-dom";

const Protfolio = () => {
    return (
        <div className=" py-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-center text-black dark:text-white">Prot <span className="text-pink-600">Folio</span></h1>



            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
                <div className="py-12">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border ">
                        <div
                            className="relative h-56  lg:h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src="https://i.ibb.co/jZqCMMK/Forum.png"
                                alt="card-image" className="w-full" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Forum
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                <Link to='https://fianl-forum.web.app/' target="blank">See Web</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border ">
                        <div
                            className="relative h-56 lg:h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src="https://i.ibb.co/8jvgs4P/book.png"
                                alt="card-image" className="w-full" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Online Sutdy
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                <Link to='https://assignment11-onlinestudy-clients.vercel.app/' target="blank">See Web</Link>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="py-12">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border ">
                        <div
                            className="relative h-56 lg:h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src="https://i.ibb.co/YQZ9W3N/banner-car3.jpg"
                                alt="card-image" className="w-full" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Automobile
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                <Link to='https://assignment10-automotive.web.app/' target="blank">See Web</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border ">
                        <div
                            className="relative h-56 lg:h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src="https://i.ibb.co/WWBYH7Y/Rectangle-4284.png"
                                alt="card-image" className="w-full" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Donation Camp
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                <Link to='https://assignment8-donate.vercel.app/' target="blank">See Web</Link>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Protfolio;