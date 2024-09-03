import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProgressBar from '@/components/ProgressBar';

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


function MobileShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-orange-100 h-screen w-full max-w-lg mx-auto font-sans">
            <StatusBar />

            {/* Main content */}
            {children}

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
}

export default MobileShell;