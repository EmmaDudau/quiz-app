"use client"

import { useState } from 'react';

export default function DashboardPage() {
    const [search, setSearch] = useState('');

    const topics = [
        'Mathematics',
        'Science',
        'History',
        'Literature',
        'Geography',
        // add more topics as necessary
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a subject.."
                className="border mt-1 p-2 rounded-md text-sm w-96"
            />
            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                Search
            </button>

            <h1 className="text-3xl font-bold mt-12">Choose a topic:</h1>

            <div className="grid grid-cols-3 gap-4 w-3/4 mt-6">
                {topics.map((topic, index) => (
                    <div className="rounded overflow-hidden shadow-lg" key={index}>
                        <img className="w-full" src={`/${topic}.png`} alt={topic} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{topic}</div>
                            <p className="text-gray-700 text-base">
                                {/* Add topic description */}
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => router.push(`/${topic}`)}
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// When adding images for your subjects, make sure that the name corresponds to the name of the topic e.g. for Mathematics, the image should be Mathematics.png.
//
// To navigate to the quiz of the chosen subject, replace router.push(/${topic}) with the actual path of the quiz in your application.
//
// Please add the relevant component to your pages directory under the src folder. If you're using Next.js 9.1 or newer versions, it supports the src folder structure by default. For older versions, you may need to update your Next.js configuration.