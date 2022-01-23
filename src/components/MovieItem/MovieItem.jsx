import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieItem.css'


function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    // SET_MOVIE 
    const setMovieItem = (movie) => {
        dispatch(
            { type: 'SET_MOVIE_ITEM', payload: movie.id }
        );
        console.log('setMovie', movie.id);
        history.push(`details/${movie.id}`)
    }
 
    return (
        <div className="card">
            <h4>{movie.title}</h4>
            <img
                
                onClick={() => setMovieItem (movie)}
                src={movie.poster}
                alt={movie.title} />
        </div>
    )
}


export default MovieItem;