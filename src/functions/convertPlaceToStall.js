import testImg1 from '../assets/test-image-1.jpg';
import testImg2 from '../assets/test-image-2.jpg';
import testImg3 from '../assets/test-image-3.jpg';
import testImg4 from '../assets/test-image-4.jpg';
import testImg5 from '../assets/test-image-5.jpg';


function randomNumber(max){
    return Math.floor(Math.random() * max)
}

const images = [testImg1, testImg2, testImg3, testImg4, testImg5]

const stallNames = [
    "Fruit Frenzy",
    "Juicy Delights",
    "Fruit Haven",
    "Fruitopia",
    "The Fruit Basket",
    "Fruitful Delights",
    "Fruit Oasis",
    "The Fruit Stand",
    "Fruitful Harvest",
    "Fruit Emporium",
    "Fresh Harvest",
    "Garden Delights",
    "Farm to Table",
    "The Veggie Patch",
    "The Green Grocer",
    "Nature's Bounty",
    "The Produce Stand",
    "The Garden Market",
    "The Veggie Cart",
    "The Farmer's Market",
    "The Carrot Patch",
    "The Beet Boutique",
    "The Radish Room",
    "The Sweet Potato Stand",
    "The Turnip Table",
    "The Asparagus Attic",
    "The Kohlrabi Corner",
    "The Potato Place",
    "The Cabbage Cart",
    "The Broccoli Bazaar",
    "The Apple Orchard",
    "The Orange Grove",
    "The Pineapple Patch",
    "The Mango Market",
    "The Grapefruit Garden",
    "The Lemon Lane",
    "The Blueberry Boutique",
    "The Cherry Cart",
    "The Peach Place",
    "The Strawberry Stand"
];

const openTimesArray = [
    {
    Monday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Tuesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Wednesday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Thursday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Friday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Saturday: { open: false, openTime: "", closeTime: "" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  },
  {
    Monday: { open: false, openTime: "", closeTime: "" },
    Tuesday: { open: false, openTime: "", closeTime: "" },
    Wednesday: { open: false, openTime: "", closeTime: "" },
    Thursday: { open: false, openTime: "", closeTime: "" },
    Friday: { open: false, openTime: "", closeTime: "" },
    Saturday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  },
  {
    Monday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Tuesday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Wednesday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Thursday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Friday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Saturday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
    Sunday: { open: true, openTime: "9:00 am", closeTime: "12:00 pm" },
  }
]

const phoneNumbers = [4937493, 39048390, 3483984, 283908023, 20940398, 84344543]

export default function convertPlaceToStall(place) {
    // console.log(place)
    const templateObject = {
        stallId: place.place_id,
        ownerId: null,
        name: stallNames[randomNumber(stallNames.length)],
        address: place.vicinity,
        location: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
        locationType: "",
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deleniti reiciendis recusandae necessitatibus natus dolores aliquid quo odit nulla laborum facilis, voluptatibus provident veritatis, adipisci numquam rerum laudantium minus sit!',
        img: images[randomNumber(images.length)],
        openTimes: openTimesArray[randomNumber(openTimesArray.length)],
        contactDetails: {
          phone: phoneNumbers[randomNumber(phoneNumbers.length)],
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
      }
    
    return templateObject
}