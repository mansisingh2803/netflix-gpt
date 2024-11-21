import React from 'react'
import GptSearchBar from './GptSearchBars'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img
                    className='h-screen w-screen object-cover'
                    src={BG_URL}
                    alt="bg" />
            </div>
            <div className=''>

                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    )
}

export default GptSearch