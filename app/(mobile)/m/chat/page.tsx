import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Phone, Video, Send } from 'lucide-react';
import MobileShell from '@/components/ShellTwo';
import { ScrollArea } from '@/components/ui/scroll-area'; // Importing ScrollArea

const Avatar = () => {
    const randomImage = `https://picsum.photos/32/32?random=${Math.floor(Math.random() * 100)}`;
    return (
        <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={randomImage} alt="User avatar" className="w-full h-full object-cover" />
        </div>
    );
};

const Message = ({ content, isOutgoing }) => (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-4 space-x-2`}>
        {!isOutgoing && <Avatar />}
        <div className={`max-w-[70%] rounded-2xl p-3 ${isOutgoing ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}>
            {content}
        </div>
        {isOutgoing && <Avatar />}
    </div>
);

const AudioMessage = ({ isOutgoing }) => (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-4 space-x-2`}>
        {!isOutgoing && <Avatar />}
        <div className={`max-w-[70%] rounded-2xl p-3 ${isOutgoing ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}>
            <div className="flex items-center space-x-2">
                <Button size="icon" variant="ghost">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="w-32 h-2 bg-gray-300 rounded-full">
                    <div className="w-1/2 h-full bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </div>
        {isOutgoing && <Avatar />}
    </div>
);

const EmojiBar = () => (
    <div className="flex justify-between px-4 py-2 bg-gray-100">
        {['❤️', '😂', '🧸', '🎮', '😍', '🦉', '🤣'].map((emoji, index) => (
            <span key={index} className="text-2xl">{emoji}</span>
        ))}
    </div>
);

const MessagesPage = () => {
    return (
        <>
            <Card className="flex-grow">
                <CardHeader className="flex justify-between items-center bg-white">
                    <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <h2 className="text-xl font-semibold">Eleanor Pena</h2>
                    </div>
                    <div className="flex space-x-2">
                        <Button size="icon" variant="ghost">
                            <Phone className="h-6 w-6" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Video className="h-6 w-6" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <ScrollArea className="flex-grow overflow-auto"> {/* Using ScrollArea for scrolling */}
                        <div className="flex flex-col">
                            <Message
                                content="lets do this its been way to long since we were all together!"
                                isOutgoing={true}
                            />
                            <Message
                                content={<img src="https://picsum.photos/200/150" alt="Animated character" className="rounded-lg" />}
                                isOutgoing={true}
                            />
                            <Message
                                content="YES! I got the day off! Say when and where?"
                                isOutgoing={false}
                            />
                            <AudioMessage
                                isOutgoing={true}
                            />
                            <Message
                                content="Yeah, but John, if The Pirates of the Caribbean breaks down"
                                isOutgoing={false}
                            />
                            <Message
                                content="lets do this its been way to long since we were all together!"
                                isOutgoing={true}
                            />
                            <Message
                                content={<img src="https://picsum.photos/200/150" alt="Animated character" className="rounded-lg" />}
                                isOutgoing={true}
                            />
                            <Message
                                content="YES! I got the day off! Say when and where?"
                                isOutgoing={false}
                            />
                            <AudioMessage
                                isOutgoing={true}
                            />
                            <Message
                                content="Yeah, but John, if The Pirates of the Caribbean breaks down"
                                isOutgoing={false}
                            />
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

        </>
    );
};

const MessagepageWithShell = () => {
    return (
        <MobileShell scrolling={true} footerContent={
            <div className="flex flex-col w-full gap-2">
                <EmojiBar />
                <div className="w-full bg-white flex items-center space-x-2">
                    <Input placeholder="Message..." className="flex-grow" />
                    <Button size="icon">
                        <Send className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        }>
            <MessagesPage />
        </MobileShell>
    );
};
export default MessagepageWithShell;