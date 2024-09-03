'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rnd } from 'react-rnd'; // Import Rnd component
import { Trash2 } from 'lucide-react'; // Import Trash2 icon from lucide-react

interface IframeContainerProps {
    url: string; // Changed from initialUrl to url
    id: number;
    label: string; // Added label prop
    initialWidth: number; // Added initialWidth prop
    initialHeight: number; // Added initialHeight prop
    initialX: number; // Added initialX prop
    initialY: number; // Added initialY prop
    onDelete: (id: number) => void; // Added onDelete prop
    onUrlChange: (id: number, url: string) => void; // Added onUrlChange prop
}

const IframeContainer = ({ url, id, label, initialWidth, initialHeight, initialX, initialY, onDelete, onUrlChange }: IframeContainerProps) => {
    const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrl = e.target.value;
        onUrlChange(id, newUrl); // Notify parent of URL change
    };

    return (
        <Rnd
            default={{
                x: initialX,
                y: initialY,
                width: size.width,
                height: size.height,
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
            }}
            enableUserSelectHack={false} // Prevent dragging when selecting text
            style={{
                border: '1px solid red',
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px', // Added padding for more space
            }}
            className="rounded-lg bg-white/30"
        >
            <div className="drag-handle" style={{ width: '20px', height: '20px', backgroundColor: 'blue', cursor: 'move', marginBottom: '5px' }} />
            <div style={{ marginBottom: '5px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {label}
                <button onClick={() => onDelete(id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Trash2 color="red" />
                </button>
            </div>
            <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                style={{ width: '100%', marginBottom: '5px' }}
                className="rounded-lg bg-white/30 p-2 px-4"
            />
            <iframe
                className="h-full"
                src={url}
                style={{ width: '100%', height: '100%' }}
                title="Iframe"
            />
            <div style={{ marginTop: '5px', fontSize: '12px', color: 'gray' }}>
                Current Size: {size.width}px x {size.height}px
            </div>
        </Rnd>
    );
};

import selectedDevices from './devices';

const DraggableIframes = () => {
    const [iframes, setIframes] = useState(
        selectedDevices.map((device, index) => ({
            id: device.id,
            url: `https://example.com`, // Changed from initialUrl to url
            label: device.label,
            initialWidth: device.width,
            initialHeight: device.height,
            initialX: index * 420, // Adjust spacing as needed
            initialY: 50
        }))
    );

    const [masterUrl, setMasterUrl] = useState('https://example.com');

    const addIframe = () => {
        setIframes([...iframes, { id: iframes.length + 1, url: `https://example${iframes.length + 1}.com`, label: `Iframe ${iframes.length + 1}`, initialWidth: 400, initialHeight: 600, initialX: 0, initialY: 0 }]);
    };

    const deleteIframe = (id: number) => {
        setIframes(iframes.filter(iframe => iframe.id !== id));
    };

    const handleMasterUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrl = e.target.value;
        setMasterUrl(newUrl);
        setIframes(iframes.map(iframe => ({ ...iframe, url: newUrl }))); // Update all iframes' URLs
    };

    return (
        <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <input
                    type="text"
                    value={masterUrl}
                    onChange={handleMasterUrlChange}
                    style={{ marginBottom: '10px', padding: '5px' }}
                    placeholder="Master URL"
                />
            </div>
            <Button onClick={addIframe}>Add Iframe</Button>
            {iframes.map((iframe) => (
                <IframeContainer 
                    key={iframe.id} 
                    url={iframe.url} // Changed from initialUrl to url
                    id={iframe.id} 
                    label={iframe.label} 
                    initialWidth={iframe.initialWidth} 
                    initialHeight={iframe.initialHeight} 
                    initialX={iframe.initialX} 
                    initialY={iframe.initialY} 
                    onDelete={deleteIframe} // Pass delete function
                    onUrlChange={(id, url) => {
                        setIframes(iframes.map(iframe => iframe.id === id ? { ...iframe, url } : iframe)); // Update individual iframe URL
                    }} 
                />
            ))}
        </div>
    );
};

const Page = () => {
    return (
        <div className="h-screen p-4 overflow-hidden bg-gradient-to-r from-blue-200 to-green-200">
            <h1 className="text-3xl font-bold mb-2">Dev - Responsive Iframe</h1>
            <DraggableIframes />
        </div>
    );
};

export default Page;
