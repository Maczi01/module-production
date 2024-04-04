import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀🚀🚀 Rick and Morty - Fan Service 🚀🚀🚀</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
