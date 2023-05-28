import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import CenterContent from './CenterContent';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <LeftSidebar />
            <CenterContent />
            <RightSidebar />
        </div>
    );
};

export default Layout;
