import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();
    const movieId = useSelector(store => store.movieId)
    const movieDetail = useSelector(store => store.movieDetail)
    const history = useHistory();

    // const handleClick = () => {
    //     history.push('/');
    // }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES'});
    }, []);

    console.log('details page' ,movieId , movieDetail);

    return (

        <div>
            <h2>MOVIE DETAILS</h2>
            <h3>{movieDetail.title}</h3>
            <img
                // onClick={handleClick}
                src={movieDetail.poster}
                alt={movieDetail.title} />
        </div>
        
    )
    
}

export default DetailsPage;