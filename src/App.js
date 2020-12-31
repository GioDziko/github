import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';


  const App=()=> {

      return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => (<Home {...props} />)}/>
          <Route  path='/:username/' render={(props) => (<Home {...props}  />)}/>
        </Switch>
      </Router>
    );
  }

export default  App
