import React, { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Card, AppBar } from "../../components";
import { MoviesAction } from "../../store/actions";
import '../../styles/home.styles.scss'

export function Movies() {
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const { movies, page, pageSize, totalRecords, searchKey } = useSelector(state => state.movies)
    const haveNextPage = useMemo(() => page * pageSize < totalRecords, [page, pageSize, totalRecords]);

    useEffect(() => {
        dispatch(MoviesAction.fetchMovies(1))
    }, [dispatch])

    useEffect(() => {
        if (scrollRef.current.scrollHeight <= scrollRef.current.clientHeight && searchKey?.length > 0 && haveNextPage) {
            dispatch(MoviesAction.fetchMovies(+page + 1))
        }
    }, [dispatch, haveNextPage, movies, page, searchKey])

    function onScroll() {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 250 && haveNextPage) {
                dispatch(MoviesAction.fetchMovies(+page + 1))
            }
        }
    }

    function onSearch(searchKey) {
        dispatch(MoviesAction.searchMovies(searchKey))
    }

    function renderList() {
        if (movies.length > 0) {
            return (
                <div
                    className="grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 xl:gap-x-6 lg:gap-x-5 md:gap-x-4 gap-x-3">
                    {movies.map(movie =>
                        <Card imageURL={`${process.env.PUBLIC_URL}/images/${movie['poster-image']}`} name={movie.name} />
                    )}
                </div>
            )
        } else {
            return (
                <div className="flex items-center justify-center h-full w-full">
                    <span>No Results found !</span>
                </div>
            )
        }
    }

    return <>
        <AppBar onChange={onSearch} title={'Romantic Comedy'} />
        <div ref={scrollRef} className="home-container xl:px-12 lg:px-9 md:px-6 px-3"
            onScroll={() => onScroll()}>
            {renderList()}
        </div >
    </>
}
