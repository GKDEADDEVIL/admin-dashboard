import React from 'react';
import { python, java, swift, javaScript, ruby } from './../assets';
import { IoSearchOutline, IoMicOutline, IoFilter, IoHeartOutline, IoLogInOutline, IoShareSocialOutline } from 'react-icons/io5';

const CourseCard = ({ image, title, tags, description }) => {
    return (
        <div className="w-80 rounded-xl overflow-hidden shadow-lg p-4 m-2 flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <div className="w-1/3 p-2">
                <div className="w-full h-32">
                    <img className="w-full h-3/4 object-cover rounded-md" src={image} alt={title} />
                </div>
            </div>
            <div className="flex flex-col w-2/3 px-4 py-2 relative"> 
                <div className="font-bold text-sm mb-1 flex items-center justify-between"> 
                    <span>{title}</span> 
                    <IoHeartOutline className="text-gray-500 text-lg" /> 
                </div>
                <div className="mb-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 ${tag === 'Python' || tag === 'Java' || tag === 'javascript' || tag === 'java' || tag === 'ruby'
                                ? 'bg-blue-500 text-white'
                                : ''
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-gray-700 text-xs">{description}</p>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-md gap-8 w-40 flex justify-center items-center">
                        <IoLogInOutline className="mr-1" />
                        Join now
                    </button>
                </div>
            </div>
        </div>
    );
};

const CenterContent = () => {
    const courses = [
        {
            image: python,
            title: 'Python',
            tags: ['Python', 'Programming'],
            description: 'Learn Python programming from scratch.',
        },
        {
            image: java,
            title: 'Java Programming',
            tags: ['Java', 'Programming'],
            description: 'Master the Java programming language.',
        },
        {
            image: ruby,
            title: 'Ruby',
            tags: ['Ruby', 'Programming'],
            description: 'Learn Python programming from scratch.',
        },
        {
            image: swift,
            title: 'Swift Programming',
            tags: ['swift', 'Programming'],
            description: 'Master the Java programming language.',
        },
        {
            image: javaScript,
            title: 'Javascript',
            tags: ['Javascript', 'Programming'],
            description: 'Learn Python programming from scratch.',
        },
        {
            image: java,
            title: 'Java Programming',
            tags: ['Java', 'Programming'],
            description: 'Master the Java programming language.',
        }
    ];

    return (
        <div className="flex flex-col items-start justify-start w-3/5 p-4">
            {/* My Schedule and Search Bar */}
            <div className="flex items-center justify-between w-full mb-4">
                <div>
                    <h1 className="text-2xl font-bold">My Schedule</h1>
                    <p className="text-gray-500 text-sm">Education Teacher Dashboard</p>
                </div>
                <div className="flex items-center bg-gray-200 bg-opacity-50 rounded-full px-2 py-1">
                    <IoSearchOutline className="text-gray-700 text-lg" />
                    <input
                        type="text"
                        className="bg-transparent ml-2 w-64 h-10 outline-none placeholder-gray-400"
                        placeholder="Search"
                    />
                    <IoMicOutline className="text-gray-700 text-lg ml-2" />
                </div>
            </div>
            {/* Navigators and Filter Button */}
            <div className="flex items-center justify-between mt-2 mb-2 gap-40">
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold text-black">
                        TOP TRENDING COURSES
                    </a>
                    <a href="#" className="text-gray-500 text-lg ml-4">
                        New courses
                    </a>
                </div>
                <div className="ml-auto">
                    <button className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 transition-colors duration-300 hover:bg-gray-300">
                        <IoFilter className="text-gray-500 text-lg" />
                        <span className="ml-2 text-gray-700">Filter</span>
                    </button>
                </div>
            </div>
            {/* Navigators */}
            <div className="bg-white rounded-lg p-4 mb-4">
                <ul className="flex items-center justify-between gap-4">
                    <li className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold text-sm cursor-pointer">All Lessons</li>
                    <li className="px-4 py-2 rounded-md border-none text-gray-700 text-sm cursor-pointer">One by One</li>
                    <li className="px-4 py-2 rounded-md border-none text-gray-700 text-sm cursor-pointer">Personal Coaching</li>
                    <li className="px-4 py-2 rounded-md border-none text-gray-700 text-sm cursor-pointer">Videos Schedule</li>
                </ul>
            </div>
            {/* Course Cards */}
            <div className="bg-gray-200 bg-opacity-50 rounded-3xl pt-4 mr-4 ml-4">
                <div className="flex flex-wrap justify-center">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            image={course.image}
                            title={course.title}
                            tags={course.tags}
                            description={course.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CenterContent;
