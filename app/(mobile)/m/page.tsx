'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';

const MobileShell = () => {
    const [appName] = useState("My App");

    return (
        <div className="flex flex-col h-screen">
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <h1 className="text-xl font-bold">{appName}</h1>
                <Settings className="w-6 h-6 cursor-pointer" />
            </header>
            <main className="flex-grow overflow-y-auto">
                <img
                    src="https://picsum.photos/seed/picsum/800/600"
                    alt="Full Page"
                    className="w-full h-64 object-cover"
                />
                <div className="p-4">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="mb-4">Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et viverra elit tristique in.</p>
                    <p className="mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-4">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
                    <p className="mb-4">Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
                    <p className="mb-4">Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
                    <p className="mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui.</p>
                    <p className="mb-4">Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing.</p>
                </div>
            </main>
            <footer className="flex items-center justify-center p-4 bg-white shadow-md">
                <p className="text-sm">Bottom App Bar</p>
            </footer>
        </div>
    );
};

export default MobileShell;
