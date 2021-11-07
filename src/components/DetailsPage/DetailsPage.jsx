import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();

    const movieDetail = useSelector(store => store.movieDetail[0])
    const history = useHistory();


    const handleClick = () => {
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, []);

    console.log('details page' , movieDetail);

    return (

        <div>
            <h2 onClick={handleClick}>MOVIE DETAILS</h2>
            <h3>{movieDetail.title}</h3>
            <h4>{movieDetail.description}</h4>
            <img
                // onClick={handleClick}
                src={movieDetail.poster}
                alt={movieDetail.title} />
        </div>
        
    )
    
}

export default DetailsPage;