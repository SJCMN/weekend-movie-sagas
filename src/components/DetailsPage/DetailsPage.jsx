import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();

    const movieDetail = useSelector(store => store.movieDetail)
    const history = useHistory();


    const handleClick = () => {
        history.push('/');
    }

    // useEffect(() => {
    //     dispatch({ type: 'SET_DETAILS'});
    // }, []);

    console.log('details page' , movieDetail);

    return (
        <div>
            <div>
                <h2>MOVIE DETAILS</h2>
                <h3>{movieDetail[0].title}</h3>
                <h4>{movieDetail[0].description}</h4>
                <img
                    // onClick={handleClick}
                    src={movieDetail[0].poster}
                    alt={movieDetail[0].title} />
                
            </div>
            <div>
                <button onClick={handleClick}>BACK to List</button>
            </div>
        </div>
        
    )
    
}

export default DetailsPage;