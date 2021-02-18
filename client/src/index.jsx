import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/nav.jsx';
import { About } from './components/about.jsx';
import { Projects } from './components/projects.jsx';
// import { Photography } from './components/photography.jsx';
import { Contact } from './components/contact.jsx'
import { Resume } from './components/resume.jsx'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <div className='main-frames'>
          <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/resume' exact component={Resume}/>
            <Route path='/projects' exact component={Projects}/>
            {/* <Route path='/life' exact component={Photography}/> */}
            <Route path='/contact' exact component={Contact}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));