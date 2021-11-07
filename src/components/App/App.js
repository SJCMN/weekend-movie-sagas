import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage.jsx'
import MovieSearch from '../MovieSearch/MovieSearch.jsx'
import AddMoviePage from '../AddMoviePage/AddMoviePage.jsx'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
      <Router>      
        <MovieSearch />
        <Route path="/" exact>
          <MovieList />
        </Route >

        <Route path="/details">
          <DetailsPage />
        </Route>

        <Route path="/add">
          <AddMoviePage />
        </Route>
        
      </Router>
    </div>
  );
}


export default App;
