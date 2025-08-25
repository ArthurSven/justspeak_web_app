import React, { useState } from 'react';
import AuthNavbar from "../../components/AuthNavbar.jsx";
import GermanSideBar from "../../components/GermanSideBar.jsx";
import {Outlet} from "react-router-dom";

function GermanLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <div className="flex flex-col min-h-screen bg-gray-200">
            {/* Fixed Navbar at the top */}
            <AuthNavbar onToggleSidebar={toggleSidebar} />

            {/* Content area below navbar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar - positioned below navbar */}
                <div className={`fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
                    <GermanSideBar />
                </div>

                {/* Mobile overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Main content area */}
                <div className="flex-1 overflow-y-auto sm:ml-64 mt-16 h-[calc(100vh-4rem)]"> {/* mt-16 to account for navbar height */}
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default GermanLayout;