import testImg1 from '../assets/test-image-1.jpg';
import testImg2 from '../assets/test-image-2.jpg';
import testImg3 from '../assets/test-image-3.jpg';
import testImg4 from '../assets/test-image-4.jpg';
import testImg5 from '../assets/test-image-5.jpg';

const stallData = [
  {
  stallId: 1,
  ownerId: 57304,
  name: "Jim's Market Stall",
  address: "67 Symonds Street, Grafton, Auckland 1010, New Zealand",
  location: {lat: -36.8569021, lng: 174.7648007},
  locationType: "",
  about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
  img: testImg1,
  openTimes: {
    Monday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Tuesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Wednesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Thursday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Friday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Saturday: { open: false, openTime: "", closeTime: "" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  },
  contactDetails: {
    phone: "557837987",
    email: "fakeemail@test.com",
  },
  inStock: [
    {
      item: "Oranges",
      amount: "each",
      price: "$1",
    },
    {
      item: "Apples",
      amount: "1kg",
      price: "$5",
    },
  ],
  organic: true,
},
{
  stallId: 2,
  ownerId: 57304,
  name: "Jim's Fruit Stall",
  address: "123 Manukau Road, Epsom, Auckland 1023, New Zealand",
  location: {lat: -36.8791472, lng: 174.7760295},
  locationType: "",
  about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
  img: testImg2,
  openTimes: {
    Monday: { open: false, openTime: "", closeTime: "" },
    Tuesday: { open: false, openTime: "", closeTime: "" },
    Wednesday: { open: false, openTime: "", closeTime: "" },
    Thursday: { open: false, openTime: "", closeTime: "" },
    Friday: { open: false, openTime: "", closeTime: "" },
    Saturday: { open: false, openTime: "8:00 am", closeTime: "12:00 pm" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  },
  contactDetails: {
    phone: "",
    email: "fakeemail@test.com",
  },
  inStock: [
    {
      item: "Peaches",
      amount: "each",
      price: "$2",
    },
    {
      item: "Watermelons",
      amount: "1kg",
      price: "$2",
    },
    {
      item: "Carrots",
      amount: "small bag",
      price: "$3",
    },
  ],
  organic: true,
},
{
  stallId: 3,
  ownerId: 52840,
  name: "Fruitful Delights",
  address: "126 Khyber Pass Road, Grafton, Auckland 1023",
  location: {lat: -36.86442590821626, lng: 174.76454120279368},
  locationType: "",
  about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
  img: testImg3,
  openTimes: {
    Monday: { open: true, openTime: "10:00 am", closeTime: "6:00 pm" },
    Tuesday: { open: true, openTime: "10:00 am", closeTime: "6:00 pm" },
    Wednesday: { open: true, openTime: "10:00 am", closeTime: "6:00 pm" },
    Thursday: { open: true, openTime: "10:00 am", closeTime: "6:00 pm" },
    Friday: { open: true, openTime: "10:00 am", closeTime: "6:00 pm" },
    Saturday: { open: true, openTime: "11:00 am", closeTime: "4:00 pm" },
    Sunday: { open: true, openTime: "11:00 am", closeTime: "4:00 pm" },
  },
  contactDetails: {
    phone: "",
    email: "",
  },
  inStock: [
    {
      item: "Avocados",
      amount: "each",
      price: "$1",
    },
    {
      item: "Strawberries",
      amount: "500 g",
      price: "$4",
    },
  ],
  organic: false,
},{
  stallId: 4,
  ownerId: 24893,
  name: "Fruit Oasis",
  address: "5 Clive Road, Epsom, Auckland 1023",
  location: {lat: -36.87210157945642, lng: 174.76690601635315},
  locationType: "",
  about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
  img: testImg4,
  openTimes: {
    Monday: { open: true, openTime: "8:00 am", closeTime: "4:00 pm" },
    Tuesday: { open: true, openTime: "8:00 am", closeTime: "4:00 pm" },
    Wednesday: { open: false, openTime: "", closeTime: "" },
    Thursday: { open: false, openTime: "", closeTime: "" },
    Friday: { open: false, openTime: "", closeTime: "" },
    Saturday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Sunday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
  },
  contactDetails: {
    phone: "67392034",
    email: "",
  },
  inStock: [
    {
      item: "Bananas",
      amount: "bunch",
      price: "$2",
    },
    {
      item: "Apricots",
      amount: "small bag",
      price: "$4",
    },
    {
      item: "Peachs",
      amount: "1 kg",
      price: "$6",
    },
    {
      item: "Cabbage",
      amount: "each",
      price: "$2",
    },
  ],
  organic: false,
},{
    "stallId": 5,
    "ownerId": null,
    "name": "The Cherry Cart",
    "address": "4893606/33C Orchard St, Avondale, Auckland",
    "location": {
        "lat": -36.8900314,
        "lng": 174.6808734
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-1.jpg",
    "openTimes": {
        "Monday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Tuesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Wednesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Thursday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Friday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        }
    },
    "contactDetails": {
        "phone": 20940398,
        "email": ""
    },
    "inStock": [
        {
            "item": "Onion",
            "amount": "each",
            "price": "$ 5"
        },
        {
            "item": "potato",
            "amount": "100 g",
            "price": "$ 4"
        },
        {
            "item": "Beetroot",
            "amount": "100 g",
            "price": "$ 3"
        },
        {
            "item": "Green Beans",
            "amount": "kg",
            "price": "$ 5"
        }
    ],
    organic: false,
},
{
    "stallId": 6,
    "ownerId": null,
    "name": "The Pineapple Patch",
    "address": "203a Symonds St, Eden Terrace, Auckland",
    "location": {
        "lat": -36.8634451,
        "lng": 174.7609325
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-1.jpg",
    "openTimes": {
        "Monday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Tuesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Wednesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Thursday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Friday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 39048390,
        "email": ""
    },
    "inStock": [
        {
            "item": "avocado",
            "amount": "small bag",
            "price": "$ 2"
        }
    ],
    organic: false,
},
{
    "stallId": 7,
    "ownerId": null,
    "name": "The Apple Orchard",
    "address": "9 Redmond St, Ponsonby, Auckland",
    "location": {
        "lat": -36.8482887,
        "lng": 174.7427807
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-2.jpg",
    "openTimes": {
        "Monday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Tuesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Wednesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Thursday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Friday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 4937493,
        "email": ""
    },
    "inStock": [
        {
            "item": "apricot",
            "amount": "small bag",
            "price": "$ 3"
        },
        {
            "item": "Cauliflower",
            "amount": "100 g",
            "price": "$ 6"
        },
        {
            "item": "Asparagus",
            "amount": "bag",
            "price": "$ 6"
        }
    ],
    organic: true,
},
{
    "stallId": 8,
    "ownerId": null,
    "name": "The Broccoli Bazaar",
    "address": "91 St Heliers Bay Rd, St Heliers, Auckland",
    "location": {
        "lat": -36.8549534,
        "lng": 174.8594814
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-4.jpg",
    "openTimes": {
        "Monday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Tuesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Wednesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Thursday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Friday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        }
    },
    "contactDetails": {
        "phone": 283908023,
        "email": ""
    },
    "inStock": [],
    organic: false,
},
{
    "stallId": 9,
    "ownerId": null,
    "name": "Juicy Delights",
    "address": "4893606/33C Orchard St, Avondale, Auckland",
    "location": {
        "lat": -36.8899362,
        "lng": 174.680621
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-1.jpg",
    "openTimes": {
        "Monday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Tuesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Wednesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Thursday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Friday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 84344543,
        "email": ""
    },
    "inStock": [
        {
            "item": "apple",
            "amount": "small bag",
            "price": "$ 2"
        }
    ],
    organic: true,
},
{
    "stallId": 10,
    "ownerId": null,
    "name": "Fruitopia",
    "address": "597 Rosebank Rd, Avondale, Auckland",
    "location": {
        "lat": -36.8766119,
        "lng": 174.6704165
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-2.jpg",
    "openTimes": {
        "Monday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Tuesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Wednesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Thursday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Friday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 4937493,
        "email": ""
    },
    "inStock": [
        {
            "item": "mandarins",
            "amount": "100 g",
            "price": "$ 4"
        },
        {
            "item": "mandarins",
            "amount": "small bag",
            "price": "$ 2"
        }
    ],
    organic: true,
},
{
    "stallId": 11,
    "ownerId": null,
    "name": "Fruit Emporium",
    "address": "4 Huron St, Takapuna, Takapuna Beach",
    "location": {
        "lat": -36.7888847,
        "lng": 174.7713999
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-2.jpg",
    "openTimes": {
        "Monday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Tuesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Wednesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Thursday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Friday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Saturday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 39048390,
        "email": ""
    },
    "inStock": [
        {
            "item": "coconut",
            "amount": "100 g",
            "price": "$ 4"
        },
        {
            "item": "apple",
            "amount": "100 g",
            "price": "$ 4"
        },
        {
            "item": "gooseberry",
            "amount": "each",
            "price": "$ 2"
        }
    ],
    organic: true,
},
{
    "stallId": 12,
    "ownerId": null,
    "name": "Fruitful Harvest",
    "address": "533 Great South Rd, Papatoetoe, Auckland",
    "location": {
        "lat": -36.9807493,
        "lng": 174.875754
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-5.jpg",
    "openTimes": {
        "Monday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Tuesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Wednesday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Thursday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Friday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Saturday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "12:00 pm"
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 283908023,
        "email": ""
    },
    "inStock": [
        {
            "item": "avocado",
            "amount": "small bag",
            "price": "$ 6"
        },
        {
            "item": "Cabbage",
            "amount": "kg",
            "price": "$ 2"
        },
        {
            "item": "blueberry",
            "amount": "small bag",
            "price": "$ 4"
        },
        {
            "item": "Cucumber",
            "amount": "small bag",
            "price": "$ 1"
        }
    ],
    organic: false,
},
{
    "stallId": 13,
    "ownerId": null,
    "name": "Fruit Oasis",
    "address": "Volkner Pl, Albany, Auckland",
    "location": {
        "lat": -36.7493039,
        "lng": 174.7070939
    },
    "locationType": "",
    "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!",
    "img": "/src/assets/test-image-5.jpg",
    "openTimes": {
        "Monday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Tuesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Wednesday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Thursday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Friday": {
            "open": true,
            "openTime": "9:00 am",
            "closeTime": "5:00 pm"
        },
        "Saturday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        },
        "Sunday": {
            "open": false,
            "openTime": "",
            "closeTime": ""
        }
    },
    "contactDetails": {
        "phone": 39048390,
        "email": ""
    },
    "inStock": [
        {
            "item": "Asparagus",
            "amount": "small bag",
            "price": "$ 3"
        },
        {
            "item": "raspberries",
            "amount": "bag",
            "price": "$ 4"
        },
        {
            "item": "Cabbage",
            "amount": "small bag",
            "price": "$ 1"
        },
        {
            "item": "strawberries",
            "amount": "bag",
            "price": "$ 3"
        },
        {
            "item": "watermelon",
            "amount": "bag",
            "price": "$ 1"
        }
    ],
    organic: false,
},]

const users = [
  {
    userId: 57304,
    email: "fakeemail@test.com",
    password: "password",
    stalls: [1, 2],
    favouriteStalls: [3, 4],
  },
  {
    userId: 24232,
    email: "email@email.com",
    password: "testpass",
    stalls: [],
    favouriteStalls: [1],
  }
]

export {stallData, users}


// const locations = [
//   {
//     id: 1,
//     img: testImg1,
//     name: 'My Fruit Stall', 
//     lat: -36.78863186033818, 
//     lng: 174.49670168057386,
//     locationType: 'roadside stall',
//     about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
//     inStock: [
//       {
//         item: 'Apples',
//         amount: '500 g',
//       },
//       {
//         item: 'Mandarins',
//         amount: '1 kg',
//         price: '$6'
//       },
//       {
//         item: 'Fejoas',
//         price: '$2'
//       }
//     ],
//     openTimes: [
//       { 
//         day: 'Monday',
//         open: '09:00',
//         close: '17:30'
//       },
//       { 
//         day: 'Tuesday',
//         open: '09:00',
//         close: '15:00'
//       },
//       { 
//         day: 'Wednesday',
//         open: '09:00',
//         close: '15:00'
//       },
//       { 
//         day: 'Thursday',
//         open: '09:00',
//         close: '15:00'
//       },
//       { 
//         day: 'Friday',
//         open: '09:00',
//         close: '19:00'
//       },
//       { 
//         day: 'Saturday',
//         open: '10:00',
//         close: '20:00'
//       },
//       { 
//         day: 'Sunday',
//         open: null,
//         close: null
//       }
//     ],
//     contactDetails: {
//       Phone: '09 123 3453'
//     }
//   },
//   {
//     id: 2,
//     img: testImg2,
//     name: 'Tasty Oranges',  
//     lat: -36.77308008261856, 
//     lng: 174.55441014661895,
//     locationType: 'roadside stall',
//     about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
//      inStock: [
//       {
//         item: 'Oranges',
//         amount: 'each',
//         price: '$1'
//       }
//     ],
//     openTimes: [
//       { 
//         day: 'Monday',
//         open: '08:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Tuesday',
//         open: '08:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Wednesday',
//         open: '08:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Thursday',
//         open: '08:00',
//         close: '22:00'
//       },
//       { 
//         day: 'Friday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Saturday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Sunday',
//         open: null,
//         close: null
//       },
//     ],
//     contactDetails: {
//       Phone: '0800 555 3453'
//     }
//   },
//   {
//     id: 3,
//     img: testImg3,
//     name: 'Avocados and More',  
//     lat: -36.80431583107017, 
//     lng: 174.53266177070006,
//     locationType: 'shop', 
//     about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
//      inStock: [
//     ],
//     openTimes: [
//       { 
//         day: 'Monday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Tuesday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Wednesday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Thursday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Friday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Saturday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Sunday',
//         open: '09:00',
//         close: '17:00'
//       },
//     ],
//     contactDetails: {
//       Email: 'avosandmore@gmail.com'
//     }
//   },
//   {
//     id: 4,
//     img: testImg4,
//     name: 'Lots and Lots of Fruit',  
//     lat: -36.73198150428723, 
//     lng: 174.47731409214202,
//     locationType: 'roadside stall',
//     about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
//      inStock: [
//       {
//         item: 'Apples',
//         amount: 'large bag',
//         price: '$6'
//       },
//       {
//         item: 'Pears',
//         amount: '1 kg',
//         price: '$5'
//       },
//       {
//         item: 'Fejoas',
//         amount: '1 kg',
//         price: '$7'
//       },
//       {
//         item: 'Lettuce',
//         amount: 'each',
//         price: '$2'
//       },
//       {
//         item: 'Beans',
//         amount: 'small bag',
//         price: '$4'
//       },
//     ],
//     openTimes: [
//       { 
//         day: 'Monday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Tuesday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Wednesday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Thursday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Friday',
//         open: null,
//         close: null
//       },
//       { 
//         day: 'Saturday',
//         open: '12:00',
//         close: '15:00'
//       },
//       { 
//         day: 'Sunday',
//         open: null,
//         close: null
//       },
//     ]
//   },
//   {
//     id: 5,
//     img: testImg5,
//     name: 'Test Stall',  
//     lat: -36.677894856799995, 
//     lng: 174.4627228751362,
//     locationType: 'market stall',
//     about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
//      inStock: [
//       {
//         item: 'Watermelons',
//         amount: 'half',
//         price: '$8'
//       },
//       {
//         item: 'Bananas',
//         amount: '1 kg',
//         price: '$2'
//       },
//       {
//         item: 'Fejoas',
//         amount: 'small bag',
//       }
//     ],
//     openTimes: [
//       { 
//         day: 'Monday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Tuesday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Wednesday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Thursday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Friday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Saturday',
//         open: '09:00',
//         close: '17:00'
//       },
//       { 
//         day: 'Sunday',
//         open: '09:00',
//         close: '17:00'
//       },
//     ]
//   }
// ]



// const fruitStallNames = [
// "Fruit Frenzy",
// "Juicy Delights",
// "Fruit Haven",
// "Fruitopia",
// "The Fruit Basket",
// "Fruitful Delights",
// "Fruit Oasis",
// "The Fruit Stand",
// "Fruitful Harvest",
// "Fruit Emporium"
// ];

