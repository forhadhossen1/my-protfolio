import '../Components/font.css'
const Service = () => {
    return (
        <div className="my-10">
            <h1 className="text-6xl lg:text-7xl font-bold text-center py-10 dark:text-white text-pink-900"> What I Do</h1>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className="card text-black dark:text-white bg-gray-100 p-3 rounded-none">
                    <figure><img src="https://i.ibb.co/2MCmzRS/digital-marketing.png" alt="design logo" className="h-[100px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold rubik-font text-2xl">
                            UI / UX Design
                        </h2>
                        <p className='rubik-font'>
                            I'm a passionate UI/UX designer dedicated to crafting intuitive, user-centric digital experiences. With a blend of creativity and functionality, I specialize in creating visually engaging interfaces that prioritize seamless user interactions.
                        </p>
                    </div>

                </div>

                <div className="card text-black dark:text-white bg-gray-100 p-3 rounded-none">
                    <figure><img src="https://i.ibb.co/NNMftT9/coding.png" alt="develpment" className="h-[100px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold rubik-font text-2xl">
                            Development
                        </h2>
                        <p className='rubik-font'>
                            I'm a skilled and passionate MEAN stack developer, proficient in leveraging MongoDB, Express.js, Angular, and Node.js to create powerful and scalable web applications. With a keen eye for detail and a knack for problem-solving, I specialize in crafting dynamic and efficient solutions that marry seamless functionality with intuitive user experiences.
                        </p>
                    </div>

                </div>

                <div className="card text-black dark:text-white bg-gray-100 p-3 rounded-none">
                    <figure><img src="https://i.ibb.co/hBzTCQs/responsive-design.png" alt="develpment" className="h-[100px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold rubik-font text-2xl">
                            Web Responsive
                        </h2>
                        <p className='rubik-font'>
                        I'm a dedicated responsive web developer passionate about building modern and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I specialize in creating seamless and visually appealing web experiences that adapt flawlessly across devices and screen sizes.
                        </p>
                    </div>

                </div>

                <div className="card text-black dark:text-white bg-gray-100 p-3 rounded-none">
                    <figure><img src="https://i.ibb.co/TwM4FQd/curve.png" alt="develpment" className="h-[100px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold rubik-font text-2xl">
                            Web Design
                        </h2>
                        <p className='rubik-font'>
                        I am a passionate web designer dedicated to crafting beautiful and intuitive digital experiences. With a keen eye for aesthetics and a deep understanding of user-centered design principles, I specialize in creating visually engaging interfaces that resonate with users.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;