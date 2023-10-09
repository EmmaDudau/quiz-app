import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold text-white cursor-pointer" onClick={toggleNavbar}>
                    Menu
                </div>
                <ul className={`text-white ${isOpen ? 'block' : 'hidden'} md:flex space-x-4 md:space-x-8 pl-4`}>
                    <li className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-200 transition duration-300">Home</a>
                    </li>
                    <li className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-200 transition duration-300">Quizzes</a>
                    </li>
                    <li className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-200 transition duration-300">Leaderboard</a>
                    </li>
                    <li className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-200 transition duration-300">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
