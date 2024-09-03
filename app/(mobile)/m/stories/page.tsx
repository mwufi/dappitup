'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, User } from 'lucide-react';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';
import MobileShell from '@/components/ShellTwo';

const UserInfo = ({ avatar, name, time }) => (
    <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            {avatar ? (
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
                <User className="w-full h-full p-1 text-gray-600" />
            )}
        </div>
        <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-gray-300">{time}</p>
        </div>
    </div>
);

const ActionButton = ({ Icon, label }) => (
    <button className="flex flex-col items-center">
        <Icon className="w-6 h-6 text-white" />
        <span className="text-xs text-white mt-1">{label}</span>
    </button>
);

const StoriesComponent = () => {
    const stories = [
        'https://picsum.photos/700/1200?random=1',
        'https://picsum.photos/700/1200?random=2',
        'https://picsum.photos/700/1200?random=3',
    ];
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(stories[currentStoryIndex]);

    const handleImageChange = () => {
        console.log('clicked');
        setCurrentStoryIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % stories.length;
            setImageSrc(stories[nextIndex]);
            return nextIndex;
        });
    };

    return (
        <MobileShell appName="Stories" className="bg-white p-2">
            <div className="relative w-full h-full bg-white p-0 flex rounded-2xl overflow-hidden" onClick={handleImageChange}>
                {/* Main image */}
                <Image
                    src={imageSrc}
                    alt="Story content"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />

                {/* User info */}
                <div className="absolute top-12 left-4 z-10 w-full">
                    <UserInfo avatar={"https://avatars.githubusercontent.com/u/30219253?v=4&size=64"} name="Anna" time="12h ago" />
                </div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-600 to-transparent" />

                <div className="absolute w-full top-0 p-4">
                    <ProgressBar progress={currentStoryIndex} total={stories.length} />
                </div>
                {/* Action buttons */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex-grow">
                            <input
                                type="text"
                                placeholder="Send Message..."
                                className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-white placeholder-gray-300 focus:outline-none"
                            />
                        </div>
                        <div className="flex space-x-4 ml-4">
                            <ActionButton Icon={Heart} label="Like" />
                            <ActionButton Icon={MessageCircle} label="Comment" />
                            <ActionButton Icon={Share2} label="Share" />
                        </div>
                    </div>
                </div>
            </div>

        </MobileShell>
    );
};

export default StoriesComponent;