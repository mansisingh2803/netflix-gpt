import React, { useRef } from "react";
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/Gemini";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieresult } from '../utils/gptSlice';

function GptSearchBar() {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store?.config?.lang);
    const searchText = useRef(null);

    //search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json.results);
        return json.results;
    };

    const handleSearchClick = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt =
            "Act like a movie recommendation system and give me some movie names in: " +
            searchText.current.value +
            " give me only 5 movies name seperated with commas example: [a, b]";
        const result = await model.generateContent(prompt);
        const response = await result.response.text().split(", ");
        //console.log(response);
        //for each movie we will search in TMDB API (5 Promises will return)
        const promiseArray = response.map((movie) => searchMovieTMDB(movie));
        // console.log(promiseArray);
        const tmdb_results = await Promise.all(promiseArray);
        console.log(tmdb_results);
        dispatch(addGptMovieresult({ movieNames: response, movieResults: tmdb_results }));

    };

    return (
        <div className='pt-[35%] md:pt-[10%] justify-center  flex'>
            <form className='w-full md:w-1/2 grid grid-cols-12 bg-black' onSubmit={(e) => e.preventDefault()}>
                <input type='text' ref={searchText}
                    className='p-2 m-3 col-span-9'
                    placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='py-2 px-4 m-3 col-span-3 bg-red-700 text-white rounded-lg ' onClick={handleSearchClick} >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;
