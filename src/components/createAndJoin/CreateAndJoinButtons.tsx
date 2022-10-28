import React from 'react';

const CreateAndJoinButtons = () => {
  return (
    <div className="flex justify-center rounded-lg text-lg mb-4" role="group">
      <button className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
        <div>
          <div>New Game</div>
          <div>Host with friend using online ticket</div>
        </div>
      </button>
      <button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-6 py-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        <div>
          <div>Join a game</div>
          <div>Participate using an invite code</div>
        </div>
      </button>
    </div>
  );
};

export { CreateAndJoinButtons };
