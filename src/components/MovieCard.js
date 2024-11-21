import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (

        <div className='w-60 mx-2 h-fit rounded-2xl overflow-hidden cursor-pointer relative group'>
            <img
                alt='Movie Card'
                src={IMG_CDN + posterPath}
                className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70'
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>


    )
}

export default MovieCard