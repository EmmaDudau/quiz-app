"use client"

import { useState } from 'react';
import Modal from "@/app/components/Modal";
import Navbar from "@/app/components/Navbar";
import QuizzieDiv from "@/app/components/QuizzieDiv";


export default function DashboardPage() {
    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const topics = [
        'Matematică',
        'Fizică',
        'Chimie',
        'Istorie',
        'Română',
        'Geografie',
        'Logică',
        'Biologie',
        'Economie',
        'Filosofie',
        'Sociologie',
        'Psihologie',
        'Informatică'

        // add more topics as necessary
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
    };




    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center py-1 bg-white min-h-screen">
                <QuizzieDiv/>
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
                        <div className="flex flex-col justify-center items-center rounded overflow-hidden shadow-lg" key={index}>
                            <img className="w-20" src={`/${topic}.png`} alt={topic}/>
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
                    ))}
                </div>
                {modalOpen && (
                    <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
                    </Modal>
                )}
        </div>
    </div>
    );
}
