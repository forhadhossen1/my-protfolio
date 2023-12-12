import Typewriter from 'typewriter-effect';
import './font.css'
const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/xHf2sD9/bg.png)' }}>
            <div className="">
                <div className="hero">
                    <div className="min-h-[70vh] flex items-center flex-col px-0 mx-0 lg:flex-row-reverse lg:justify-between">

                        <div className="flex-1">
                            <img src="https://i.ibb.co/LpPjWvd/pixelcut-export-1.png" className="h-[200px] w-[200] md:h-full md:w-full rounded-ful" />
                        </div>


                        <div className="flex-1 py-5 text-black dark:text-white">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <h1 className="text-6xl lg:text-7xl font-extrabold"><span className="text-5xl lg:text-6xl font-bold py-5 text-pink-600">Hello <span className='text-orange-500 text-8xl'>!</span> I'm </span><br />Forhad <span className='text-pink-600'>Hossen</span></h1>
                            </div>
                            <div className='py-8 text-4xl font-light rubik-font text-orange-700'>

                                <Typewriter
                                    options={{
                                        strings: ['Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <a href="" download>
                                <button className="btn btn-outline btn-secondary rounded-none my-12" >Get Resume</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;