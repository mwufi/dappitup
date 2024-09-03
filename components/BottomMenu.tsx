import React from 'react';
import Link from 'next/link';

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around">
      <Link href="/" className="flex flex-col items-center">
        <span role="img" aria-label="Home">🏠</span>
        <span>Home</span>
      </Link>
      <Link href="/events" className="flex flex-col items-center">
        <span role="img" aria-label="Events">🎉</span>
        <span>Events</span>
      </Link>
      <Link href="/notifications" className="flex flex-col items-center">
        <span role="img" aria-label="Notifications">🔔</span>
        <span>Notifications</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <span role="img" aria-label="Profile">👤</span>
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomMenu;