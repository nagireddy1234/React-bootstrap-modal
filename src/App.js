import React from 'react';
import Home from './Components/Home';
import Department from './Components/Department';
import Employee from './Components/Employee';
import Navigation from './Components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div className="container App">
     <h1 className="d-flex m-3 justify-content-center"> Welcome to Employment Portal.</h1>
     
    <Navigation />
     <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Department" component={Department} />
          <Route path="/Employee" component={Employee} />  
        </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
