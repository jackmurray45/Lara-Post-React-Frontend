import React from 'react';
import Posts from './components/Posts';
import Profiles from './components/Profiles';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import'./index.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/posts" component = {Posts}/>
            <Route path = "/profiles" component = {Profiles}/>
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
