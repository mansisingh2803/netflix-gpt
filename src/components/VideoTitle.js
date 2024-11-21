import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[30%] 
                        px-6  absolute 
                        text-white bg-gradient-to-r
                        from-black'>
            <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 w-2/4 text-lg '>{overview}</p>
            <div className='flex'>
                <button className='bg-white px-8 py-3 justify-between items-center item-center flex text-black text-xl hover:bg-opacity-80 rounded-lg'>
                    <FontAwesomeIcon className='px-2' icon={faPlay} size="lg" />
                    Play
                </button>
                <button className='mx-2 bg-transparent border border-white-500 px-8 text-white text-xl py-3  rounded-lg hover:bg-slate-400 hover:bg-opacity-10'>
                    <FontAwesomeIcon className='px-2' icon={faInfoCircle} size="lg" />
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle