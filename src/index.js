import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// SAGAS //
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE', fetchMovie)
    // yield takeEvery('SET_DETAILS', fetchMovieDetails)
}


// GET all movies from the DB
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

// GET single movie details from DB
function* fetchMovie(action) {
    try {
        let id = action.payload
        const singleMovie = yield axios.get(`/api/movie/${id}`)
        console.log('fetchMovie:', action);
        yield put({ type: 'SET_DETAILS', payload: singleMovie.data})
    } catch (error) {
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//// REDUCERS ////
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Uses movie id to request row from DB
// const movieId = (state = '', action) => {
//     switch (action.type) {
//         case 'SET_MOVIE':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Uses movie id to request row from DB
const movieDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can access data added by each reducer
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetail
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
