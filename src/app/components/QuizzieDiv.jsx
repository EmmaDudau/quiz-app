import React, { useEffect } from 'react';

export default function QuizzieDiv() {
    const quizzieLetters = Array.from('QUIZZIE');

    useEffect(() => {
        quizzieLetters.forEach((letter, index) => {
            setTimeout(() => {
                let element = document.getElementById(`${letter}-${index}`);
                if (element) {
                    element.classList.remove('opacity-0');
                    element.classList.add('animate-bounce');
                }
            }, index * 500);
        });
    }, []);

    return (
        <div className="flex justify-center w-1/2 mx-auto space-x-4">
            {quizzieLetters.map((letter, index) => (
                <h1
                    key={index}
                    id={`${letter}-${index}`}
                    className="opacity-0 text-4xl font-bold transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
                >
                    {letter}
                </h1>
            ))}
        </div>
    );
}
