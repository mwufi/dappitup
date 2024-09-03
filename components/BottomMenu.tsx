import React from 'react';

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around">
      <button className="flex flex-col items-center">
        <span role="img" aria-label="Home">🏠</span>
        <span>Home</span>
      </button>
      <button className="flex flex-col items-center">
        <span role="img" aria-label="Events">🎉</span>
        <span>Events</span>
      </button>
      <button className="flex flex-col items-center">
        <span role="img" aria-label="Notifications">🔔</span>
        <span>Notifications</span>
      </button>
      <button className="flex flex-col items-center">
        <span role="img" aria-label="Profile">👤</span>
        <span>Profile</span>
      </button>
    </div>
  );
};

export default BottomMenu;