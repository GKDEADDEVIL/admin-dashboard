/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { MdDashboard, MdSchool, MdEvent, MdFolder, MdAssignment, MdMessage, MdKeyboardArrowRight } from 'react-icons/md';
import { logo, leftbar, subs, subsr } from '../assets';

const LeftSidebar = () => {
    return (
        <div className="flex flex-col items-center justify-between pl-4 pr-2 h-max bg-gray-200 ">
            <div className="flex items-center mb-20 pt-4">
                <img
                    src={logo}
                    alt="Skilify Admin"
                    className="w-8 h-8 mr-2"
                />
                <h1 className="text-lg font-bold">Skilify Admin</h1>
            </div>
            <nav className="flex flex-col space-y-2 pb-6"> 
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdDashboard className="mr-2 inline-block" />
                        Dashboard
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdSchool className="mr-2 inline-block" />
                        My Course
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdEvent className="mr-2 inline-block" />
                        Calendar
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdFolder className="mr-2 inline-block" />
                        Resource
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdAssignment className="mr-2 inline-block" />
                        Quiz
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
                <div className="nav-link transition duration-300 hover:bg-gray-800 p-4 rounded-3xl w-60 flex items-center justify-between pl-8 pr-8">
                    <span>
                        <MdMessage className="mr-2 inline-block" />
                        Message
                    </span>
                    <MdKeyboardArrowRight className="inline-block" />
                </div>
            </nav>
            <div className="my-8">
                <img
                    src={leftbar}
                    alt="Left Bar Image"
                    className="w-full"
                />
            </div>
            <button className="mt-4 mb-6 bg-white hover:bg-red-600  text-red-600 hover:text-white duration-700  font-bold py-2 px-4 rounded-3xl w-64 flex justify-around items-center ">
                <img src={subs} alt="" /> 
                Get Subscription 
            </button>
        </div>
    );
};

export default LeftSidebar;
