import React from 'react';
import MobileShell from '@/components/ShellTwo';
import ProgressBar from '@/components/ProgressBar';
import { ChevronRight } from 'lucide-react';


const DatingAppProfileScreen = () => {
    return (
        <MobileShell className="bg-orange-100 p-6">
            <ProgressBar progress={2} total={3} />
            <div className="mt-4"></div>
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

            <div className="absolute bottom-0 left-0 right-0 bg-white flex justify-between items-center p-4 shadow-lg">
                <p className="text-gray-400 mr-10 text-sm">
                    This will show on your profile unless you're unsure.
                </p>
                <button className="bg-orange-400 text-white p-4 rounded-full text-lg font-bold">
                    <ChevronRight size={24} />
                </button>
            </div>
        </MobileShell >
    );
};

export default DatingAppProfileScreen;