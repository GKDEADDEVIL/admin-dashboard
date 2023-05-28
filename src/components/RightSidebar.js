import React from 'react';
import { course, profile, session } from '../assets';
import { IoNotificationsOutline, IoCloudUploadOutline } from 'react-icons/io5';

const sessions = [
    { title: 'Machine Learning', description: 'Data Science', logo: session },
    { title: 'Machine Learning', description: 'Data Science', logo: session },
    { title: 'Machine Learning', description: 'Data Science', logo: session },
    { title: 'Machine Learning', description: 'Data Science', logo: session },
    { title: 'Machine Learning', description: 'Data Science', logo: session },
];

const courses = [
    { title: 'Adobe XD', description: 'UI/UX Designer', logo: course },
    { title: 'Adobe XD', description: 'UI/UX Designer', logo: course },
    { title: 'Adobe XD', description: 'UI/UX Designer', logo: course },
    { title: 'Adobe XD', description: 'UI/UX Designer', logo: course },
    { title: 'Adobe XD', description: 'UI/UX Designer', logo: course },
];

const RightSidebar = () => {
    return (
        <div className="flex flex-col items-start justify-between w-1/5 bg-gray-200 p-4 h-fit">
            <div className="flex items-center space-x-4 mb-4">
                <button className="bg-gray-300 hover:bg-gray-500 text-gray-700 py-1 px-2 rounded-xl gap-2 border-black text-xs p-8 w-40 h-10  flex items-center space-x-1">
                    <IoCloudUploadOutline className="text-gray-700 text-sm" />
                    <span>New Upload</span>
                </button>
                <IoNotificationsOutline className="text-gray-700 text-xl" />
                <h2 className="text-xs font-normal">John</h2>
                <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
            <div className="bg-gray-100 bg-opacity-50 rounded-md p-2 mt-12 mb-8 w-64">
                <h2 className="text-sm font-bold text-center mb-2 mt-4">Group Discussion Sessions</h2>
                {sessions.map((session, index) => (
                    <div key={index} className="bg-white bg-opacity-50 rounded-md p-2 mb-2">
                        <div className="flex items-center space-x-2">
                            {session.logo && (
                                <img src={session.logo} alt="Session Logo" className="w-4 h-4" />
                            )}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold text-center">{session.title}</h3>
                                {session.description && (
                                    <p className="text-xs text-gray-700 text-center">{session.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-gray-100 bg-opacity-50 rounded-md p-2 mt-2 w-64">
                <h2 className="text-sm font-bold text-center mb-2">Top Performing Courses</h2>
                {courses.map((course, index) => (
                    <div key={index} className="bg-white bg-opacity-50 rounded-md p-2 mb-2">
                        <div className="flex items-center space-x-2">
                            {course.logo && (
                                <img src={course.logo} alt="Course Logo" className="w-4 h-4" />
                            )}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold text-center">{course.title}</h3>
                                {course.description && (
                                    <p className="text-xs text-gray-700 text-center">{course.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;
