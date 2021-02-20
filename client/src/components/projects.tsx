import React from 'react';

function Projects() {
  return (
    <div className='projects'>
      <div className='project-cards gallery-grid'>
        <div>
          <a href="https://github.com/Christopherliang7/Atelier-API" target='_blank'>
            <img className='project-img' src='./images/projects/atelier.png'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>Atelier API</div>
          <div className='project-tech'>Node | Express | MySQL | Redis | Docker | AWS EC2 | Loader.io | Artillery.io</div>
          <div className='project-description'>Atelier is an API containing millions of rows in data, capable of handling web scale production with scalability. Node Streams to optimize ETL timeline. Queries optimized with indexing, subqueries, and JSON aggregation. Connection Pooling and Redis in-memory caching were implemented to increase throughput. Overall results show 120% increase in throughput, with an average latency of 15ms per 3200 requests/sec. Containerized with docker and deployed with AWS.</div>
        </div>

        <div>
          <a href="https://github.com/Christopherliang7/Project-Catwalk" target='_blank'>
            <img className='project-img' src='./images/projects/relatedproducts.gif'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>Catwalk</div>
          <div className='project-tech'>JavaScript | React | Redux | CSS | AWS EC2</div>
          <div className='project-description'>Project Catwalk is an E-commerce Clothing Store with features including Product Overview, Related Products, Questions & Answers, and Ratings & Reviews. Custom components were built for Carousels, Cards, and Comparison Modal. Complex functions were built containing multiple API calls utilizing loops, async/ await and promise all. Carousels were built leveraging React's create reference for a designated width & smooth scrolling of pixels.</div>
        </div>

        <div>
          <a href="https://github.com/Christopherliang7/Apartment-Hunt" target='_blank'>
            <img className='project-img' src='./images/projects/apartmenthunt.png'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>Apartment Hunt</div>
          <div className='project-tech'>JavaScript | React (Hooks, Context) | Sass | MongoDB | Mongoose | AWS EC2</div>
          <div className='project-description'>Apartment Hunt is a NYC Apartment Rental application where I built autocomplete & geolocation search, a listings page of available apartments, Google Maps with light/dark modes, and custom markers. React Context was implemented for cleaner data flow. Sass was implemented for cleaner code readability. The application is also responsive and compatible with tablet and mobile.</div>
        </div>

        <div>
          <a href="https://github.com/Christopherliang7/Portfolio" target='_blank'>
            <img className='project-img' src='./images/projects/Portfolio.png'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>Portfolio</div>
          <div className='project-tech'>TypeScript | React (Hooks, Router) | Node | Express</div>
          <div className='project-description'>Portfolio built to showcase who I am and my work. Still in progress.</div>
        </div>

        <div>
          <a href="https://github.com/Christopherliang7/The-Conservative-Whale" target='_blank'>
            <img className='project-img' src='./images/projects/whaleconservation.png'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>The Conversative Whale</div>
          <div className='project-tech'>JavaScript | React | Node | Express | Google Cloud APIs | Whale Conservation APIs</div>
          <div className='project-description'>The Conservative Whale is a 1-day project integrating multiple APIs to enable real-time tracking of marine mammals. Utilized Whale Conservation APIs for real time data from scientists & Google Cloud APIs for custom map and markers.</div>
        </div>

        <div>
          <a href="https://github.com/Christopherliang7/Speed-Typer-Game" target='_blank'>
           <img className='project-img' src='https://raw.githubusercontent.com/Christopherliang7/Speed-Typer-Game/master/demo.gif'/>
          </a>
        </div>
        <div className='project-info'>
          <div className='project-title'>WordBeater</div>
          <div className='project-tech'>HTML | CSS | JavaScript</div>
          <div className='project-description'>WordBeater is a one-day project built with Vanilla JavaScript to practice DOM traversal and manipulation. This is a speed typing game featuring score keeping, local storage for storing the highest scores, and levels of difficulty.</div>
        </div>

      </div>
    </div>
  )
}

export default Projects;