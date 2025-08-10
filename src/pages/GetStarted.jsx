import React from 'react';

function GetStarted() {
    return (
        <section className="bg-white min-h-screen">
            <div className="py-8 px-2 lg:px-8 mx-auto w-full lg:py-24">
                <h2 className="text-5xl font-bold text-black mb-12 text-center">
                    Get started with JustSpeak
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {/* Card 1 - Language Selection */}
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 w-full hover:shadow-lg transition-shadow">
                        <div className="bg-green-100 text-green-800 text-sm font-medium inline-flex items-center px-3 py-1 rounded-lg dark:bg-gray-700 dark:text-green-400 mb-4">
                            <svg className="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                            Chichewa
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Learn Chichewa</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Mwaswera bwanji? Get started with your chichewa lesson today and blend in Malawi or Zambia
                        </p>
                        <a href="/construction" className="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700">
                            Start Chichewa
                        </a>
                    </div>

                    {/* Card 2 - Quick Start */}
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 w-full hover:shadow-lg transition-shadow">
                        <div className="bg-yellow-100 text-yellow-800 text-sm font-medium inline-flex items-center px-3 py-1 rounded-lg dark:bg-gray-700 dark:text-yellow-400 mb-4">
                            <svg className="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            German
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Learn German</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Guten Tag! Start your language journey with German and imagine navigating through the DACH region
                        </p>
                        <a href="/germanlayout" className="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600">
                            Start Learning
                        </a>
                    </div>

                    {/* Card 3 - For Teachers */}
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 w-full hover:shadow-lg transition-shadow">
                        <div className="bg-purple-100 text-purple-800 text-sm font-medium inline-flex items-center px-3 py-1 rounded-lg dark:bg-gray-700 dark:text-purple-400 mb-4">
                            <svg className="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                            Flashcards
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Manage your cards</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Create and manage flashcards for language learning and other purposes
                        </p>
                        <a href="/for-teachers" className="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-purple-700">
                            To Flashcards
                        </a>
                    </div>

                    {/* Card 4 - Community */}
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 w-full hover:shadow-lg transition-shadow">
                        <div className="bg-yellow-100 text-yellow-800 text-sm font-medium inline-flex items-center px-3 py-1 rounded-lg dark:bg-gray-700 dark:text-yellow-400 mb-4">
                            <svg className="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"/>
                            </svg>
                            Homework
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Join Our Community</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            A student at JustSpeak? Submit your homework right here
                        </p>
                        <a href="/community" className="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600">
                            Submit Homework
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;