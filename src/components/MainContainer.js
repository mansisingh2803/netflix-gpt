import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    if (movies === null) return; //early return
    const mainMovie = movies[0];
    // console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;
    return (
        <div className='md:p-0 pt-[30%] bg-black'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id} />
        </div>
    )
}

export default MainContainer