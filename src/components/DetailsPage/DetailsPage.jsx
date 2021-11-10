import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies)
    const history = useHistory();
    let { id } = useParams();
    console.log('DetailsPage', id);

    // const movieDetail = {}

    // const findMovieDetail = ( movies, id ) => {
    //     for (let movie of movies){
    //         if(movie.id === Number(id)) {
    //             movieDetail = movie;
    //             return movieDetail
    //         }
    //     }
    // }

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



    


    const handleClick = () => {
        history.push('/');
    }

    useEffect(() => {
      
        // dispatch({ type: 'FETCH_MOVIE_GENRES', payload: movieItem.id});
    }, []);

    console.log('details page' , movieDetail);

    return (
        <div>
            <div>
                <h2>MOVIE DETAILS</h2>
                <h3>{movieDetail.title}</h3>
                <h4>{movieDetail.description}</h4>
                <img
                    src={movieDetail.poster}
                    alt={movieDetail.title} />
                <ul>
                    {movieDetail.genres?.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>
                    })}
                </ul>
                
            </div>
            <div>
                <button onClick={handleClick}>BACK to List</button>
            </div>
        </div>
        
    )
    
}

export default DetailsPage;