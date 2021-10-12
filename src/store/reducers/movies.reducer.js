import { MoviesAction } from "../actions";
const initalState = {
    page: 0,
    pageSize: 20,
    totalRecords: 0,
    movies: [],
    loading: false,
    searchKey: ''
}

export default function movies(state = initalState, action) {
    switch (action.type) {
        case MoviesAction.FETCH_MOVIES:
            let _movies = state.movies;
            if (action.payload.movies && action.payload.page > 1) {
                _movies = [ ..._movies, ...action.payload.movies ]
            } else {
                _movies = action.payload.movies || []
            }
            return {
                ...state,
                ...action.payload,
                movies: _movies
            }
        case MoviesAction.SET_LOADER:
            return {
                ...state,
                loading: action.payload,
            }
        default: return state;
    }
}
