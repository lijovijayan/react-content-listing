import { ActionUtility } from '../../utils'
import { MoviesEffect } from '../effects'

export class MoviesAction {
    static FETCH_MOVIES = 'MoviesAction.FETCH_MOVIES'
    static SEARCH_MOVIES = 'MoviesAction.SEARCH_MOVIES'
    static SET_LOADER = 'MoviesAction.SET_LOADER'

    static fetchMovies(page) {
        return async (dispatch, getState) => {
            const {
                movies: { searchKey }
            } = getState()
            dispatch(ActionUtility.createAction(MoviesAction.SET_LOADER, true))
            MoviesEffect.fetchMovies(page, searchKey)
                .then((data) => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.FETCH_MOVIES,
                            data
                        )
                    )
                })
                .catch((err) => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.FETCH_MOVIES,
                            {},
                            err
                        )
                    )
                })
                .finally(() => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.SET_LOADER,
                            false
                        )
                    )
                })
        }
    }
    static searchMovies(_searchKey) {
        return async (dispatch, getState) => {
            const {
                movies: { searchKey }
            } = getState()
            if (_searchKey === searchKey) return
            dispatch(ActionUtility.createAction(MoviesAction.SET_LOADER, true))
            MoviesEffect.fetchMovies(1, _searchKey)
                .then((data) => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.FETCH_MOVIES,
                            data
                        )
                    )
                })
                .catch((err) => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.FETCH_MOVIES,
                            {},
                            err
                        )
                    )
                })
                .finally(() => {
                    dispatch(
                        ActionUtility.createAction(
                            MoviesAction.SET_LOADER,
                            false
                        )
                    )
                })
        }
    }
}
