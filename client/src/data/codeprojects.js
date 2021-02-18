export const codeprojects = [
  {
    title: 'Atelier API',
    role: 'Software Engineer',
    technologies: 'Node | Express | MySQL | Redis | Docker | AWS EC2 | Loader.io | Artillery.io',
    description: 'Atelier is an API capable of handling web scale production with scalability. Atelier contains millions of rows in data that was cleaned through leveraging Node Streams. Queries were optimized with indexing, subqueries, and JSON aggregation. Connection Pooling and Redis in-memory caching were implemented to increase throughput. Overall, throughput was increased by over 120% with an average latency of 15 ms for 3200 requests per second. The containerized project was deployed utilizing Docker and AWS.',
    image: './images/projects/atelier.png'
  },
  {
    title: 'Portfolio',
    role: 'Software Engineer',
    technologies: 'JavaScript | React (Hooks, Router) | CSS | AWS',
    description: 'Portfolio was built to showcase my work including coding projects and photography. Still in progress.',
    image: './images/projects/Portfolio.png'
  },
  {
    title: 'Catwalk',
    role: 'Software Engineer',
    technologies: 'JavaScript | React | Redux | CSS | AWS EC2',
    description: "Project Catwalk is an E-commerce Clothing Store with features including Product Overview, Related Products, Questions & Answers, and Ratings & Reviews. I worked in an agile team of four software engineers where I was responsible for Related Products. Related Products required custom components for Carousels, Cards, and Comparison Modal that compared the features of selected product with overview product. This component also required complex functions containing multiple API calls where I utilized loops with a combination of async/ await and promise all. Carousels were built leveraging React's create reference for a designated width & smooth scrolling of pixels.",
    image: './images/projects/relatedproducts.gif'
  },
  {
    title: 'Apartment Hunt',
    role: 'Software Engineer',
    technologies: 'JavaScript | React (Hooks, Context) | Sass | MongoDB | Mongoose | AWS EC2',
    description: 'Apartment Hunt is a NYC Apartment Rental application where I built autocomplete & geolocation search, a listings page of available apartments, Google Maps with light/dark modes, and custom markers. React Context was implemented for cleaner data flow. Sass was implemented for cleaner code readability. The application is also responsive and compatible with tablet and mobile.',
    image: './images/projects/apartmenthunt.png'
  },
  {
    title: 'The Conversative Whale',
    role: 'Software Engineer',
    technologies: 'JavaScript | React | Node | Express | Google Cloud APIs | Whale Conservation APIs',
    description: 'The Conservative Whale is a 1-day project integrating multiple APIs to enable real-time tracking of marine mammals. Utilized Whale Conservation APIs for real time data from scientists & Google Cloud APIs for custom map and markers.',
    image: './images/projects/whaleconservation.png'
  },
  {
    title: 'WordBeater',
    role: 'Software Engineer',
    technologies: 'HTML | CSS | Vanilla JavaScript',
    description: 'WordBeater is a one-day project built with Vanilla JavaScript to practice DOM traversal and manipulation. This is a speed typing game featuring score keeping, local storage for storing the highest scores, and levels of difficulty.',
    image: 'https://raw.githubusercontent.com/Christopherliang7/Speed-Typer-Game/master/demo.gif'
  },
  
]