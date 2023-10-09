import { useState } from 'react';

export default function Modal({ open, handleClose }) {
    return (
        <div>
            {open && (
                <div className="fixed z-50 overflow-auto bg-smoke-dark flex" style={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                    <div className="relative p-6 bg-white w-full max-w-md m-auto flex-col flex rounded-xl shadow-lg">
                        <div className="flex items-center justify-between pb-3">
                            <p className="text-2xl font-bold">Select your study level</p>
                            <button onClick={handleClose} className="cursor-pointer z-50">
                                <svg
                                    className="fill-current text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M18 1.3L16.7 0 9 7.6 1.3 0 0 1.3 7.6 9 0 16.7 .3 18 9 10.4l7.7 7.7 1.3-1.3L10.4 9 18 1.3z"></path>
                                </svg>
                            </button>
                        </div>

                        <div>
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up">Highschool</button>
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up">College</button>
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up">Graduate</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

//You should replace the handlers and state management solution according to your project's needs.
// Remember also to adjust the CSS classes per your project's style guide.