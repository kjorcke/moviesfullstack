import './App.css';
import React, {useState, useEffect} from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SingleMovie from "./Components/SingleMovie";
import NavBar from './Components/Navbar'
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import SingleCategories from './Components/SingleCategories'
import './armin.css'


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadMovies = (searchQuery) => {
    const url = 'http://localhost:5000/movies';
    setIsLoading(true);
    setError(false);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Oh noo");
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => setError(true));
  };

  useEffect(loadMovies, []);

console.log(movies)


  return (
  <div className="App">
       <Router>
       <NavBar /> 
       <div className="main-wrapper">
          <Switch>
            <Route exact path="/" component={Homepage} movies={movies}/>
            <Route exact path="/categories"> 
              <Categories movies={movies} />
            </Route>
            <Route path="/singlemovie/:id"> 
              <SingleMovie movies={movies} />
            </Route>
            <Route path="/singlecategories/:person">
              <SingleCategories movies={movies}/>
            </Route> 
          </Switch>  
      </div>
  </Router>
  </div>
  );
}


export default App;