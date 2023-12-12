
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    const educationData = [
        {
            title: 'Diploma of Engineering',
            date: '2020-2024',
            description: 'Pabna Polytechnic Institute, Pabna',
        },
        {
            title: 'Secondary School Certificate',
            date: '2018-2020',
            description: 'Vendhabari ML High School, Rangpur',
        },
        // Add more education entries as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4 my-12 text-center pb-12">About Me</h1>
            <div>
                <h5 className="text-xl font-bold mb-4 my-12 text-center ">My name is Forhad, and I'm a 21-year-old living in Bangladesh.  My expertise covers various technology stacks, allowing me to skillfully handle a variety of projects. I take pride in my contributions to the tech industry and constantly strive for excellence in everything I do I'm professional Web Developer & Web Designer based in Bangladesh working on different projects. I can build awesome Designs with different programming languages.
                </h5>
            </div>

            <p>

            </p>

            <section className="mb-8 py-12">
                <h2 className="text-4xl font-bold py-12 text-center">Education & Qualifications</h2>
                <VerticalTimeline>
                    {educationData.map((edu, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={edu.date}
                            dateClassName="text-gray-500"
                            iconStyle={{ background: '#3498db', color: '#fff' }}
                        >
                            <h3 className="text-xl font-semibold">{edu.title}</h3>
                            <p>{edu.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </section>

            <section className='my-12'>
                <h2 className="text-4xl font-bold py-12 text-center">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Replace with your skill cards */}
                    <div className="border rounded-md p-4 flex items-center">
                        <FaHtml5 className='text-8xl text-red-500 text-center'></FaHtml5>
                        <h3 className="text-xl font-bold py-4">HTML</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaCss3 className='text-8xl text-blue-500 text-center'></FaCss3>
                        <h3 className="text-xl font-bold py-4">HTML</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <SiTailwindcss className='text-8xl text-cyan-400 text-center' />
                        <h3 className="text-xl font-bold py-4">Tailwind</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaBootstrap className='text-8xl text-indigo-500 text-center' />
                        <h3 className="text-xl font-bold py-4">Bootstrap</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaJs className='text-8xl text-yellow-400 text-center' />
                        <h3 className="text-xl font-bold py-4">JS</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaReact className='text-8xl text-cyan-400 text-center' />
                        <h3 className="text-xl font-bold py-4">React</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <SiExpress className='text-8xl text-gray-400 text-center' />
                        <h3 className="text-xl font-bold py-4">Express</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaNodeJs className='text-8xl text-green-700 text-center' />
                        <h3 className="text-xl font-bold py-4">NodeJs</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <SiMongodb className='text-8xl text-green-700 text-center' />
                        <h3 className="text-xl font-bold py-4">MongoDB</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <SiFirebase className='text-8xl text-yellow-400 text-center' />
                        <h3 className="text-xl font-bold py-4">Firebase</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <TbBrandNextjs className='text-8xl text-gray-400 text-center' />
                        <h3 className="text-xl font-bold py-4">NextJs</h3>
                    </div>
                    <div className="border rounded-md p-4 flex items-center">
                        <FaFigma className='text-8xl text-orange-400 text-center' />
                        <h3 className="text-xl font-bold py-4">Figma</h3>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
