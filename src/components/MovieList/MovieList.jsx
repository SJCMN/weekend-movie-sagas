import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem.jsx'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <div className="container">
                <section className="movies">
                    {movies.map(movie => {
                        return (
                        <MovieItem 
                        key={movie.id}
                        movie={movie}
                        />
                        );
                    })}
                </section>
            </div>
        </main>

    );
}

export default MovieList;