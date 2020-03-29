import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/DashBoard';
import Episode from './components/rickmorty/Episode';
import Location from './components/rickmorty/Location';
import Character from './components/rickmorty/Character';
import SearchBar from './components/rickmorty/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/episode/:episodeIndex" component={Episode}/>
            <Route exact path="/character/:characterIndex" component={Character}/>
            <Route exact path="/location/:locationIndex" component={Location}/>
            <Route exact path="/search/:searchValue" component={SearchBar}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
