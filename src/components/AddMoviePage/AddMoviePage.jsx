import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMoviePage () {
    const history = useHistory();
    const omdbSearch = useSelector(store => store.omdbSearch)

    return(
        <div>
             <div>
                <h2>MOVIE DETAILS</h2>
                <h3>{omdbSearch.Title}</h3>
                <h4>{omdbSearch.Plot}</h4>
                <img
                    // onClick={handleClick}
                    src={omdbSearch.Poster}
                    alt={omdbSearch.title} />
                
            </div>

        <button onClick={() => history.push('/')}>Back to List</button>
        </div>
    );
};
export default AddMoviePage;