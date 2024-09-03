import { Settings } from 'lucide-react';

const MobileShell = ({ children, header = true, footer = true, appName, className }: { children: React.ReactNode, header?: boolean, footer?: boolean, appName?: string, className?: string }) => {

    return (
        <div className={`flex flex-col h-screen`}>
            {header &&
                <header className="flex items-center justify-between p-4 bg-white shadow-md">
                    <h1 className="text-xl font-bold">{appName || "My App"}</h1>
                    <Settings className="w-6 h-6 cursor-pointer" />
                </header>
            }
            <main className={`flex-grow overflow-hidden relative ${className}`}>
                {children}
            </main>
            {footer &&
                <footer className="flex items-center justify-center p-4 bg-white shadow-md">
                    <p className="text-sm">Bottom App Bar</p>
                </footer>
            }
        </div>
    );
};

export default MobileShell;
