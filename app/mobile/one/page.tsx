import React from 'react';
import { ChevronRight } from 'lucide-react';

const StatusBar = () => {
    return (
        <div className="flex justify-between items-center p-2">
            <span className="text-black text-sm font-semibold">9:41</span>
            <div className="flex space-x-1">
                <div className="flex flex-col items-center">
                    <div className="w-3 h-1 bg-black rounded-full"></div>
                    <div className="w-5 h-1 bg-black rounded-full"></div>
                    <div className="w-7 h-1 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

const ProgressBar = () => {
    return (
        <div className="flex mx-4 mt-2 bg-white p-1 gap-1 rounded-full">
            <div className="h-1 rounded-full opacity-70 bg-orange-400 flex-grow"></div>
            <div className="h-1 rounded-full opacity-70 bg-orange-400 flex-grow"></div>
            <div className="h-1 rounded-full opacity-70 bg-orange-400 flex-grow"></div>
            <div className="h-1 rounded-full opacity-70 bg-gray-200 flex-grow"></div>
        </div>
    );
};

const DatingAppProfileScreen = () => {
    return (
        <div className="bg-orange-100 h-screen w-full font-sans">
            <StatusBar />
            <ProgressBar />
            {/* Main content */}
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-2 text-gray-700">
                    What're you <span className="text-orange-400 handwriting">hoping to find?</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    Honesty helps you and everyone on find what you're looking for.
                </p>

                {/* Options */}
                <div className="space-y-3">
                    <button className="w-full bg-white p-3 rounded-full text-left text-gray-700">
                        A relationship
                    </button>
                    <button className="w-full bg-white p-3 rounded-full text-left text-gray-700 border-2 border-orange-300">
                        Something casual
                    </button>
                    <button className="w-full bg-white p-3 rounded-full text-left text-gray-700">
                        I'm not sure yet
                    </button>
                    <button className="w-full bg-white p-3 rounded-full text-left text-gray-700">
                        Prefer not to say
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-white flex justify-between items-center p-4 shadow-lg">
                <p className="text-gray-400 mr-10 text-sm">
                    This will show on your profile unless you're unsure.
                </p>
                <button className="bg-orange-400 text-white p-4 rounded-full text-lg font-bold">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default DatingAppProfileScreen;