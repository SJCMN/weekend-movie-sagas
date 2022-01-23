import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieSearch () {
    const history = useHistory();
    const dispatch = useDispatch();

    const [ title, setTitle ] = useState('');
    const [ year, setYear ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ genre, setGenre] = useState('');


    const handleClick = (e) => {
        
        e.preventDefault();
        // console.log('clicked it');

        dispatch({
            type: 'SEARCH_OMDB',
            payload: {
                title,
                year,
                description,
                genre
            }
        })

        setTitle('');
        setYear('');
        setDescription('');
        setGenre('');

    }

    console.log(title,year,description,genre);

    return (
        <div>
            <form onSubmit={(e) => handleClick(e)}>
                <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle (e.target.value)}
                placeholder="Movie Title"/>

                {/* <input 
                type="text" 
                value={year} 
                onChange={(e) => setYear (e.target.value)}
                placeholder="Movie Year"/>

                <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription (e.target.value)}
                placeholder="Movie Description"/>

                <input 
                type="text" 
                value={genre} 
                onChange={(e) => setGenre (e.target.value)}
                placeholder="Movie Genre"/> */}

                <button onClick={() => history.push('/add')}>Find Movie</button>
            </form>
        </div>
    );
};

export default MovieSearch;