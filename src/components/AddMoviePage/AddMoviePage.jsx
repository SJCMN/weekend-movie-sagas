
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMoviePage () {

    const dispatch = useDispatch();
    const history = useHistory();
    const omdbSearch = useSelector(store => store.omdbSearch)

    const savedMovie = {
        title: omdbSearch.Title,
        poster: omdbSearch.Poster,
        description: omdbSearch.Plot,
        genre_id: 1
    }

    const saveMovie = () => {
        dispatch(
            {type: 'SAVE_MOVIE', payload: savedMovie}
        )
        history.push('/')
    }    


    return(
        <div className="plotContainer">
             <div className="detailCard">
                <h2>MOVIE DETAILS</h2>
                    <img
                    // onClick={handleClick}
                    src={omdbSearch.Poster}
                    alt={omdbSearch.title} 
                    />
                <h3>{omdbSearch.Title}</h3>
                <h4>{omdbSearch.Plot}</h4>
               
                <div>
                    <button onClick={() => saveMovie()}>Save Movie</button>
                    <button onClick={() => history.push('/')}>Back to List</button>
                </div>
            </div>
        </div>
    );
};
export default AddMoviePage;