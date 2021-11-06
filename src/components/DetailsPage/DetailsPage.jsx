import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function DetailsPage () {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        
        <div>
            <h2>MOVIE DETAILS</h2>
        </div>
        
    )
    
}

export default DetailsPage;