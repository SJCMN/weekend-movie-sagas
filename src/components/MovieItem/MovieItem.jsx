import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ id, setMovieId] = useState('');

    // handleFetch set to trigger onMouseEnter to 'prime' the state pump before click pushes to details page
    const handleFetch = () => {
        dispatch(
            { type: 'FETCH_MOVIE', payload: movie.id }
        );
        console.log('Movie Item', movie.id);
    }

    // handleClick moved to secondary event so state has a milisecond to update before rendering /details
    const handleClick = () => {
        history.push('/details')
    }


 


    return (
        <div value={id} >
            <h4>{movie.title}</h4>
            <img
                onMouseEnter={handleFetch}
                onClick={handleClick}
                src={movie.poster}
                alt={movie.title} />
        </div>
    )
}


export default MovieItem;