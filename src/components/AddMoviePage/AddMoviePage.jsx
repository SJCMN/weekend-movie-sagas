import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMoviePage () {
    const history = useHistory();

    return(
        <div>

        <button onClick={() => history.push('/')}>Back to List</button>
        </div>
    );
};
export default AddMoviePage;