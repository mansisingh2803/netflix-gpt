import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies: (state, action) => {
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
    },
});
export const { addNowPlayingMovies, addTrailerVideo, addNowPopularMovies, addTopratedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;