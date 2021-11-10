import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies)
    const history = useHistory();
    let { id } = useParams();
    console.log('DetailsPage', id);
    


    const handleClick = () => {
        history.push('/');
    }

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIE_GENRES', payload: movieItem.id});
    // }, []);

    // console.log('details page' , movieItem);

    return (
        <div>
            {/* <div>
                <h2>MOVIE DETAILS</h2>
                <p>${JSON.stringify.movieItem}</p>
                <h3>{movieItem.title}</h3>
                <h4>{movieItem.description}</h4>
                <img
                    src={movieItem.poster}
                    alt={movieItem.title} />
                <ul>
                    {movieItem.genres?.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>
                    })}
                </ul>
                
            </div>
            <div>
                <button onClick={handleClick}>BACK to List</button>
            </div> */}
        </div>
        
    )
    
}

export default DetailsPage;