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
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
      inStock: [
        {
          item: 'Apples',
          amount: '500 g',
        },
        {
          item: 'Mandarins',
          amount: '1 kg',
          price: '$6'
        },
        {
          item: 'Fejoas',
          price: '$2'
        }
      ],
      openTimes: [
        { 
          day: 'Monday',
          open: '09:00',
          close: '17:30'
        },
        { 
          day: 'Tuesday',
          open: '09:00',
          close: '15:00'
        },
        { 
          day: 'Wednesday',
          open: '09:00',
          close: '15:00'
        },
        { 
          day: 'Thursday',
          open: '09:00',
          close: '15:00'
        },
        { 
          day: 'Friday',
          open: '09:00',
          close: '19:00'
        },
        { 
          day: 'Saturday',
          open: '10:00',
          close: '20:00'
        },
        { 
          day: 'Sunday',
          open: null,
          close: null
        }
      ],
      contactDetails: {
        Phone: '09 123 3453'
      }
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
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
       inStock: [
        {
          item: 'Oranges',
          amount: 'each',
          price: '$1'
        }
      ],
      openTimes: [
        { 
          day: 'Monday',
          open: '08:00',
          close: '17:00'
        },
        { 
          day: 'Tuesday',
          open: '08:00',
          close: '17:00'
        },
        { 
          day: 'Wednesday',
          open: '08:00',
          close: '17:00'
        },
        { 
          day: 'Thursday',
          open: '08:00',
          close: '22:00'
        },
        { 
          day: 'Friday',
          open: null,
          close: null
        },
        { 
          day: 'Saturday',
          open: null,
          close: null
        },
        { 
          day: 'Sunday',
          open: null,
          close: null
        },
      ],
      contactDetails: {
        Phone: '0800 555 3453'
      }
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
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
       inStock: [
      ],
      openTimes: [
        { 
          day: 'Monday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Tuesday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Wednesday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Thursday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Friday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Saturday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Sunday',
          open: '09:00',
          close: '17:00'
        },
      ],
      contactDetails: {
        Email: 'avosandmore@gmail.com'
      }
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
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
       inStock: [
        {
          item: 'Apples',
          amount: 'large bag',
          price: '$6'
        },
        {
          item: 'Pears',
          amount: '1 kg',
          price: '$5'
        },
        {
          item: 'Fejoas',
          amount: '1 kg',
          price: '$7'
        },
        {
          item: 'Lettuce',
          amount: 'each',
          price: '$2'
        },
        {
          item: 'Beans',
          amount: 'small bag',
          price: '$4'
        },
      ],
      openTimes: [
        { 
          day: 'Monday',
          open: null,
          close: null
        },
        { 
          day: 'Tuesday',
          open: null,
          close: null
        },
        { 
          day: 'Wednesday',
          open: null,
          close: null
        },
        { 
          day: 'Thursday',
          open: null,
          close: null
        },
        { 
          day: 'Friday',
          open: null,
          close: null
        },
        { 
          day: 'Saturday',
          open: '12:00',
          close: '15:00'
        },
        { 
          day: 'Sunday',
          open: null,
          close: null
        },
      ]
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
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
       inStock: [
        {
          item: 'Watermelons',
          amount: 'half',
          price: '$8'
        },
        {
          item: 'Bananas',
          amount: '1 kg',
          price: '$2'
        },
        {
          item: 'Fejoas',
          amount: 'small bag',
        }
      ],
      openTimes: [
        { 
          day: 'Monday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Tuesday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Wednesday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Thursday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Friday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Saturday',
          open: '09:00',
          close: '17:00'
        },
        { 
          day: 'Sunday',
          open: '09:00',
          close: '17:00'
        },
      ]
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

// openTimes: {
//   monday: {
//     open: '09:00',
//     close: '17:00'
//   },
//   tuesday: {
//     open: '9 am',
//     close: '5 pm'
//   },
//   wednesday: {
//     open: '9 am',
//     close: '5 pm'
//   },
//   thurday: {
//     open: '9 am',
//     close: '5 pm'
//   },
//   friday: {
//     open: '9 am',
//     close: '5 pm'
//   },
//   saturday: null,
//   sunday: null
// }