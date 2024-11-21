import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

    // fetch data from TMDB API and updating store
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);

        dispatch(addNowPopularMovies(json.results));
    };

    useEffect(() => {

        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;