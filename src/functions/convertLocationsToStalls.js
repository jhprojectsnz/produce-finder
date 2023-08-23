// import testImg1 from '../assets/test-image-1.jpg';
// import testImg2 from '../assets/test-image-2.jpg';
// import testImg3 from '../assets/test-image-3.jpg';
// import testImg4 from '../assets/test-image-4.jpg';
// import testImg5 from '../assets/test-image-5.jpg';
// import testImg6 from '../assets/test-image-6.jpg';
// import testImg7 from '../assets/test-image-7.jpg';
// import testImg8 from '../assets/test-image-8.jpg';
// import testImg9 from '../assets/test-image-9.jpg';
// import testImg10 from '../assets/test-image-10.jpg';
// import testImg11 from '../assets/test-image-11.jpg';
import stallImageArray from "../assets/stall-images";

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

// const images = [testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9, testImg10, testImg11]

const stallNames = [
  "Fresh Produce", 
  "The Fruit Farm", 
  "Green Valley", 
  "Veggie Delight", 
  "The Harvest Shop", 
  "Garden Grove", 
  "Veggie World", 
  "Fruit Zone", 
  "The Green Market",
  "Fresh and Local", 
  "The Farm Stand", 
  "Green Leaf", 
  "The Produce Stop", 
  "Garden Bounty", 
  "The Fruit and Veg Shop", 
  "Harvest Fresh", 
  "The Veggie Shack", 
  "Fruitful Harvest", 
  "The Green Spot",
  "Fruit Frenzy",
  "Juicy Delights",
  "Fruit Haven",
  "Fruitopia",
  "The Fruit Basket",
  "Fruitful Delights",
  "Fruit Oasis",
  "The Fruit Stand",
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
  "The Apple Orchard",
  "The Orange Grove",
  "Jane's Fruit Stall", 
  "Mike's Produce", 
  "Lisa's Garden", 
  "Dave's Veggie Stand", 
  "Emma's Orchard", 
  "Sam's Fresh Market", 
  "Anna's Greenhouse", 
  "Jack's Farm Shop", 
  "Lucy's Fruit Basket", 
  "Ben's Harvest", 
  "Sara's Salad Bar", 
  "Nick's Fruitopia",  
  "Alex's Veggie World", 
  "Ryan's Green Grocer", 
  "Zoe's Fruit Zone", 
  "Leo's Veg Out", 
  "Ruby's Orchard Lane", 
  "Max's Fruit Express"
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
  },
  {
    Monday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Tuesday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Wednesday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Thursday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Friday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Saturday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
    Sunday: { open: true, openTime: "7:00 am", closeTime: "8:00 pm" },
  },
  {
    Monday: { open: false, openTime: "", closeTime: "" },
    Tuesday: { open: false, openTime: "", closeTime: "" },
    Wednesday: { open: false, openTime: "", closeTime: "" },
    Thursday: { open: false, openTime: "", closeTime: "" },
    Friday: { open: false, openTime: "", closeTime: "" },
    Saturday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
    Sunday: { open: true, openTime: "9:00 am", closeTime: "5:00 pm" },
  },
  {
    Monday: { open: false, openTime: "", closeTime: "" },
    Tuesday: { open: false, openTime: "", closeTime: "" },
    Wednesday: { open: true, openTime: "1:00 pm", closeTime: "6:00 pm" },
    Thursday: { open: true, openTime: "1:00 pm", closeTime: "6:00 pm" },
    Friday: { open: true, openTime: "1:00 pm", closeTime: "6:00 pm" },
    Saturday: { open: false, openTime: "", closeTime: "" },
    Sunday: { open: false, openTime: "", closeTime: "" },
  },
]

const fruitAndVeges = [
  "apples",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blueberry",
  "cherry",
  "coconut",
  "lemon",
  "orange",
  "gooseberry",
  "blueberries",
  "raspberries",
  "strawberries",
  "cherries",
  "watermelon",
  "kiwifruit",
  "mandarins",
  "grapes",
  "Broccoli",
  "Cabbage",
  "Asparagus",
  "Beetroot",
  "Carrot",
  "Garlic",
  "Leek",
  "Cauliflower",
  "Cucumber",
  "Eggplant",
  "Green Beans",
  "Kale",
  "Lettuce",
  "Onion",
  "potato",
  "pumpkin"
]

const units = ['kg', "each", "100 g", "bag", "small bag", "bunch", "bag of 5"]

// Empty stings included below so some stalls will get a stall and some won't
const phoneNumbers = [4937493, 39048390, 3483984, 283908023, 20940398, 84344543, "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

//Converts an array of location data into an array of stall data
export default function convertLocationsToStalls(array) {

    return array.map((location) => {
      //Randomly generate stock for the current stall (up to 5 items)
      const inStockBlankArray = new Array(randomNumber(6)).fill("blank");
      const inStockArray = inStockBlankArray.map(item => (
          {
            item: fruitAndVeges[randomNumber(fruitAndVeges.length)],
            amount: units[randomNumber(units.length)],
            price: `$ ${randomNumber(6) + 1}`,
          }
        )
      )
      //Generate the rest of the stall data
      return {
        stallId: location.stallId,
        ownerId: null,
        name: stallNames[randomNumber(stallNames.length)],
        address: location.address,
        location: location.location,
        about: 'EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have avaliable in different seasons, upcoming stock etc.',
        img: stallImageArray[randomNumber(stallImageArray.length)],
        openTimes: openTimesArray[randomNumber(openTimesArray.length)],
        contactDetails: {
          phone: phoneNumbers[randomNumber(phoneNumbers.length)],
          email: "",
        },
        inStock: inStockArray,
        organic: randomNumber(10) > 5,
        marketStall: randomNumber(10) > 8,
        eftposPayment: randomNumber(10) > 7
      }
    })
  
  }