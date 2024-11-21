import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieSlider = ({ posterPath }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300, // Adjust based on card width
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300, // Adjust based on card width
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 z-10 shadow-lg hover:bg-gray-600"
            >
                ◀
            </button>

            {/* Movie Cards */}
            <div
                ref={sliderRef}
                className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {posterPath.map((movie, index) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 z-10 shadow-lg hover:bg-gray-600"
            >
                ▶
            </button>
        </div>
    );
};

export default MovieSlider;
