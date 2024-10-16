import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 w-1/4 text-lg '>{overview}</p>
            <div className='' >
                <button className='bg-white px-8 text-black text-xl p-2 hover:bg-opacity-80 rounded-lg'>
                    ▶️ Play
                </button>
                <button className='mx-2 bg-gray-300 px-8 text-white text-xl p-2 bg-opacity-60 rounded-lg'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle