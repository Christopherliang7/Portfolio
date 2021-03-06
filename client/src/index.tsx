import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/nav";
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <div className='main-frames'>
          <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/contact' exact component={Contact}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));