import { useState } from 'react';

export default function Modal({ open, handleClose }) {
    return (
        <div>
            {open && (
                <div className="fixed z-50 overflow-auto flex"
                     style={{ top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="relative p-6 bg-white w-full max-w-md m-auto flex-col flex rounded-xl shadow-lg">
                        <div className="flex items-center justify-between pb-3">
                            <p className="text-2xl font-bold mt-2">Alege-ți categoria</p>
                            <button onClick={handleClose} className="cursor-pointer z-50">
                                x
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up mr-4 ">M1</button>
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up mr-4 ">M2</button>
                            <button className="py-2 px-4 bg-blue-600 text-white rounded-up">M3</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
