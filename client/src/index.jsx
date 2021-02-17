import React from "react";
import ReactDOM from "react-dom";
import { Nav } from './components/nav.jsx';
import { Program } from './components/program.jsx';
import { Photography } from './components/photography.jsx';
import { Contact } from './components/contact.jsx'

const App = () => {
  return (
    <div className='app'>

      <div className='navbar'>
        <div className='nav-container flex'>
          <h1>Christoper Liang</h1>
          <Nav />
        </div>
      </div>
      
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));