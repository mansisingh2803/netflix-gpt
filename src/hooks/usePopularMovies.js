import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

    // fetch data from TMDB API and updating store
    const dispatch = useDispatch();
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
        getPopularMovies();
    }, [])
}

export default usePopularMovies;