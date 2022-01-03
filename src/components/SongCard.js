import React from 'react';

export default function SongCard() {

    return (
        <div className='w-40 p-4 bg-gray-50 rounded'>
            <div className='w-32'>
                <div className='cursor-pointer'>
                    <img className='h-32 rounded-md bg-black shadow-lg hover:opacity-50 transition-opacity duration-500 ease-out'
                        src='https://source.unsplash.com/user/c_v_r'
                        alt="img"
                    />
                </div>
                <div>
                    <h1 className="font-sm font-bold text-clip mt-1">Song Name</h1>
                </div>
                <div>
                    <h1 className="font-xs w-full h-12 overflow-hidden text-gray-500">lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</h1>
                </div>

            </div>
        </div>
    )
}