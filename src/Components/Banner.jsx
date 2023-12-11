import'./font.css'
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
                            <h1 className="text-6xl lg:text-7xl font-extrabold"><span className="text-5xl lg:text-6xl font-bold py-5">Hello ! I'm </span><br />Forhad Hossen</h1>
                            <h3 className="py-8 text-4xl font-light rubik-font">Web Develper</h3>
                            <a href="" download="forhad resume">
                                <button className="btn btn-outline btn-secondary rounded-none" >Get Resume</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;