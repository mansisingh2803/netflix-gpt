import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const MovieList = ({ title, movies }) => {
    console.log(movies);
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -500, // Adjust based on card width
            behavior: 'smooth',
        });
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 500, // Adjust based on card width
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-3 z-10 shadow-lg hover:bg-red-300"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {/* Movie Cards */}



            <div className='p-6 '>

                <h1 className='text-3xl font-bold  py-6 text-white'>{title}</h1>
                <div
                    ref={sliderRef}
                    className="flex space-x-4 overflow-hidden scroll-smooth scrollbar-hide"
                >

                    <div className='flex'>
                        {movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))}

                    </div>

                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-3 z-10 shadow-lg hover:bg-red-300"
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>
        </div>
    )
}

export default MovieList