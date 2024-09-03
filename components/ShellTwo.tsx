import { Settings } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const MobileShell = ({ children, scrolling = true, header = true, footer = true, footerContent, appName, className }: { children: React.ReactNode, scrolling?: boolean, header?: boolean, footer?: boolean, footerContent?: React.ReactNode, appName?: string, className?: string }) => {

    return (
        <div className={`flex flex-col h-screen`}>
            {header &&
                <header className="flex items-center justify-between p-4 bg-white shadow-md">
                    <h1 className="text-xl font-bold">{appName || "My App"}</h1>
                    <Settings className="w-6 h-6 cursor-pointer" />
                </header>
            }
            {scrolling ?
                <ScrollArea className={`flex-grow overflow-auto relative ${className}`}>
                    {children}
                </ScrollArea>
                :
                <main className={`flex-grow overflow-hidden relative ${className}`}>
                    {children}
                </main>
            }
            {footer &&
                <footer className="flex items-center justify-center p-4 bg-white shadow-md">
                    {footerContent || <p className="text-sm">Bottom App Bar</p>}
                </footer>
            }
        </div>
    );
};

export default MobileShell;
