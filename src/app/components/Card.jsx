import React from 'react';

const Card = ({ topic, setModalOpen }) => (
    <div className="flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
        <img className="w-20" src={`/${topic}.png`} alt={topic} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{topic}</div>
            <p className="text-gray-700 text-base">
                {/* Add topic description */}
            </p>
        </div>
        <div className="px-6 py-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setModalOpen(true)}
            >
                Start Quiz
            </button>
        </div>
    </div>
);

export default Card;
