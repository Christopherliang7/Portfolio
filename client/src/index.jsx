import React from "react";
import ReactDOM from "react-dom";
import { Nav } from './components/nav.jsx';
import { About } from './components/about.jsx';
import { Program } from './components/program.jsx';
import { Photography } from './components/photography.jsx';
import { Contact } from './components/contact.jsx'
import { Footer } from './components/footer.jsx'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <About />
      <Footer />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));