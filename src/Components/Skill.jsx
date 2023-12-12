const Skill = () => {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-7xl text-center font-bold mb-6"><span className="text-pink-600">My</span> Skills</h2>

            <div className="flex flex-col md:flex-row py-12 items-center">

                <div className="md:flex-1">
                    <img src="https://i.ibb.co/F8ZjG2p/question.png" alt="" />
                </div>

                <div className="md:flex-1">

                    {/* HTML */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-orange-600 h-full rounded-full w-5/6"></div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-blue-600 h-full rounded-full w-5/6"></div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-yellow-400 h-full rounded-full w-4/6"></div>
                        </div>
                    </div>

                    {/* React */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>React</span>
                            <span>75%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-blue-400 h-full rounded-full w-3/4"></div>
                        </div>
                    </div>

                    {/* Node.js */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>Node.js</span>
                            <span>65%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-green-500 h-full rounded-full w-4/6"></div>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span>MongoDB</span>
                            <span>60%</span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded-full">
                            <div className="bg-green-800 h-full rounded-full w-3/5"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="stats shadow flex my-12">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-xl font-bold">Communication</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-xl font-bold">Leadership</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-xl font-bold">Teamwork</div>
                </div>

            </div>
        </div>
    );
};

export default Skill;
