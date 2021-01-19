import './App.css';
import React, {useState, useEffect} from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import client from "./client.js";
import SingleMovie from "./Components/SingleMovie";
import NavBar from './Components/Navbar'
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import SingleCategories from './Components/SingleCategories'
import './armin.css'



function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    client
      .getEntries({content_type:"movieblog"})
      .then ((json) => {
        console.log(json)
      return  setMovies(json.items)
      })
      .catch (() => console.log ("Upsi"))

  }, [])




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
