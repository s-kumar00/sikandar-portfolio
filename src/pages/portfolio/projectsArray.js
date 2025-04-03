import IMG1 from '../../assets/images/projects_images/project-1.png'
import IMG2 from '../../assets/images/projects_images/project-2.png'
import IMG3 from '../../assets/images/projects_images/project-3.png'
import IMG4 from '../../assets/images/projects_images/project-4.png'
import IMG5 from '../../assets/images/projects_images/project-5.png'

const personalProjects = [
  {
    id: 1,
    image: IMG3,
    title: 'filxtHubService',
    description:
      "It's a Service booking website for customers with seamless booking options, and for workers with easy job opportunities, with robust security, intuitive user experience, secure transactions.",
    tools_tech: ['MERN (MongoDB, Express.js, React.js, Node.js)', 'AG Grid', 'AG Charts', 'JWT', 'Nodemailer', 'Rate Limiting', 'Google Map API', 'Stripe API', 'Spring Boot', 'AWS S3', 'MongoDB'],
    features: [
      'Seamless Searching',
      'Update Profile',
      'Interactive Web Interface',
      'Automated Data Fetching',
      'Data Preprocessing',
      'Backend Server',
      'Scalable Architecture'
    ],
    github: 'https://github.com/s-kumar00/filxtHubService',
    live: 'https://github.com/s-kumar00/filxtHubService'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Portfolio React',
    description:
      'This is my portfolio website which is made using ReactJS. It shows my skills, projects, and other details.',
    tools_tech: ['React', 'React-Routers', 'React-Icons', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Single Page Application For Mobile View',
      'Multi Page Application For Desktop View',
      'Awesome UI Pages',
      'Smooth Scrolling'
    ],
    github: 'https://github.com/Sagargupta16/portfolio-react',
    live: 'https://sagargupta.life/portfolio-react/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fidiago',
    description:
      'Online food delivery web application, where you can find and add data in cart, as well modify your profile.',
    tools_tech: ['React', 'React-Routers', 'NodeJS', 'ExpressJS', 'MongoDB', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Multi Page Application',
      'CRUD Operations',
      'Routing with 0 refresh rate',
      'Dark-Mode',
      'Search Feature'
    ],
    github: 'https://github.com/s-kumar00/Foodiago',
    live: 'https://foody-t6f1.onrender.com/'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Portfolio',
    description:
      'This is my portfolio website which is made using HTML, CSS, and JavaScript. It shows my skills, projects, and other details.',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive',
      'Different Themes',
      'Dark-Mode',
      'Smooth-transition',
      'Awesome UI Pages',
      'Smooth Scrolling',
      'Email contact form'
    ],
    github: 'https://github.com/s-kumar00/PortFolio',
    live: 'https://s-kumar00.github.io/PortFolio/'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Calculator',
    description: 'This is a Classic calculator which is made using html, css, javascript',
    tools_tech: ['Html','CSS', 'Javascript'],
    features: ['Arithmetic Calculation','Screen Control'],
    github: 'https://github.com/s-kumar00/Calculator',
    live: 'https://s-kumar00.github.io/Calculator/'
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'MineSweeper Game',
  //   description: 'This is a MineSweeper Game which is made using Unity Game Engine.',
  //   tools_tech: ['Unity', 'C#'],
  //   features: ['Difficulty Easy, Medium or Hard', 'Score', 'Game Over Screen', 'Main Menu Screen'],
  //   github: 'https://github.com/Sagargupta16/Minesweeper-Game__UnityEngine',
  //   live: '#'
  // },
  // {
  //   id: 8,
  //   image: IMG8,
  //   title: 'Flappy Bird Game',
  //   description: 'This is a Flappy Bird Game which is made using Unity Game Engine.',
  //   tools_tech: ['Unity', 'C#'],
  //   features: ['Smooth Gameplay', 'End Bar'],
  //   github: 'https://github.com/Sagargupta16/FlappyBird-Game__UnityEngine',
  //   live: '#'
  // },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: 'Tic Tac Toe',
  //   description: 'This is a Tic-Tac-Toe game which is made using HTML, CSS, and JavaScript.',
  //   tools_tech: ['HTML', 'CSS', 'JavaScript'],
  //   features: ['Difficulty Beginner or Advanced', 'Vs Computer'],
  //   github: 'https://github.com/Sagargupta16/Tic-Tac-Toe',
  //   live: 'https://sagargupta.life/Tic-Tac-Toe/'
  // },
  // {
  //   id: 9,
  //   image: IMG9,
  //   title: 'PacMan Game',
  //   description: 'This is a PacMan Game which is made using Unity Game Engine.',
  //   tools_tech: ['Unity', 'C#'],
  //   features: ['Smooth Gameplay', 'Score', 'Game Over Screen', 'Main Menu Screen'],
  //   github: 'https://github.com/Sagargupta16/PacMan-Game__UnityEngine',
  //   live: '#'
  // },
  // {
  //   id: 10,
  //   image: IMG10,
  //   title: 'Music Player',
  //   description:
  //     'This is a music player web app which is made using HTML, CSS, and JavaScript. It is used to play music.',
  //   tools_tech: ['HTML', 'CSS', 'JavaScript'],
  //   features: ['Cool UI', 'Randomize Songs', 'Play/Pause Songs', 'Next/Previous Songs'],
  //   github: 'https://github.com/Sagargupta16/Music-Web-App',
  //   live: 'https://sagargupta.life/Music-Web-App/'
  // },
  // {
  //   id: 11,
  //   image: IMG11,
  //   title: 'Guess The Number Game',
  //   description:
  //     'This is a Guess The Number Game where you have to guess the number between 1 to 1000. It is made using HTML, CSS, and JavaScript.',
  //   tools_tech: ['HTML', 'CSS', 'JavaScript'],
  //   features: ['Randomize Number', 'Restart', 'Check Score'],
  //   github: 'https://github.com/Sagargupta16/Guess-The-Number-Game',
  //   live: 'https://sagargupta.life/Guess-The-Number-Game/'
  // }
]

const collabProjects = [
  {
    id: 1,
    image: IMG1,
    title: 'MCA-Placement',
    description:
      'This is a MCA Placement Hub web app which is made using React, Nodejs, Mongodb, AWS S3, HTML , CSS & JavaScript. It is an prototype of a website which is used to find job as well record of placement',
    tools_tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive', 'Multi Page Application', 'Smooth UI','Effecting search functionality', 'Charts of records'],
    github: 'https://github.com/s-kumar00/mca_nitw',
    live: '#'
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'Tour Vibes',
  //   description:
  //     'This is an Full Stack web app which is made using React , NodeJS , ExpressJS , MongoDB. It is an prototype of a website which is used to See blogs of Tourist Places.',
  //   tools_tech: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
  //   features: ['Responsive', 'Multi Page Application', 'Smooth UI', 'Authentication', 'CRUD Operations'],
  //   github: 'https://github.com/Sagargupta16/tour-vibes',
  //   live: '#'
  // }
]

export { personalProjects,collabProjects}
