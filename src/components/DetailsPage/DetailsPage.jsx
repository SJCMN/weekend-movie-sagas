import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './DetailsPage.css'


function DetailsPage () {

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies)
    const genres = useSelector(store => store.genres)
    const history = useHistory();
    // Params are set to id when details/:id is added to app route path
    let { id } = useParams();
    console.log('DetailsPage', id);

    // Compare id from params to id's in array from movie store
    let movieDetail = {};
    function findMovieDetail()  {
        // console.log('ID is ', id);
        for (let movie of movies) {
            if (movie.id === Number(id)) {
                movieDetail = movie;
            } 
        } // end of for loop
    }

    findMovieDetail();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_GENRES', payload: id});
    }, []);

    console.log('details page' , movieDetail);

    return (
        <div className="plotContainer">
            <div className="detailCard">
                <h4>MOVIE DETAILS</h4>
                    <img
                        src={movieDetail.poster}
                        alt={movieDetail.title} 
                    />
                <div className="plot">
                    <h2>{movieDetail.title}</h2>
                    <ul>
                        {/* {genres?.map(genre => {
                            return <li key={genre.id}>{genre.name}</li>
                        })} */}
                    </ul>
                    <h5>{movieDetail.description}</h5>
                </div> 
                <div>
                    <button onClick={() => (history.push('/'))}>Back to List</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;