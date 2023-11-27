import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Work = ({ projects }) => {
    return (
        <section name="work" className="bg-[#0a192f] text-gray-300 w-full">
            <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center">
                <div className='mt-32 mb-5'>
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">My Work</p>
                    <p className="mt-3">Here are some projects I have worked on so far</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <div key={index} className="rounded-md overflow-hidden shadow-lg bg-[#112240] transition-transform duration-300 transform hover:scale-105 w-full">
                            <img src={project.images[0]} alt="Project" className="bg-cover h-64 w-full object-cover" />
                            <div className="p-4">
                                <h2 className="text-blue-500 text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-gray-300 mb-4">{project.description || 'Not set'}</p>
                                <Link to={project.gitLink} target="_blank" className="text-blue-500 hover:underline">
                                    Learn more <FaArrowRight className="inline" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
