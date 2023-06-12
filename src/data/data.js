import testImg1 from '../assets/test-image-1.jpg';
import testImg2 from '../assets/test-image-2.jpg';
import testImg3 from '../assets/test-image-3.jpg';
import testImg4 from '../assets/test-image-4.jpg';
import testImg5 from '../assets/test-image-5.jpg';

const locations = [
    {
      id: 1,
      img: testImg1,
      name: 'My Fruit Stall', 
      lat: -36.78863186033818, 
      lng: 174.49670168057386,
      locationType: 'roadside stall',
      items: ['Apples', 'Mandarins', 'Feijoas'],
      likes: 53,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!'
    },
    {
      id: 2,
      img: testImg2,
      name: 'Tasty Oranges',  
      lat: -36.77308008261856, 
      lng: 174.55441014661895,
      locationType: 'roadside stall',
      items: ['Oranges'],
      likes: 53,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!'
    },
    {
      id: 3,
      img: testImg3,
      name: 'Avocados and More',  
      lat: -36.80431583107017, 
      lng: 174.53266177070006,
      locationType: 'shop', 
      items: ['Avocados', 'Apples', 'Potatoes'],
      likes: 53,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!'
    },
    {
      id: 4,
      img: testImg4,
      name: 'Lots and Lots of Fruit',  
      lat: -36.73198150428723, 
      lng: 174.47731409214202,
      locationType: 'roadside stall',
      items: ['Apples', 'Limes', 'Feijoas', 'Lemons'],
      likes: 53,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!'
    },
    {
      id: 5,
      img: testImg5,
      name: 'Test Stall',  
      lat: -36.677894856799995, 
      lng: 174.4627228751362,
      locationType: 'market stall',
      items: ['Feijoas'],
      likes: 53,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!'
    }
  ]

export default locations

const fruitStallNames = [
  "Fruit Frenzy",
  "Juicy Delights",
  "Fruit Haven",
  "Fruitopia",
  "The Fruit Basket",
  "Fruitful Delights",
  "Fruit Oasis",
  "The Fruit Stand",
  "Fruitful Harvest",
  "Fruit Emporium"
];