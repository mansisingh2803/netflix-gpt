import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopratedMovies } from '../utils/moviesSlice';


const useTopratedMovies = () => {

    // fetch data from TMDB API and updating store
    const dispatch = useDispatch();
    const getTopratedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);

        dispatch(addTopratedMovies(json.results));
    };

    useEffect(() => {
        getTopratedMovies();
    }, [])
}

export default useTopratedMovies;