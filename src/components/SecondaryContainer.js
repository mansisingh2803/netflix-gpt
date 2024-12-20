import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black ">
                <div className='mt-0 md:-mt-44 pl-12 relative z-20'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Top rated"} movies={movies.topratedMovies} />
                    <MovieList title={"Upcoming Videos"} movies={movies.upcomingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                </div>
                {/* 
        
        MovieList 
            -Popular
            - Now Playing
            - Trending
            - Horror

        
        
        */}





            </div>)
    )
}

export default SecondaryContainer