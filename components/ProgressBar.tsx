
interface ProgressBarProps {
    progress: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
    const segments = Array.from({ length: total }, (_, index) => index <= progress);

    return (
        <div className="flex bg-white p-1 gap-1 rounded-full">
            {segments.map((isActive, index) => (
                <div
                    key={index}
                    className={`h-1 rounded-full opacity-70 ${isActive ? 'bg-orange-400' : 'bg-gray-200'} flex-grow`}
                ></div>
            ))}
        </div>
    );
};
export default ProgressBar;