export default function MobileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-lg mx-auto">
            {children}
        </div>
    );
}