import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'; // Adjust the import path as necessary
import MobileShell from '@/components/ShellTwo';

const BackButton = () => (
    <button className="absolute top-4 left-4 text-white">
        <ChevronLeft size={24} />
    </button>
);

const ImageHeader = ({ name, age }) => (
    <div className="relative h-64 bg-blue-200">
        <img src="https://picsum.photos/400/320" alt="Profile" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4">
            <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-xl font-bold">
                {name}, {age}
            </div>
        </div>
    </div>
);

const About = ({ text }) => (
    <div className="p-4">
        <h2 className="text-sm font-semibold mb-2 text-gray-500">About</h2>
        <p className="text-gray-400 text-sm">{text}</p>
    </div>
);

const PictureCarousel = ({ images }) => (
    <Carousel>
        <CarouselContent className="ml-2 mr-4 h-40">
            {images.map((src, index) => (
                <CarouselItem key={index} className="basis-2/5 pl-2"> {/* Adjusted width to show multiple items */}
                    <img src={src} alt={`Picture ${index + 1}`} className="w-full h-full object-cover rounded-lg" /> {/* Changed h-32 to h-full for full height */}
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
);

const InterestItem = ({ icon, label }) => (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
            {icon}
        </div>
        <span className="text-xs">{label}</span>
    </div>
);

const Interests = ({ interests }) => (
    <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Interests</h2>
        <div className="grid grid-cols-3 gap-4">
            {interests.map((interest, index) => (
                <InterestItem key={index} icon={interest.icon} label={interest.label} />
            ))}
        </div>
    </div>
);

const DatingProfile = () => {
    const interests = [
        { icon: '🎳', label: 'Bowling' },
        { icon: '🎉', label: 'Party' },
        { icon: '⚽', label: 'Football' },
        { icon: '8️⃣', label: '8-ball' },
        { icon: '🐱', label: 'Cat' },
        { icon: '🎮', label: 'Gaming' },
    ];

    return (
        <MobileShell scrolling>
            <div className="relative">
                <BackButton />
                <ImageHeader name="Hailey" age={21} />
            </div>
            <About text="My name is Madeline and I enjoy meeting new people and finding ways to help them have an uplifting..." />
            <PictureCarousel
                images={[
                    "https://picsum.photos/130/130?random=1",
                    "https://picsum.photos/130/130?random=2",
                    "https://picsum.photos/130/130?random=3",
                    "https://picsum.photos/130/130?random=4",
                    "https://picsum.photos/130/130?random=5",
                    "https://picsum.photos/130/130?random=6",
                ]}
            />
            <Interests interests={interests} />
        </MobileShell>
    );
};

export default DatingProfile;