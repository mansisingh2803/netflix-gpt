import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    return (
        movies.nowPlayingMovies && (
            <div className="  bg-black">
                <div className='-mt-52 pl-12 relative z-20'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Top rated"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Upcoming Videos"} movies={movies.nowPlayingMovies} />
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