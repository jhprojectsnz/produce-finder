const stallData = [
  {
    stallId: 1,
    ownerId: 57304,
    name: "Juicy Delights",
    address: "89 Maryvale Road, Wainui",
    location: {
      lat: -36.616493,
      lng: 174.651961,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Leek",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "banana",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Beetroot",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 11,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "87 Havelock Street, Ashburton",
    location: {
      lat: -43.901132,
      lng: 171.746227,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 12,
    ownerId: null,
    name: "The Produce Stand",
    address: "24 Salford Street, Edendale",
    location: {
      lat: -46.311623,
      lng: 168.782136,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 13,
    ownerId: null,
    name: "Juicy Delights",
    address: "12 McBain Road RD 3, Gore",
    location: {
      lat: -45.960151,
      lng: 168.8666,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "blueberry",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 14,
    ownerId: null,
    name: "The Green Spot",
    address: "442 Rimu Road, Invercargill",
    location: {
      lat: -46.400294,
      lng: 168.501456,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Beetroot",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 15,
    ownerId: null,
    name: "The Farmer's Market",
    address: "Ruru Street, Invercargill",
    location: {
      lat: -46.376766,
      lng: 168.346021,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 16,
    ownerId: null,
    name: "Fresh and Local",
    address: "435 North Road, Invercargill",
    location: {
      lat: -46.37023,
      lng: 168.349381,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 17,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "161 Metzger Street, Invercargill",
    location: {
      lat: -46.426717,
      lng: 168.376955,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 18,
    ownerId: null,
    name: "The Green Market",
    address: "3 Tilsley Street, Rotorua",
    location: {
      lat: -38.150835,
      lng: 176.253367,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 19,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "42 A Puhinui Road, Auckland",
    location: {
      lat: -36.983553,
      lng: 174.873967,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Cauliflower",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 20,
    ownerId: null,
    name: "Garden Grove",
    address: "611 Temuka-Orari Highway, Temuka",
    location: {
      lat: -44.173004,
      lng: 171.28259,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 21,
    ownerId: null,
    name: "The Farm Stand",
    address: "82 Whau Valley Road, Whangarei",
    location: {
      lat: -35.69627,
      lng: 174.307197,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 23,
    ownerId: null,
    name: "Veggie World",
    address: "1229 Coatesville-Riverhead Highway 28, Riverhead",
    location: {
      lat: -36.769884,
      lng: 174.588686,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Leek",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 24,
    ownerId: null,
    name: "Nature's Bounty",
    address: "161 King Street, Invercargill",
    location: {
      lat: -46.398765,
      lng: 168.371623,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 25,
    ownerId: null,
    name: "Anna's Greenhouse",
    address: "3 Boundary Road, Invercargill",
    location: {
      lat: -46.444979,
      lng: 168.39987,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "orange",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Garlic",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 26,
    ownerId: null,
    name: "The Farm Stand",
    address: "55 Eden Crescent, Invercargill",
    location: {
      lat: -46.396542,
      lng: 168.384216,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 27,
    ownerId: null,
    name: "The Harvest Shop",
    address: "Florence Street, Wyndham",
    location: {
      lat: -46.324627,
      lng: 168.843097,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 29,
    ownerId: null,
    name: "The Radish Room",
    address: "Ardwick Street, Gore",
    location: {
      lat: -46.095941,
      lng: 168.9406,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "cherry",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 30,
    ownerId: null,
    name: "The Veggie Patch",
    address: "Ayr Street, Stewart Island",
    location: {
      lat: -46.899076,
      lng: 168.128157,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 31,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "233 Hall Road, Winton",
    location: {
      lat: -46.077844,
      lng: 168.15396,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 32,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "5 Wayland Street, Gore",
    location: {
      lat: -46.111656,
      lng: 168.932785,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "orange",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 33,
    ownerId: null,
    name: "The Green Market",
    address: "Oakland Street, Mataura",
    location: {
      lat: -46.193131,
      lng: 168.862887,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 34,
    ownerId: null,
    name: "The Produce Stand",
    address: "28 Surrey Street, Mossburn",
    location: {
      lat: -45.668072,
      lng: 168.23773,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 35,
    ownerId: null,
    name: "The Veggie Cart",
    address: "956 Clifden Highway, Tuatapere",
    location: {
      lat: -46.052018,
      lng: 167.712473,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 36,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "Old Port Road, Balclutha",
    location: {
      lat: -46.269676,
      lng: 169.622693,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 37,
    ownerId: null,
    name: "Garden Grove",
    address: "3 Gall Street, Fairlie",
    location: {
      lat: -44.10421,
      lng: 170.827614,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 38,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "87 Sewell Street, Hokitika",
    location: {
      lat: -42.715747,
      lng: 170.965597,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 39,
    ownerId: null,
    name: "The Orange Grove",
    address: "13 Puketahi Street, Greymouth",
    location: {
      lat: -42.451968,
      lng: 171.211341,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Onion",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "cherry",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "cherry",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "kiwifruit",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 40,
    ownerId: null,
    name: "Emma's Orchard",
    address: "27 Benhar Street, Dunedin",
    location: {
      lat: -45.888904,
      lng: 170.476151,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 41,
    ownerId: null,
    name: "Fruitful Delights",
    address: "29 St Leonards Drive, Dunedin",
    location: {
      lat: -45.846739,
      lng: 170.578318,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 42,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "Chaucer Street, Milton",
    location: {
      lat: -46.125212,
      lng: 169.961282,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 43,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "Baker Street, Stirling",
    location: {
      lat: -46.248087,
      lng: 169.779911,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 44,
    ownerId: null,
    name: "The Garden Market",
    address: "921 Tahakopa Valley Road, Owaka",
    location: {
      lat: -46.51086,
      lng: 169.387905,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 45,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "Leman Street, Milton",
    location: {
      lat: -46.131623,
      lng: 169.971265,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Kale",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 46,
    ownerId: null,
    name: "Farm to Table",
    address: "633 Fortification Road, Alma",
    location: {
      lat: -45.119587,
      lng: 170.896877,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 47,
    ownerId: null,
    name: "The Produce Stop",
    address: "Deaker Street, Omakau",
    location: {
      lat: -45.090941,
      lng: 169.60271,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 48,
    ownerId: null,
    name: "Emma's Orchard",
    address: "School Road, Balclutha",
    location: {
      lat: -46.34561,
      lng: 169.709372,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Cabbage",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 49,
    ownerId: null,
    name: "The Apple Orchard",
    address: "57 Bayfield Road, Dunedin",
    location: {
      lat: -45.898059,
      lng: 170.527675,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 50,
    ownerId: null,
    name: "Farm to Table",
    address: "1 Beaumaris Street, Outram",
    location: {
      lat: -45.861134,
      lng: 170.228273,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 51,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "Stromness Street, Palmerston",
    location: {
      lat: -45.481031,
      lng: 170.719157,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "mandarins",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "gooseberry",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 52,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "131 Thomson Street, Ashburton",
    location: {
      lat: -43.923887,
      lng: 171.719067,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 53,
    ownerId: null,
    name: "The Beet Boutique",
    address: "206 Tuahiwi Road, Kaiapoi",
    location: {
      lat: -43.334247,
      lng: 172.643796,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 54,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "5 Solander Road, Pegasus",
    location: {
      lat: -43.314909,
      lng: 172.692266,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 55,
    ownerId: null,
    name: "The Green Market",
    address: "25 Trafalgar Street, Timaru",
    location: {
      lat: -44.388036,
      lng: 171.238242,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "apples",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 56,
    ownerId: null,
    name: "The Apple Orchard",
    address: "250 Wairakei Road, Christchurch",
    location: {
      lat: -43.500167,
      lng: 172.588282,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 57,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "178 Waituna School Road, Waimate",
    location: {
      lat: -44.701004,
      lng: 171.01671,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 58,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "1651 North Eyre Road, Rangiora",
    location: {
      lat: -43.349492,
      lng: 172.360111,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 59,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "147 Lyttelton Street, Christchurch",
    location: {
      lat: -43.559634,
      lng: 172.611297,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "apricot",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "potato",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 60,
    ownerId: null,
    name: "The Farmer's Market",
    address: "19 Rakaia Gorge Road, Darfield",
    location: {
      lat: -43.515524,
      lng: 171.713285,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 61,
    ownerId: null,
    name: "Veggie Delight",
    address: "48 School Road, Yaldhurst",
    location: {
      lat: -43.510194,
      lng: 172.502189,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 62,
    ownerId: null,
    name: "Ben's Harvest",
    address: "Ardgowan Road, Oamaru",
    location: {
      lat: -45.061243,
      lng: 170.967238,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 63,
    ownerId: null,
    name: "The Carrot Patch",
    address: "44 Chapman Street, Dunedin",
    location: {
      lat: -45.85924,
      lng: 170.489862,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 64,
    ownerId: null,
    name: "The Veggie Cart",
    address: "5 Thoreau Street, Dunedin",
    location: {
      lat: -45.903474,
      lng: 170.454303,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 65,
    ownerId: null,
    name: "The Radish Room",
    address: "Molyneux Avenue, Cromwell",
    location: {
      lat: -45.045004,
      lng: 169.203515,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 66,
    ownerId: null,
    name: "Garden Bounty",
    address: "North Road, Dunedin",
    location: {
      lat: -45.853486,
      lng: 170.522205,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Cabbage",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Eggplant",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 67,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "10 Sickels Street, Dunedin",
    location: {
      lat: -45.900545,
      lng: 170.391366,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Cabbage",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 68,
    ownerId: null,
    name: "Emma's Orchard",
    address: "1403 Kakanui Valley Road, Waitaki",
    location: {
      lat: -45.050518,
      lng: 170.770568,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 69,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "54 Ashmore Street, Dunedin",
    location: {
      lat: -45.857001,
      lng: 170.465984,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 70,
    ownerId: null,
    name: "The Veggie Shack",
    address: "576 Camphill Road RD 2, Wanaka",
    location: {
      lat: -44.651718,
      lng: 169.291049,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 71,
    ownerId: null,
    name: "Mike's Produce",
    address: "108 Salcombe Street, Kaitangata",
    location: {
      lat: -46.280569,
      lng: 169.852561,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "avocado",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 72,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "1260 Coast Road, Karitane",
    location: {
      lat: -45.644196,
      lng: 170.656252,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 73,
    ownerId: null,
    name: "Mike's Produce",
    address: "2518 Clarks Junction-Lee Stream Road, Outram",
    location: {
      lat: -45.781768,
      lng: 170.097552,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 74,
    ownerId: null,
    name: "Garden Grove",
    address: "Coronation Court, Milton",
    location: {
      lat: -46.113826,
      lng: 169.962047,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "grapes",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 75,
    ownerId: null,
    name: "Mike's Produce",
    address: "34 Marlow Street, Dunedin",
    location: {
      lat: -45.903489,
      lng: 170.514738,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 76,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "1305 Tram Road, Rangiora",
    location: {
      lat: -43.369342,
      lng: 172.495566,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 77,
    ownerId: null,
    name: "Fruit Haven",
    address: "12 Lemonwood Drive, Rolleston",
    location: {
      lat: -43.623432,
      lng: 172.385925,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "blueberry",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 78,
    ownerId: null,
    name: "Fruitful Delights",
    address: "40 Spencer Street, Christchurch",
    location: {
      lat: -43.546066,
      lng: 172.612757,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "cherry",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 79,
    ownerId: null,
    name: "Garden Delights",
    address: "James Street, Porirua",
    location: {
      lat: -41.084429,
      lng: 174.869303,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 80,
    ownerId: null,
    name: "Fresh Harvest",
    address: "404 Eastbourne Street East, Hastings",
    location: {
      lat: -39.646231,
      lng: 176.846363,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 81,
    ownerId: null,
    name: "The Green Spot",
    address: "89 A Sparks Road, Christchurch",
    location: {
      lat: -43.564788,
      lng: 172.60708,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 82,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "106 Main South Road, Christchurch",
    location: {
      lat: -43.536215,
      lng: 172.559125,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "avocado",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 83,
    ownerId: null,
    name: "Fruit Haven",
    address: "Chadbury Street, Christchurch",
    location: {
      lat: -43.4806,
      lng: 172.705631,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 84,
    ownerId: null,
    name: "The Apple Orchard",
    address: "494 Main South Road, Greymouth",
    location: {
      lat: -42.509697,
      lng: 171.168468,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 85,
    ownerId: null,
    name: "The Radish Room",
    address: "33 Halstead Road, Pleasant Point",
    location: {
      lat: -44.257427,
      lng: 171.132171,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Kale",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 86,
    ownerId: null,
    name: "The Carrot Patch",
    address: "222 Queenspark Drive, Christchurch",
    location: {
      lat: -43.473158,
      lng: 172.695985,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Cauliflower",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 87,
    ownerId: null,
    name: "Fruit Oasis",
    address: "11 Tennyson Street, Rolleston",
    location: {
      lat: -43.592491,
      lng: 172.381339,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 88,
    ownerId: null,
    name: "The Orange Grove",
    address: "117 Roydvale Avenue, Christchurch",
    location: {
      lat: -43.494484,
      lng: 172.563148,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 93,
    ownerId: null,
    name: "The Harvest Shop",
    address: "45 Hassals Lane, Christchurch",
    location: {
      lat: -43.551181,
      lng: 172.656331,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 95,
    ownerId: null,
    name: "Fruit Emporium",
    address: "140 Haverstock Road, Auckland",
    location: {
      lat: -36.888352,
      lng: 174.726823,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "mandarins",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "lemon",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 96,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "93 Chapel Drive, Te Awamutu",
    location: {
      lat: -38.021232,
      lng: 175.329509,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "apricot",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 97,
    ownerId: null,
    name: "The Fruit Basket",
    address: "49 Lake Avenue, Queenstown",
    location: {
      lat: -45.022927,
      lng: 168.731799,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 99,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "52 Alexander Crescent, Auckland",
    location: {
      lat: -36.95536,
      lng: 174.877035,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "banana",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 101,
    ownerId: null,
    name: "Fruit Haven",
    address: "35 Victoria Street, Rangiora",
    location: {
      lat: -43.307442,
      lng: 172.595537,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 102,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "25 Anaua Street, Whanganui",
    location: {
      lat: -39.946844,
      lng: 175.049331,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 104,
    ownerId: null,
    name: "The Produce Stand",
    address: "88 Rhodes Drive, Palmerston North",
    location: {
      lat: -40.328271,
      lng: 175.645745,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 110,
    ownerId: null,
    name: "Fruitful Delights",
    address: "Rowan Avenue, Christchurch",
    location: {
      lat: -43.51173,
      lng: 172.70486,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 111,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "Mcgowan Street, Runanga",
    location: {
      lat: -42.399339,
      lng: 171.252152,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 112,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "Wrights Road, Sheffield",
    location: {
      lat: -43.390946,
      lng: 172.025361,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 113,
    ownerId: null,
    name: "Mike's Produce",
    address: "11 Shirley Road, Christchurch",
    location: {
      lat: -43.507888,
      lng: 172.653152,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "blueberries",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 114,
    ownerId: null,
    name: "The Carrot Patch",
    address: "1935 South Hillend-Dipton Road, Dipton",
    location: {
      lat: -45.890633,
      lng: 168.351316,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 115,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "Rutland Street, Riversdale",
    location: {
      lat: -45.900912,
      lng: 168.738412,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 116,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "Leader Street, Riverton",
    location: {
      lat: -46.351828,
      lng: 168.019399,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 118,
    ownerId: null,
    name: "Fresh and Local",
    address: "734 Tweed Street, Invercargill",
    location: {
      lat: -46.416528,
      lng: 168.394643,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 119,
    ownerId: null,
    name: "The Fruit Basket",
    address: "11 Moana Street, Tokomaru Bay",
    location: {
      lat: -38.127216,
      lng: 178.315995,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "blueberry",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 120,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "74 Hei Hei Road, Christchurch",
    location: {
      lat: -43.533484,
      lng: 172.525345,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 121,
    ownerId: null,
    name: "The Veggie Patch",
    address: "3 Wentworth Street, Gore",
    location: {
      lat: -46.091738,
      lng: 168.960487,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Kale",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 122,
    ownerId: null,
    name: "Farm to Table",
    address: "Pukerau Street, Gore",
    location: {
      lat: -46.097802,
      lng: 169.095347,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Leek",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "grapes",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 124,
    ownerId: null,
    name: "Veggie Delight",
    address: "39 Somerville Road, Auckland",
    location: {
      lat: -36.91284,
      lng: 174.93907,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Asparagus",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 126,
    ownerId: null,
    name: "The Green Grocer",
    address: "45 Evans Road, Tauranga",
    location: {
      lat: -37.692058,
      lng: 176.259997,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 129,
    ownerId: null,
    name: "The Produce Stop",
    address: "17 Sheppard Place, Christchurch",
    location: {
      lat: -43.508774,
      lng: 172.634388,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 130,
    ownerId: null,
    name: "Fruit Oasis",
    address: "739 Ferry Road, Christchurch",
    location: {
      lat: -43.550383,
      lng: 172.685581,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 131,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Old Main Road, Amberley",
    location: {
      lat: -43.197813,
      lng: 172.740036,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "orange",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "raspberries",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 132,
    ownerId: null,
    name: "Green Leaf",
    address: "20 Robins Road, Queenstown",
    location: {
      lat: -45.027455,
      lng: 168.659531,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 133,
    ownerId: null,
    name: "Veggie World",
    address: "110 Lamond Street, Invercargill",
    location: {
      lat: -46.38791,
      lng: 168.374499,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "cherries",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 134,
    ownerId: null,
    name: "Fruitful Delights",
    address: "181 Foyle Street, Bluff",
    location: {
      lat: -46.600046,
      lng: 168.335097,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 136,
    ownerId: null,
    name: "Fruitful Delights",
    address: "132 Liverpool Street, Whanganui",
    location: {
      lat: -39.929293,
      lng: 175.038396,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 137,
    ownerId: null,
    name: "Nature's Bounty",
    address: "9 Mamari Road, Waitakere",
    location: {
      lat: -36.798577,
      lng: 174.612391,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 138,
    ownerId: null,
    name: "The Green Spot",
    address: "260 Linwood Avenue, Christchurch",
    location: {
      lat: -43.535284,
      lng: 172.67488,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Beetroot",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 139,
    ownerId: null,
    name: "The Orange Grove",
    address: "46 Western Valley Road, Little River",
    location: {
      lat: -43.763797,
      lng: 172.795486,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "blueberry",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 140,
    ownerId: null,
    name: "The Farm Stand",
    address: "11 Te Korari Street, Christchurch",
    location: {
      lat: -43.472028,
      lng: 172.664748,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 141,
    ownerId: null,
    name: "Fruit Haven",
    address: "137 Collins Road, Hamilton",
    location: {
      lat: -37.821909,
      lng: 175.268758,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 143,
    ownerId: null,
    name: "Nature's Bounty",
    address: "5 Hillary Street, Dunedin",
    location: {
      lat: -45.847573,
      lng: 170.512966,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Leek",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 144,
    ownerId: null,
    name: "Anna's Greenhouse",
    address: "41 Camperdown Road, Wellington",
    location: {
      lat: -41.306563,
      lng: 174.824895,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 145,
    ownerId: null,
    name: "The Fruit Basket",
    address: "146 Dunns Road, Invercargill",
    location: {
      lat: -46.431486,
      lng: 168.29038,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Leek",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 147,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "1 Church Street, Winton",
    location: {
      lat: -46.150501,
      lng: 168.326634,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "coconut",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 148,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "28 Muriel Street, Thornbury",
    location: {
      lat: -46.290924,
      lng: 168.095707,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 149,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "McDonald Street, Methven",
    location: {
      lat: -43.636575,
      lng: 171.650119,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 150,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "82 Major Hornbrook Road, Christchurch",
    location: {
      lat: -43.562448,
      lng: 172.715927,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 151,
    ownerId: null,
    name: "The Veggie Cart",
    address: "100 Lonsdale Street, Christchurch",
    location: {
      lat: -43.505942,
      lng: 172.723723,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 152,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "1163 Okains Bay Road, Okains Bay",
    location: {
      lat: -43.708872,
      lng: 173.042737,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 153,
    ownerId: null,
    name: "The Fruit Basket",
    address: "990 Omihi Road, Hurunui",
    location: {
      lat: -43.022141,
      lng: 172.853629,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Leek",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 154,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "91 Sparks Road, Christchurch",
    location: {
      lat: -43.564866,
      lng: 172.606609,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 155,
    ownerId: null,
    name: "The Produce Stop",
    address: "200 Peachgrove Road, Hamilton",
    location: {
      lat: -37.774864,
      lng: 175.297033,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 157,
    ownerId: null,
    name: "The Green Grocer",
    address: "19 Moffat Road, Tauranga",
    location: {
      lat: -37.712633,
      lng: 176.113183,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 158,
    ownerId: null,
    name: "Mike's Produce",
    address: "181 Milford Road, Te Anau",
    location: {
      lat: -45.413459,
      lng: 167.718043,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 159,
    ownerId: null,
    name: "The Apple Orchard",
    address: "775 State Highway 96, Gore",
    location: {
      lat: -46.185376,
      lng: 168.762641,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 160,
    ownerId: null,
    name: "Veggie Delight",
    address: "118 Te Mata Road, Havelock North",
    location: {
      lat: -39.666625,
      lng: 176.890916,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 161,
    ownerId: null,
    name: "Green Leaf",
    address: "20 Hilton Street, Kaiapoi",
    location: {
      lat: -43.379062,
      lng: 172.651468,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "orange",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 162,
    ownerId: null,
    name: "The Fruit Farm",
    address: "16 Camp Street, Hokitika",
    location: {
      lat: -42.746201,
      lng: 171.00586,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 163,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "9 Barnes Road, Ladbrooks",
    location: {
      lat: -43.617669,
      lng: 172.532329,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "coconut",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Onion",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 164,
    ownerId: null,
    name: "The Fruit Farm",
    address: "18 Duncan Street, Tokanui",
    location: {
      lat: -46.563166,
      lng: 168.946581,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Cauliflower",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 165,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "22 Matheson Road, Gore",
    location: {
      lat: -45.92637,
      lng: 169.017531,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 166,
    ownerId: null,
    name: "Juicy Delights",
    address: "34 Mauchline Street, Wallacetown",
    location: {
      lat: -46.332255,
      lng: 168.289807,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "cherry",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 167,
    ownerId: null,
    name: "Garden Delights",
    address: "48 Seddon Street, Rangiora",
    location: {
      lat: -43.29992,
      lng: 172.581525,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 172,
    ownerId: null,
    name: "Anna's Greenhouse",
    address: "4 Factory Road, Invercargill",
    location: {
      lat: -46.473899,
      lng: 168.700489,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 173,
    ownerId: null,
    name: "The Veggie Shack",
    address: "Derby Road, Limehills",
    location: {
      lat: -46.065238,
      lng: 168.328799,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 174,
    ownerId: null,
    name: "Fresh and Local",
    address: "Smith Road, Lochiel",
    location: {
      lat: -46.205986,
      lng: 168.335175,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Leek",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 175,
    ownerId: null,
    name: "Green Leaf",
    address: "288 Mill Road North, Myross Bush",
    location: {
      lat: -46.37283,
      lng: 168.417815,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 176,
    ownerId: null,
    name: "The Veggie Cart",
    address: "Elles Road, Otautau",
    location: {
      lat: -46.140681,
      lng: 167.993263,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 177,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "25 Beetham Street, Queenstown",
    location: {
      lat: -45.030916,
      lng: 168.665444,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 178,
    ownerId: null,
    name: "Nature's Bounty",
    address: "70 Eye Street, Invercargill",
    location: {
      lat: -46.416503,
      lng: 168.352158,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 179,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "90 Blake Street, Greymouth",
    location: {
      lat: -42.452586,
      lng: 171.192977,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "kiwifruit",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "coconut",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Beetroot",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 181,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "56 Godley Road, Burnham",
    location: {
      lat: -43.616299,
      lng: 172.308404,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 182,
    ownerId: null,
    name: "The Produce Stop",
    address: "Mount Cargill Road, Waitati",
    location: {
      lat: -45.75501,
      lng: 170.57295,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 183,
    ownerId: null,
    name: "The Orange Grove",
    address: "May Street, Waiwera South",
    location: {
      lat: -46.216283,
      lng: 169.4894,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 184,
    ownerId: null,
    name: "Juicy Delights",
    address: "150 Helensburgh Road, Dunedin",
    location: {
      lat: -45.856391,
      lng: 170.479808,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "cherry",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 185,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "14 Ardwick Street, Gore",
    location: {
      lat: -46.102671,
      lng: 168.940616,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 186,
    ownerId: null,
    name: "The Harvest Shop",
    address: "11 Digger Street, Nightcaps",
    location: {
      lat: -45.971547,
      lng: 168.036222,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 187,
    ownerId: null,
    name: "The Carrot Patch",
    address: "58 Raiha Street, Porirua",
    location: {
      lat: -41.14846,
      lng: 174.831728,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 188,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "26 Corban Avenue, Auckland",
    location: {
      lat: -36.893036,
      lng: 174.628386,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "raspberries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 189,
    ownerId: null,
    name: "Garden Delights",
    address: "13 Dufferin Street, Wellington",
    location: {
      lat: -41.30108,
      lng: 174.781597,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 191,
    ownerId: null,
    name: "Fruitful Delights",
    address: "Woodlands Morton Mains Road, Invercargill",
    location: {
      lat: -46.35864,
      lng: 168.558137,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 193,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "Cameron Street, Waimate",
    location: {
      lat: -44.731442,
      lng: 171.052432,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Asparagus",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Broccoli",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 194,
    ownerId: null,
    name: "Juicy Delights",
    address: "Fuller Street, Kaiapoi",
    location: {
      lat: -43.384361,
      lng: 172.654115,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 195,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "2 Station Street, Alexandra",
    location: {
      lat: -45.249273,
      lng: 169.396538,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "orange",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 196,
    ownerId: null,
    name: "The Veggie Patch",
    address: "6 Stuart Road, Ranfurly",
    location: {
      lat: -45.134172,
      lng: 170.096601,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "blackberry",
        amount: "each",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 197,
    ownerId: null,
    name: "The Garden Market",
    address: "36 Usk Street, Oamaru",
    location: {
      lat: -45.092549,
      lng: 170.970448,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Cucumber",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 198,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "83 High Street, Ashburton",
    location: {
      lat: -43.804883,
      lng: 171.93764,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 200,
    ownerId: null,
    name: "Veggie Delight",
    address: "13 Hunters Road, Diamond Harbour",
    location: {
      lat: -43.629962,
      lng: 172.726705,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "cherry",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 202,
    ownerId: null,
    name: "Lisa's Garden",
    address: "21 Durham Street, Invercargill",
    location: {
      lat: -46.375658,
      lng: 168.346366,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "orange",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "mandarins",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 203,
    ownerId: null,
    name: "The Veggie Patch",
    address: "Kingston-Garston Highway State Highway 6, Garston",
    location: {
      lat: -45.464451,
      lng: 168.689209,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Cauliflower",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "grapes",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 204,
    ownerId: null,
    name: "Ben's Harvest",
    address: "18 Stewart Street, Balclutha",
    location: {
      lat: -46.240837,
      lng: 169.737186,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 205,
    ownerId: null,
    name: "Fruitopia",
    address: "43 Elm Row, Dunedin",
    location: {
      lat: -45.875888,
      lng: 170.497257,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 206,
    ownerId: null,
    name: "The Orange Grove",
    address: "Moturata Road, Brighton",
    location: {
      lat: -46.071794,
      lng: 170.194988,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 208,
    ownerId: null,
    name: "Fresh Produce",
    address: "279 Shanks Road, Gore",
    location: {
      lat: -46.251607,
      lng: 168.856132,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 209,
    ownerId: null,
    name: "Nature's Bounty",
    address: "244 Argyle Otahuti Road, Waianiwa",
    location: {
      lat: -46.296381,
      lng: 168.252395,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 210,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "121 Herbert Street, Invercargill",
    location: {
      lat: -46.395359,
      lng: 168.354578,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 211,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "22 Leamington Street, Waikaia",
    location: {
      lat: -45.723914,
      lng: 168.848074,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Leek",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 212,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "120 Kitchener Street, Gore",
    location: {
      lat: -46.108154,
      lng: 168.927419,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 213,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "103 Dorie School Road, Ashburton",
    location: {
      lat: -43.865175,
      lng: 172.11665,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 214,
    ownerId: null,
    name: "Fresh Produce",
    address: "14 Fairfield Road, Ashburton",
    location: {
      lat: -43.870492,
      lng: 171.815595,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 216,
    ownerId: null,
    name: "Fruit Emporium",
    address: "State Highway 6, Franz Josef",
    location: {
      lat: -43.374446,
      lng: 170.180408,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 217,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "85 Homebush Road, Glentunnel",
    location: {
      lat: -43.482047,
      lng: 171.932435,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 218,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "1 Jetty Road, Governors Bay",
    location: {
      lat: -43.623986,
      lng: 172.64999,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 219,
    ownerId: null,
    name: "The Orange Grove",
    address: "Oban Street, Glenorchy",
    location: {
      lat: -44.85065,
      lng: 168.38703,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 220,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "2250 Winton-Hedgehope Highway, Invercargill",
    location: {
      lat: -46.207473,
      lng: 168.542016,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 221,
    ownerId: null,
    name: "Garden Delights",
    address: "Knapdale Road, Gore",
    location: {
      lat: -46.009975,
      lng: 168.918606,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 222,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "41 Tahuna Road, Dunedin",
    location: {
      lat: -45.903233,
      lng: 170.524692,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 223,
    ownerId: null,
    name: "The Fruit Stand",
    address: "Sussex Street, Tapanui",
    location: {
      lat: -45.941742,
      lng: 169.260477,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 224,
    ownerId: null,
    name: "Anna's Greenhouse",
    address: "2812 Tarras-Cromwell Road, Tarras",
    location: {
      lat: -44.837524,
      lng: 169.412277,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 225,
    ownerId: null,
    name: "The Green Grocer",
    address: "Eglinton Street, Winton",
    location: {
      lat: -46.148076,
      lng: 168.326786,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 227,
    ownerId: null,
    name: "Garden Bounty",
    address: "263 Broadway Avenue, Palmerston North",
    location: {
      lat: -40.349801,
      lng: 175.621747,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Carrot",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "blueberry",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 228,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "Joyce Crescent, Greymouth",
    location: {
      lat: -42.466692,
      lng: 171.197272,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 229,
    ownerId: null,
    name: "Fresh and Local",
    address: "Jacksons Bay Road, Haast",
    location: {
      lat: -43.940784,
      lng: 168.857148,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 230,
    ownerId: null,
    name: "The Radish Room",
    address: "8 Cheltenham Street, Hanmer Springs",
    location: {
      lat: -42.521958,
      lng: 172.831496,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "orange",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 231,
    ownerId: null,
    name: "Emma's Orchard",
    address: "19 Maria Street, Lumsden",
    location: {
      lat: -45.740712,
      lng: 168.448531,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 232,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "9 Chalmers Place, Arrowtown",
    location: {
      lat: -44.948448,
      lng: 168.838744,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 233,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "Ferguson Street, Warrington",
    location: {
      lat: -45.709508,
      lng: 170.595678,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Green Beans",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 234,
    ownerId: null,
    name: "Harvest Fresh",
    address: "8 Mihiwaka Station Road, Purakaunui",
    location: {
      lat: -45.772776,
      lng: 170.631812,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "raspberries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 235,
    ownerId: null,
    name: "The Veggie Patch",
    address: "8 Wanaka Street, Dunedin",
    location: {
      lat: -45.864944,
      lng: 170.555576,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 236,
    ownerId: null,
    name: "The Fruit Basket",
    address: "96 Signal Hill Road, Dunedin",
    location: {
      lat: -45.853619,
      lng: 170.533006,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "blueberries",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 237,
    ownerId: null,
    name: "Fresh and Local",
    address: "31 Jed Street, Invercargill",
    location: {
      lat: -46.411325,
      lng: 168.357545,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 238,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "91 Chelmsford Street, Invercargill",
    location: {
      lat: -46.39323,
      lng: 168.366486,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 239,
    ownerId: null,
    name: "Fresh Harvest",
    address: "56 Flora Road, Invercargill",
    location: {
      lat: -46.329975,
      lng: 168.348432,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 240,
    ownerId: null,
    name: "Garden Bounty",
    address: "State Highway 94, Te Anau",
    location: {
      lat: -45.544994,
      lng: 167.894436,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 241,
    ownerId: null,
    name: "The Produce Stop",
    address: "131 Queen Street, Balfour",
    location: {
      lat: -45.842766,
      lng: 168.585454,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Leek",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 242,
    ownerId: null,
    name: "The Fruit Basket",
    address: "24 McCaughan Street, Browns",
    location: {
      lat: -46.149181,
      lng: 168.422707,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "raspberries",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 243,
    ownerId: null,
    name: "Juicy Delights",
    address: "50 Kelvin Street, Timaru",
    location: {
      lat: -44.378511,
      lng: 171.225105,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 244,
    ownerId: null,
    name: "Fruitopia",
    address: "Wilkin Street, Temuka",
    location: {
      lat: -44.244131,
      lng: 171.284601,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 247,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "87 Church Street, Mosgiel",
    location: {
      lat: -45.881293,
      lng: 170.354878,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 248,
    ownerId: null,
    name: "Garden Grove",
    address: "1 Charles Street, Weston",
    location: {
      lat: -45.078621,
      lng: 170.918495,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 249,
    ownerId: null,
    name: "The Produce Stand",
    address: "29 Afghan Street, Pleasant Point",
    location: {
      lat: -44.26184,
      lng: 171.131708,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 250,
    ownerId: null,
    name: "The Carrot Patch",
    address: "30 Ludstone Road, Kaikoura",
    location: {
      lat: -42.399981,
      lng: 173.675501,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 252,
    ownerId: null,
    name: "The Orange Grove",
    address: "Nile Street, Nelson",
    location: {
      lat: -41.277564,
      lng: 173.28919,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 253,
    ownerId: null,
    name: "The Produce Stop",
    address: "24 A Brougham Street, Westport",
    location: {
      lat: -41.754884,
      lng: 171.605557,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 254,
    ownerId: null,
    name: "Fresh Harvest",
    address: "5 Hughes Street, Waimate",
    location: {
      lat: -44.729133,
      lng: 171.038642,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "blueberry",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 255,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "25 John Street, Waimate",
    location: {
      lat: -44.736306,
      lng: 171.046665,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 256,
    ownerId: null,
    name: "Garden Grove",
    address: "2 Loffhagen Drive, Waipara",
    location: {
      lat: -43.053621,
      lng: 172.762053,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 258,
    ownerId: null,
    name: "Veggie Delight",
    address: "65 Scally Road, Whataroa",
    location: {
      lat: -43.262545,
      lng: 170.361348,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "blueberries",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "mandarins",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 259,
    ownerId: null,
    name: "Garden Grove",
    address: "26 Arthur Street, Dunedin",
    location: {
      lat: -45.872617,
      lng: 170.49515,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 260,
    ownerId: null,
    name: "The Fruit Farm",
    address: "Main Road, Dunedin",
    location: {
      lat: -45.903518,
      lng: 170.425204,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 261,
    ownerId: null,
    name: "Fruit Haven",
    address: "135 Richardson Street, Dunedin",
    location: {
      lat: -45.908179,
      lng: 170.493124,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 262,
    ownerId: null,
    name: "Veggie Delight",
    address: "Kilgour Street, Waihola",
    location: {
      lat: -46.021197,
      lng: 170.099846,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 263,
    ownerId: null,
    name: "Garden Grove",
    address: "22 Koi Flat Road, Waikoikoi",
    location: {
      lat: -46.007622,
      lng: 169.153397,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 264,
    ownerId: null,
    name: "Emma's Orchard",
    address: "6 Malloch Street, Waikouaiti",
    location: {
      lat: -45.596272,
      lng: 170.673457,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 265,
    ownerId: null,
    name: "Harvest Fresh",
    address: "63 North Road, Dunedin",
    location: {
      lat: -45.853387,
      lng: 170.520981,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 266,
    ownerId: null,
    name: "The Farm Stand",
    address: "Main Road, Upper Moutere",
    location: {
      lat: -41.270234,
      lng: 173.004993,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 267,
    ownerId: null,
    name: "Fruitful Delights",
    address: "66 Edward Street, Wakefield",
    location: {
      lat: -41.407999,
      lng: 173.044337,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 268,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "Derby Street, Westport",
    location: {
      lat: -41.76294,
      lng: 171.608386,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 271,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "25A Arun Street, Oamaru",
    location: {
      lat: -45.105905,
      lng: 170.962027,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 273,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "Lanark Street, Balclutha",
    location: {
      lat: -46.240495,
      lng: 169.742709,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Carrot",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 274,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "Halsey Street, Clinton",
    location: {
      lat: -46.200886,
      lng: 169.381165,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 275,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "2155 Clutha Valley Road, Greenfield",
    location: {
      lat: -46.09359,
      lng: 169.550606,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 276,
    ownerId: null,
    name: "Fruit Haven",
    address: "25 Blyth Street, Clyde",
    location: {
      lat: -45.191106,
      lng: 169.319284,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "watermelon",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 278,
    ownerId: null,
    name: "Fresh Harvest",
    address: "99 Stevenson Avenue, Port Chalmers",
    location: {
      lat: -45.819742,
      lng: 170.601212,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "grapes",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 280,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Rata Street, Lower Hutt",
    location: {
      lat: -41.257632,
      lng: 174.938944,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Green Beans",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Onion",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 282,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "56 Palmer Crescent, Upper Hutt",
    location: {
      lat: -41.139254,
      lng: 175.0318,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "orange",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "apples",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 283,
    ownerId: null,
    name: "Juicy Delights",
    address: "Pine Avenue, Upper Hutt",
    location: {
      lat: -41.123463,
      lng: 175.068515,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 284,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "21 Albert Street, Pahiatua",
    location: {
      lat: -40.451536,
      lng: 175.839089,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "avocado",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 287,
    ownerId: null,
    name: "The Produce Stop",
    address: "Gilling Place, Cromwell",
    location: {
      lat: -45.043384,
      lng: 169.186586,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 289,
    ownerId: null,
    name: "The Green Market",
    address: "Pembroke Street, Oamaru",
    location: {
      lat: -45.075693,
      lng: 170.984299,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 290,
    ownerId: null,
    name: "The Veggie Patch",
    address: "Torridge Street, Oamaru",
    location: {
      lat: -45.091738,
      lng: 170.971467,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "potato",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 291,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "17 Papakaio Road, Oamaru",
    location: {
      lat: -44.989901,
      lng: 170.979614,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 293,
    ownerId: null,
    name: "Veggie Delight",
    address: "Swansea Street, Middlemarch",
    location: {
      lat: -45.504741,
      lng: 170.119398,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 295,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Marslin Street, Alexandra",
    location: {
      lat: -45.243476,
      lng: 169.388799,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 296,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "18 Sunderland Street, Waitahuna",
    location: {
      lat: -45.986673,
      lng: 169.758256,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "coconut",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 297,
    ownerId: null,
    name: "The Farmer's Market",
    address: "30A Albertson Avenue, Port Chalmers",
    location: {
      lat: -45.821029,
      lng: 170.617507,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "coconut",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 299,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "Frances Street, Balclutha",
    location: {
      lat: -46.246557,
      lng: 169.72508,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "apricot",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 302,
    ownerId: null,
    name: "Fresh Harvest",
    address: "1017 Ida Valley-Omakau Road, Oturehua",
    location: {
      lat: -45.137217,
      lng: 169.696295,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 303,
    ownerId: null,
    name: "The Fruit Farm",
    address: "496 Island Road, Oxford",
    location: {
      lat: -43.299033,
      lng: 172.071832,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 305,
    ownerId: null,
    name: "The Radish Room",
    address: "Partridge Street, Lower Hutt",
    location: {
      lat: -41.172119,
      lng: 174.963542,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 306,
    ownerId: null,
    name: "The Green Market",
    address: "137 Dowse Drive, Lower Hutt",
    location: {
      lat: -41.209627,
      lng: 174.87814,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 309,
    ownerId: null,
    name: "The Orange Grove",
    address: "90 Cleghorn Street, Blenheim",
    location: {
      lat: -41.530202,
      lng: 173.953141,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 310,
    ownerId: null,
    name: "Harvest Fresh",
    address: "33 Britannia Street, Lower Hutt",
    location: {
      lat: -41.223267,
      lng: 174.880174,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 312,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "52 Ferry Road, Spring Creek",
    location: {
      lat: -41.458482,
      lng: 173.968679,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "gooseberry",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 313,
    ownerId: null,
    name: "Juicy Delights",
    address: "State Highway 8, Omarama",
    location: {
      lat: -44.48905,
      lng: 169.962015,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 314,
    ownerId: null,
    name: "Lisa's Garden",
    address: "23 Princes Street, Waikari",
    location: {
      lat: -42.969376,
      lng: 172.700677,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 319,
    ownerId: null,
    name: "Nature's Bounty",
    address: "11 Montrose Street, Waiau",
    location: {
      lat: -42.653683,
      lng: 173.04201,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "apples",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 320,
    ownerId: null,
    name: "Fresh and Local",
    address: "1139 Hakataramea Highway, Waimate",
    location: {
      lat: -44.790963,
      lng: 170.927483,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 322,
    ownerId: null,
    name: "Fruitful Delights",
    address: "50 Nicholson Road, Wellington",
    location: {
      lat: -41.249506,
      lng: 174.79143,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 323,
    ownerId: null,
    name: "Fruitful Delights",
    address: "40 Taft Street, Wellington",
    location: {
      lat: -41.308432,
      lng: 174.763516,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 324,
    ownerId: null,
    name: "Fruitful Delights",
    address: "Omapere Street, Porirua",
    location: {
      lat: -41.121953,
      lng: 174.881475,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 325,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Ranui Terrace, Wellington",
    location: {
      lat: -41.163939,
      lng: 174.832994,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 326,
    ownerId: null,
    name: "Fresh and Local",
    address: "69 Glen Road, Lower Hutt",
    location: {
      lat: -41.172627,
      lng: 174.988098,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 328,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "559 Woodbury Road, Geraldine",
    location: {
      lat: -44.034925,
      lng: 171.206998,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 329,
    ownerId: null,
    name: "Garden Bounty",
    address: "Main North Road, Woodend",
    location: {
      lat: -43.324564,
      lng: 172.665404,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "cherry",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 333,
    ownerId: null,
    name: "The Harvest Shop",
    address: "48 Queen Street, Albury",
    location: {
      lat: -44.230478,
      lng: 170.87061,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 334,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "110 Harrison Street, Ashburton",
    location: {
      lat: -43.885885,
      lng: 171.741452,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 336,
    ownerId: null,
    name: "Fresh Harvest",
    address: "Kura Street, Porirua",
    location: {
      lat: -41.111639,
      lng: 174.840144,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 337,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "Homedale Road, Lower Hutt",
    location: {
      lat: -41.275343,
      lng: 174.955785,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 338,
    ownerId: null,
    name: "Garden Delights",
    address: "Hardy Street, Lower Hutt",
    location: {
      lat: -41.21539,
      lng: 174.924381,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 339,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "82 Langdale Road, Masterton",
    location: {
      lat: -40.956185,
      lng: 176.036352,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 340,
    ownerId: null,
    name: "Fresh Harvest",
    address: "168 Seatoun Heights Road, Wellington",
    location: {
      lat: -41.312846,
      lng: 174.827109,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 341,
    ownerId: null,
    name: "The Fruit Farm",
    address: "193 Nayland Road, Nelson",
    location: {
      lat: -41.306113,
      lng: 173.232856,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 342,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "Ventry Street, Alexandra",
    location: {
      lat: -45.255325,
      lng: 169.389801,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 345,
    ownerId: null,
    name: "Fruit Zone",
    address: "299 Karori Road, Wellington",
    location: {
      lat: -41.28588,
      lng: 174.734099,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 346,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "Flower Pot-Glory Road, Chatham Islands",
    location: {
      lat: -43.93316,
      lng: -176.234694,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "cherry",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 347,
    ownerId: null,
    name: "Green Leaf",
    address: "Moorhouse Street, Ross",
    location: {
      lat: -42.897857,
      lng: 170.816761,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 348,
    ownerId: null,
    name: "Emma's Orchard",
    address: "Campbell Street, Duntroon",
    location: {
      lat: -44.856037,
      lng: 170.686398,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 349,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "11 Cemetery Road, Mosgiel",
    location: {
      lat: -45.889789,
      lng: 170.347121,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 350,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "181 Roxburgh Street, Tapanui",
    location: {
      lat: -45.839156,
      lng: 169.273189,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 351,
    ownerId: null,
    name: "Fresh and Local",
    address: "Wakanui School Road, Ashburton",
    location: {
      lat: -43.973865,
      lng: 171.822857,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 353,
    ownerId: null,
    name: "Fresh and Local",
    address: "Weedons Ross Road, West Melton",
    location: {
      lat: -43.521443,
      lng: 172.369386,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 354,
    ownerId: null,
    name: "Veggie Delight",
    address: "Short Street, Maheno",
    location: {
      lat: -45.167295,
      lng: 170.834255,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 355,
    ownerId: null,
    name: "Emma's Orchard",
    address: "31 Rata Road, Wanaka",
    location: {
      lat: -44.234013,
      lng: 169.233666,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Kale",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Leek",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 357,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "71 George Street, Rotherham",
    location: {
      lat: -42.698452,
      lng: 172.944205,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 360,
    ownerId: null,
    name: "The Fruit Basket",
    address: "Main Road, Canvastown",
    location: {
      lat: -41.288827,
      lng: 173.668124,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 361,
    ownerId: null,
    name: "Fruit Frenzy",
    address: "250 Hampden Street, Nelson",
    location: {
      lat: -41.284804,
      lng: 173.277316,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 362,
    ownerId: null,
    name: "The Green Spot",
    address: "800 State Highway 6, Nelson",
    location: {
      lat: -41.216183,
      lng: 173.394417,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "potato",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Cauliflower",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 364,
    ownerId: null,
    name: "Mike's Produce",
    address: "Boundary Road, Ashburton",
    location: {
      lat: -43.979123,
      lng: 171.683118,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 366,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "1 School Road, Tai Tapu",
    location: {
      lat: -43.662761,
      lng: 172.550407,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 367,
    ownerId: null,
    name: "Fresh Produce",
    address: "51 Brucefield Avenue, Ashburton",
    location: {
      lat: -43.896402,
      lng: 171.765981,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "apples",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 368,
    ownerId: null,
    name: "Ben's Harvest",
    address: "144 Cass Street, Ashburton",
    location: {
      lat: -43.901069,
      lng: 171.758827,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 370,
    ownerId: null,
    name: "Juicy Delights",
    address: "Harlech Street, Oamaru",
    location: {
      lat: -45.078029,
      lng: 170.982726,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 371,
    ownerId: null,
    name: "The Farm Stand",
    address: "41-47 Norwich Street, Hampden",
    location: {
      lat: -45.325318,
      lng: 170.815932,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 373,
    ownerId: null,
    name: "Juicy Delights",
    address: "Fyfe Place, Kakanui",
    location: {
      lat: -45.187258,
      lng: 170.892819,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 375,
    ownerId: null,
    name: "The Green Spot",
    address: "6 Hyde Street, Palmerston",
    location: {
      lat: -45.381023,
      lng: 170.428335,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "strawberries",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 376,
    ownerId: null,
    name: "Nature's Bounty",
    address: "Teviot Road, Millers Flat",
    location: {
      lat: -45.659482,
      lng: 169.409728,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "apples",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 377,
    ownerId: null,
    name: "The Veggie Patch",
    address: "74 Argyle Street, Mosgiel",
    location: {
      lat: -45.87964,
      lng: 170.346074,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 378,
    ownerId: null,
    name: "The Garden Market",
    address: "93 Tasman Street, Nelson",
    location: {
      lat: -41.273325,
      lng: 173.291893,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 379,
    ownerId: null,
    name: "The Green Spot",
    address: "State Highway 65, Maruia",
    location: {
      lat: -42.187481,
      lng: 172.220716,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 381,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "49 Winter Street, Ashburton",
    location: {
      lat: -43.9024,
      lng: 171.742789,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "cherry",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 382,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "33 Huirapa Street, Temuka",
    location: {
      lat: -44.255105,
      lng: 171.270848,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 383,
    ownerId: null,
    name: "Ben's Harvest",
    address: "56 Queen Street, Wairoa",
    location: {
      lat: -39.034809,
      lng: 177.420177,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 384,
    ownerId: null,
    name: "Garden Bounty",
    address: "209 Wellington Road, Lower Hutt",
    location: {
      lat: -41.24196,
      lng: 174.944295,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 385,
    ownerId: null,
    name: "The Harvest Shop",
    address: "11 Seymour Street, Blenheim",
    location: {
      lat: -41.510622,
      lng: 173.954907,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Cabbage",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "pumpkin",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 387,
    ownerId: null,
    name: "The Farm Stand",
    address: "Holloway Street, Carterton",
    location: {
      lat: -41.026465,
      lng: 175.530685,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "apples",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 388,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "27 Elizabeth Street, Wellington",
    location: {
      lat: -41.296017,
      lng: 174.7845,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 389,
    ownerId: null,
    name: "Garden Delights",
    address: "Kings Crescent, Lower Hutt",
    location: {
      lat: -41.208387,
      lng: 174.912083,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Green Beans",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "cherries",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "potato",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 390,
    ownerId: null,
    name: "The Green Grocer",
    address: "Waiwhetu Road, Lower Hutt",
    location: {
      lat: -41.209258,
      lng: 174.933369,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 392,
    ownerId: null,
    name: "Farm to Table",
    address: "Te Whiti Road, Gladstone",
    location: {
      lat: -41.080437,
      lng: 175.654504,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "avocado",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 395,
    ownerId: null,
    name: "Veggie Delight",
    address: "25 Hastings Street, Southbridge",
    location: {
      lat: -43.809042,
      lng: 172.251661,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "apricot",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 398,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "North Road, Chatham Islands",
    location: {
      lat: -43.512324,
      lng: -176.527573,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 401,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "2 Lawcocks Road, Amberley",
    location: {
      lat: -43.152379,
      lng: 172.723044,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 402,
    ownerId: null,
    name: "The Green Market",
    address: "East Street, Greytown",
    location: {
      lat: -41.082514,
      lng: 175.460429,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "orange",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 403,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "Rimu Street, Wellington",
    location: {
      lat: -41.166068,
      lng: 174.822493,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 405,
    ownerId: null,
    name: "Veggie World",
    address: "Aorangi Crescent, Lake Tekapo",
    location: {
      lat: -44.005064,
      lng: 170.4748,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 406,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "Church Street, Ashburton",
    location: {
      lat: -43.730734,
      lng: 171.778572,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 408,
    ownerId: null,
    name: "Nature's Bounty",
    address: "12 Makikihi Station Road, Makikihi",
    location: {
      lat: -44.632039,
      lng: 171.142241,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 409,
    ownerId: null,
    name: "The Green Grocer",
    address: "78 Ashburton Gorge Road, Ashburton",
    location: {
      lat: -43.704789,
      lng: 171.402382,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Onion",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 410,
    ownerId: null,
    name: "Nature's Bounty",
    address: "5 Sebastopol Drive, Aoraki, Mt Cook",
    location: {
      lat: -43.738181,
      lng: 170.099856,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "mandarins",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 411,
    ownerId: null,
    name: "Veggie Delight",
    address: "110 Houghton Bay Road, Wellington",
    location: {
      lat: -41.334153,
      lng: 174.78765,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 412,
    ownerId: null,
    name: "Anna's Greenhouse",
    address: "990 Kahutara Road, Featherston",
    location: {
      lat: -41.227188,
      lng: 175.340717,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 413,
    ownerId: null,
    name: "The Veggie Cart",
    address: "Allington Road, Wellington",
    location: {
      lat: -41.289454,
      lng: 174.722326,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 418,
    ownerId: null,
    name: "The Green Grocer",
    address: "King Street, Rangiora",
    location: {
      lat: -43.30538,
      lng: 172.590275,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 421,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "54 Heaton Street, Timaru",
    location: {
      lat: -44.401811,
      lng: 171.248548,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "potato",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 422,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "603 Upper Sefton Road, Sefton",
    location: {
      lat: -43.246713,
      lng: 172.672877,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "pumpkin",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 423,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "2 Tawera Lane, Springfield",
    location: {
      lat: -43.337474,
      lng: 171.9325,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 424,
    ownerId: null,
    name: "The Beet Boutique",
    address: "Leeston Road, Springston",
    location: {
      lat: -43.644586,
      lng: 172.425734,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "grapes",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 425,
    ownerId: null,
    name: "The Radish Room",
    address: "McPhee Street, Dannevirke",
    location: {
      lat: -40.209894,
      lng: 176.102267,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 426,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "6 Russell Street, Waipukurau",
    location: {
      lat: -39.994546,
      lng: 176.559062,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 427,
    ownerId: null,
    name: "Fresh Produce",
    address: "52 Taieri Crescent, Lower Hutt",
    location: {
      lat: -41.180638,
      lng: 174.933121,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "kiwifruit",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Leek",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 429,
    ownerId: null,
    name: "The Carrot Patch",
    address: "Redwood Street, Upper Hutt",
    location: {
      lat: -41.122612,
      lng: 175.059626,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 431,
    ownerId: null,
    name: "The Beet Boutique",
    address: "2 Makuri Street, Mangatainoka",
    location: {
      lat: -40.417309,
      lng: 175.862935,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 432,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "32 Hillside Drive, Upper Hutt",
    location: {
      lat: -41.113502,
      lng: 175.099718,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 435,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "Muritai Road, Lower Hutt",
    location: {
      lat: -41.291865,
      lng: 174.89712,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 436,
    ownerId: null,
    name: "The Green Spot",
    address: "Rimu Street, Timaru",
    location: {
      lat: -44.390404,
      lng: 171.213466,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 437,
    ownerId: null,
    name: "The Veggie Shack",
    address: "50 Reed Street, Ashburton",
    location: {
      lat: -44.000913,
      lng: 171.565272,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 438,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "278 Williams Street, Kaiapoi",
    location: {
      lat: -43.375957,
      lng: 172.663615,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "orange",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 441,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "Main Road, Methven",
    location: {
      lat: -43.639725,
      lng: 171.647461,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 442,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "Blakes Road, Prebbleton",
    location: {
      lat: -43.577074,
      lng: 172.513059,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 443,
    ownerId: null,
    name: "The Veggie Shack",
    address: "Dunford Street, Rakaia",
    location: {
      lat: -43.751468,
      lng: 172.022787,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 447,
    ownerId: null,
    name: "Garden Bounty",
    address: "160 Tory Street, Wellington",
    location: {
      lat: -41.297617,
      lng: 174.778692,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "watermelon",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "strawberries",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 448,
    ownerId: null,
    name: "The Veggie Patch",
    address: "200 Newlands Road, Wellington",
    location: {
      lat: -41.224718,
      lng: 174.820918,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 449,
    ownerId: null,
    name: "Nature's Bounty",
    address: "45 Abbott Street, Wellington",
    location: {
      lat: -41.249282,
      lng: 174.776172,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 450,
    ownerId: null,
    name: "Juicy Delights",
    address: "19 Torquay Street, Kaikoura",
    location: {
      lat: -42.408026,
      lng: 173.684082,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 451,
    ownerId: null,
    name: "Juicy Delights",
    address: "425 Schoolhouse Road, Kaikoura",
    location: {
      lat: -42.371694,
      lng: 173.638327,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "blueberries",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 453,
    ownerId: null,
    name: "Green Valley",
    address: "21 Cargill Road, Barrytown",
    location: {
      lat: -42.244796,
      lng: 171.324208,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 457,
    ownerId: null,
    name: "The Radish Room",
    address: "794 Cannington Road, Cannington",
    location: {
      lat: -44.357499,
      lng: 170.93677,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 458,
    ownerId: null,
    name: "Farm to Table",
    address: "1051 Ealing Montalto Road, Carew",
    location: {
      lat: -43.960073,
      lng: 171.356948,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 459,
    ownerId: null,
    name: "Fresh and Local",
    address: "14 Lismore Mayfield Road, Ashburton",
    location: {
      lat: -43.823442,
      lng: 171.421329,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Kale",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 461,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "813 Loburn Whiterock Road, Loburn North",
    location: {
      lat: -43.207605,
      lng: 172.493841,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 464,
    ownerId: null,
    name: "Fruit Haven",
    address: "26 Marshall Street, Rangiora",
    location: {
      lat: -43.321616,
      lng: 172.599819,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 465,
    ownerId: null,
    name: "Fruit Haven",
    address: "21 Blue Cliffs Road, St Andrews",
    location: {
      lat: -44.528475,
      lng: 171.188022,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "coconut",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 466,
    ownerId: null,
    name: "The Green Spot",
    address: "Selwyn Street, Leeston",
    location: {
      lat: -43.760752,
      lng: 172.297571,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "gooseberry",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 467,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "130 North Belt, Lincoln",
    location: {
      lat: -43.637105,
      lng: 172.487099,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 468,
    ownerId: null,
    name: "The Farmer's Market",
    address: "36 Waipipi Road, Masterton",
    location: {
      lat: -40.896099,
      lng: 175.661464,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 470,
    ownerId: null,
    name: "The Green Spot",
    address: "15 Charles Street, Takapau",
    location: {
      lat: -40.025336,
      lng: 176.34649,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 472,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "Fox Street, Greymouth",
    location: {
      lat: -42.440339,
      lng: 171.211019,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 476,
    ownerId: null,
    name: "Garden Grove",
    address: "261 Jacksons Road, Kaiapoi",
    location: {
      lat: -43.370163,
      lng: 172.590554,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 477,
    ownerId: null,
    name: "Juicy Delights",
    address: "73 Hodgsons Road, Rangiora",
    location: {
      lat: -43.250122,
      lng: 172.530073,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "grapes",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "Leek",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "pumpkin",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 479,
    ownerId: null,
    name: "Fruitful Delights",
    address: "230 Park Street, Hokitika",
    location: {
      lat: -42.719004,
      lng: 170.980595,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "mandarins",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 481,
    ownerId: null,
    name: "The Garden Market",
    address: "Kaingaroa Road, Chatham Islands",
    location: {
      lat: -43.735686,
      lng: -176.26665,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 483,
    ownerId: null,
    name: "Garden Grove",
    address: "10 Durham Avenue, Napier",
    location: {
      lat: -39.508991,
      lng: 176.86843,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 484,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "Te Awa Avenue, Napier",
    location: {
      lat: -39.511461,
      lng: 176.916673,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 485,
    ownerId: null,
    name: "The Produce Stand",
    address: "164 Porangahau Road, Waipukurau",
    location: {
      lat: -40.00643,
      lng: 176.548378,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Asparagus",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 489,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "Main South Road, Greymouth",
    location: {
      lat: -42.475879,
      lng: 171.18674,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "potato",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 491,
    ownerId: null,
    name: "Fruit Frenzy",
    address: "68 Fifth Street, Kumara",
    location: {
      lat: -42.635661,
      lng: 171.187378,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 492,
    ownerId: null,
    name: "Mike's Produce",
    address: "2548 Bealey Road, Darfield",
    location: {
      lat: -43.53945,
      lng: 171.959653,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "coconut",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 494,
    ownerId: null,
    name: "The Veggie Shack",
    address: "School Lane, Kirwee",
    location: {
      lat: -43.496674,
      lng: 172.218161,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 496,
    ownerId: null,
    name: "Garden Bounty",
    address: "473 Early's Road, Cust",
    location: {
      lat: -43.312457,
      lng: 172.381037,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 498,
    ownerId: null,
    name: "The Radish Room",
    address: "35 Upper Kokatahi Road, Hokitika",
    location: {
      lat: -42.834259,
      lng: 171.03775,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 504,
    ownerId: null,
    name: "The Farmer's Market",
    address: "Boundary Road, Rangiora",
    location: {
      lat: -43.274067,
      lng: 172.596264,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 506,
    ownerId: null,
    name: "The Green Spot",
    address: "Cnr Shands & Robinsons Roads, Rolleston",
    location: {
      lat: -43.602804,
      lng: 172.467945,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 509,
    ownerId: null,
    name: "The Radish Room",
    address: "285 O'Roarkes Road, Rangiora",
    location: {
      lat: -43.312345,
      lng: 172.533986,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 510,
    ownerId: null,
    name: "The Veggie Patch",
    address: "Cook Flat Road, Fox Glacier",
    location: {
      lat: -43.462929,
      lng: 170.008367,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 511,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "187 Greendale Road, Greendale",
    location: {
      lat: -43.572742,
      lng: 172.083957,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "raspberries",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 514,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "2 Rotohiwi Road, Waipukurau",
    location: {
      lat: -40.149885,
      lng: 176.444697,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "apples",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 515,
    ownerId: null,
    name: "The Apple Orchard",
    address: "Motunau Beach, Amberley",
    location: {
      lat: -42.964904,
      lng: 172.977861,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "kiwifruit",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 517,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "Courtney Street, Motueka",
    location: {
      lat: -41.127726,
      lng: 173.008469,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Carrot",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "avocado",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 518,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "115 Mt Brown Road, Amberley",
    location: {
      lat: -43.117264,
      lng: 172.685605,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "mandarins",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 520,
    ownerId: null,
    name: "The Green Grocer",
    address: "10 Heywards Road, Kaiapoi",
    location: {
      lat: -43.405997,
      lng: 172.623356,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 521,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "16 Ross Street, Darfield",
    location: {
      lat: -43.490411,
      lng: 172.106323,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "Onion",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 522,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "21 School Road, Fairlie",
    location: {
      lat: -44.100613,
      lng: 170.826014,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 525,
    ownerId: null,
    name: "Fruitopia",
    address: "225 Nayland Road, Nelson",
    location: {
      lat: -41.307038,
      lng: 173.231984,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "potato",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 526,
    ownerId: null,
    name: "Garden Delights",
    address: "423 High Street, Motueka",
    location: {
      lat: -41.126308,
      lng: 173.010998,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 527,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "601 Main Road, Nelson",
    location: {
      lat: -41.316379,
      lng: 173.230619,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "apples",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 528,
    ownerId: null,
    name: "Veggie Delight",
    address: "69 Muritai Street, Nelson",
    location: {
      lat: -41.286722,
      lng: 173.245319,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 530,
    ownerId: null,
    name: "The Orange Grove",
    address: "Myrtle Street, Lower Hutt",
    location: {
      lat: -41.211464,
      lng: 174.905744,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 533,
    ownerId: null,
    name: "The Harvest Shop",
    address: "9 Phillip Street, Wellington",
    location: {
      lat: -41.222341,
      lng: 174.801906,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 534,
    ownerId: null,
    name: "Fresh and Local",
    address: "11 Mersey Street, Wellington",
    location: {
      lat: -41.337887,
      lng: 174.77506,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 535,
    ownerId: null,
    name: "The Garden Market",
    address: "Main Road, Wellington",
    location: {
      lat: -41.179001,
      lng: 174.824816,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Asparagus",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 536,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "156 Roebuck Road, Gisborne",
    location: {
      lat: -38.662329,
      lng: 178.011292,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 537,
    ownerId: null,
    name: "Farm to Table",
    address: "260 Orchard Road, Hastings",
    location: {
      lat: -39.629217,
      lng: 176.822682,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 538,
    ownerId: null,
    name: "Dave's Veggie Stand",
    address: "517 Wainui Road, Gisborne",
    location: {
      lat: -38.675803,
      lng: 178.045197,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "blueberry",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 539,
    ownerId: null,
    name: "Garden Delights",
    address: "Oxford Street, Wellington",
    location: {
      lat: -41.173149,
      lng: 174.825895,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 540,
    ownerId: null,
    name: "The Carrot Patch",
    address: "59 Randwick Road, Lower Hutt",
    location: {
      lat: -41.229325,
      lng: 174.904637,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 542,
    ownerId: null,
    name: "The Garden Market",
    address: "Irvines Road, Leeston",
    location: {
      lat: -43.667584,
      lng: 172.197107,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 543,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "School Lane, Duvauchelle",
    location: {
      lat: -43.749671,
      lng: 172.932045,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 545,
    ownerId: null,
    name: "Lisa's Garden",
    address: "22 Heath Street, Timaru",
    location: {
      lat: -44.382757,
      lng: 171.193234,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 546,
    ownerId: null,
    name: "Jack's Farm Shop",
    address: "19 Ruane Street, Waimate",
    location: {
      lat: -44.914546,
      lng: 171.098345,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 549,
    ownerId: null,
    name: "Veggie World",
    address: "16 Britannia Street, Lower Hutt",
    location: {
      lat: -41.224085,
      lng: 174.880252,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "avocado",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "Leek",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 550,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "5 Buller Street, Picton",
    location: {
      lat: -41.29381,
      lng: 174.001255,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "raspberries",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "potato",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 551,
    ownerId: null,
    name: "The Fruit Farm",
    address: "137 Main Road, Gisborne",
    location: {
      lat: -38.651239,
      lng: 177.96045,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 555,
    ownerId: null,
    name: "Juicy Delights",
    address: "29 Raumati Street, Matawai",
    location: {
      lat: -38.359795,
      lng: 177.534528,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "potato",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 557,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "Kincaid Road, Kaikoura",
    location: {
      lat: -42.334217,
      lng: 173.704972,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 558,
    ownerId: null,
    name: "The Radish Room",
    address: "112 Tipahi Street, Nelson",
    location: {
      lat: -41.28928,
      lng: 173.267367,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "cherries",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 559,
    ownerId: null,
    name: "Green Leaf",
    address: "4 Greenhill Road, Motueka",
    location: {
      lat: -41.202591,
      lng: 172.875575,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "orange",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "apples",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 560,
    ownerId: null,
    name: "Fruitopia",
    address: "55 Wellington Street, Ashburton",
    location: {
      lat: -43.912534,
      lng: 171.760198,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 561,
    ownerId: null,
    name: "Harvest Fresh",
    address: "School Road, Riwaka",
    location: {
      lat: -41.076405,
      lng: 172.999162,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 562,
    ownerId: null,
    name: "Fruit Zone",
    address: "14 Cambridge Street, Nelson",
    location: {
      lat: -41.33948,
      lng: 173.182011,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "mandarins",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 563,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "111 Ranzau Road, Hope",
    location: {
      lat: -41.348834,
      lng: 173.148589,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 565,
    ownerId: null,
    name: "Fresh Harvest",
    address: "214 Vanguard Street, Nelson",
    location: {
      lat: -41.28377,
      lng: 173.269151,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 566,
    ownerId: null,
    name: "Fruit Zone",
    address: "32 Napier Terrace, Napier",
    location: {
      lat: -39.488524,
      lng: 176.908497,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Kale",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 568,
    ownerId: null,
    name: "Fruit Oasis",
    address: "46 Long Range Road, Waipawa",
    location: {
      lat: -40.050987,
      lng: 176.754079,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 575,
    ownerId: null,
    name: "The Green Grocer",
    address: "Walsh Street, Reefton",
    location: {
      lat: -42.117611,
      lng: 171.867433,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 576,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "1/18 Manuka Street, Nelson",
    location: {
      lat: -41.278585,
      lng: 173.287786,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Eggplant",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 578,
    ownerId: null,
    name: "Emma's Orchard",
    address: "Forest Road, Upper Hutt",
    location: {
      lat: -41.160828,
      lng: 175.015217,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Lettuce",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "orange",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 579,
    ownerId: null,
    name: "The Green Market",
    address: "2782 Lake Ferry Road, Pirinoa",
    location: {
      lat: -41.353011,
      lng: 175.20479,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "apples",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 580,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "349 Hammerichs Road, Rapaura",
    location: {
      lat: -41.473052,
      lng: 173.901391,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 581,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "Salisbury Road, Richmond",
    location: {
      lat: -41.339409,
      lng: 173.193919,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 583,
    ownerId: null,
    name: "The Fruit Stand",
    address: "Cooper Street, Lower Hutt",
    location: {
      lat: -41.177116,
      lng: 174.960972,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "cherry",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 586,
    ownerId: null,
    name: "Farm to Table",
    address: "Beazley Avenue, Wellington",
    location: {
      lat: -41.214565,
      lng: 174.819394,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Broccoli",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "mandarins",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "orange",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 587,
    ownerId: null,
    name: "The Veggie Shack",
    address: "69A Ruahine Street, Palmerston North",
    location: {
      lat: -40.338749,
      lng: 175.622461,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 588,
    ownerId: null,
    name: "The Veggie Cart",
    address: "201 Ruahine Street, Palmerston North",
    location: {
      lat: -40.34576,
      lng: 175.627034,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 589,
    ownerId: null,
    name: "Ben's Harvest",
    address: "417 Aporo Road, Tasman",
    location: {
      lat: -41.188687,
      lng: 173.049043,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "pumpkin",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 590,
    ownerId: null,
    name: "Garden Bounty",
    address: "Cobden Street, Westport",
    location: {
      lat: -41.747607,
      lng: 171.608397,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "avocado",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 591,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "20 Milne Drive, Paraparaumu",
    location: {
      lat: -40.907413,
      lng: 174.996503,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Leek",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 593,
    ownerId: null,
    name: "The Green Market",
    address: "Rata Street, Lower Hutt",
    location: {
      lat: -41.199385,
      lng: 174.956529,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 595,
    ownerId: null,
    name: "The Radish Room",
    address: "Redwood Street, Seddon",
    location: {
      lat: -41.675517,
      lng: 174.072938,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 597,
    ownerId: null,
    name: "The Fruit Basket",
    address: "Whitemans Road, Upper Hutt",
    location: {
      lat: -41.148127,
      lng: 175.012662,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 599,
    ownerId: null,
    name: "Nick's Fruitopia",
    address: "Ruapehu Street, Paraparaumu",
    location: {
      lat: -40.917357,
      lng: 175.008925,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Eggplant",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 600,
    ownerId: null,
    name: "The Green Grocer",
    address: "8 Martin Street, Porirua",
    location: {
      lat: -41.13977,
      lng: 174.84913,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 604,
    ownerId: null,
    name: "The Farm Stand",
    address: "201 Featherston Street, Palmerston North",
    location: {
      lat: -40.35089,
      lng: 175.60348,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 607,
    ownerId: null,
    name: "The Veggie Shack",
    address: "3 Stephenson Street, Blenheim",
    location: {
      lat: -41.517618,
      lng: 173.952782,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 608,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "318 Ngaumutawa Road, Masterton",
    location: {
      lat: -40.960548,
      lng: 175.612664,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Kale",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 613,
    ownerId: null,
    name: "Fruitful Delights",
    address: "Staithes Drive North, Porirua",
    location: {
      lat: -41.112681,
      lng: 174.880045,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 614,
    ownerId: null,
    name: "Fresh Harvest",
    address: "177 South Road, New Plymouth",
    location: {
      lat: -39.073657,
      lng: 174.034114,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 618,
    ownerId: null,
    name: "Ben's Harvest",
    address: "11 School Road, Porirua",
    location: {
      lat: -41.078997,
      lng: 174.866007,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 626,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "25 Charles Street, Masterton",
    location: {
      lat: -40.877917,
      lng: 176.072881,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 628,
    ownerId: null,
    name: "The Fruit Stand",
    address: "Seddon Street, Waikanae",
    location: {
      lat: -40.876317,
      lng: 175.069658,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "coconut",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Cauliflower",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Onion",
        amount: "small bag",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 629,
    ownerId: null,
    name: "Fruitopia",
    address: "282 Waikawa Road, Picton",
    location: {
      lat: -41.271638,
      lng: 174.037993,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "gooseberry",
        amount: "kg",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 630,
    ownerId: null,
    name: "Nature's Bounty",
    address: "Whitney Street, Blenheim",
    location: {
      lat: -41.519959,
      lng: 173.948782,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 631,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "William Street, Lower Hutt",
    location: {
      lat: -41.223419,
      lng: 174.890736,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 633,
    ownerId: null,
    name: "Fruitful Delights",
    address: "146 Mungavin Avenue, Porirua",
    location: {
      lat: -41.140932,
      lng: 174.859128,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 634,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "214-216 Weld Street, Blenheim",
    location: {
      lat: -41.540592,
      lng: 173.955381,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Cauliflower",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 635,
    ownerId: null,
    name: "Emma's Orchard",
    address: "1220 Dovedale Road, Tasman",
    location: {
      lat: -41.287343,
      lng: 172.894626,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Cucumber",
        amount: "small bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 636,
    ownerId: null,
    name: "Sam's Fresh Market",
    address: "10 The Ridgeway, Nelson",
    location: {
      lat: -41.30557,
      lng: 173.253976,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "banana",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 637,
    ownerId: null,
    name: "Fruit Zone",
    address: "83 Torea Street, Granity",
    location: {
      lat: -41.630018,
      lng: 171.85248,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "cherry",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 640,
    ownerId: null,
    name: "The Produce Stop",
    address: "High Street, Renwick",
    location: {
      lat: -41.5082,
      lng: 173.831527,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Cauliflower",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 646,
    ownerId: null,
    name: "The Beet Boutique",
    address: "21 School Road, Blenheim",
    location: {
      lat: -41.523836,
      lng: 173.985019,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 652,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "275 High Street South, Carterton",
    location: {
      lat: -41.033977,
      lng: 175.519194,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 654,
    ownerId: null,
    name: "Fresh and Local",
    address: "190 Naenae Road, Lower Hutt",
    location: {
      lat: -41.201424,
      lng: 174.953131,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cabbage",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 657,
    ownerId: null,
    name: "Juicy Delights",
    address: "52 North Street, Feilding",
    location: {
      lat: -40.214048,
      lng: 175.567391,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "blueberry",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 658,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "96 Shamrock Street, Palmerston North",
    location: {
      lat: -40.362046,
      lng: 175.595603,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "avocado",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "Carrot",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 664,
    ownerId: null,
    name: "Green Valley",
    address: "89 Macarthur Street, Levin",
    location: {
      lat: -40.6189,
      lng: 175.304844,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 666,
    ownerId: null,
    name: "The Green Market",
    address: "18 Fantame Street, Porirua",
    location: {
      lat: -41.134335,
      lng: 174.872214,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "blackberry",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 667,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "Murphys Road, Blenheim",
    location: {
      lat: -41.507008,
      lng: 173.932774,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "small bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 672,
    ownerId: null,
    name: "The Produce Stop",
    address: "30 Morse Street, Blenheim",
    location: {
      lat: -41.562571,
      lng: 173.527347,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 673,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "Duncan Street, Ward",
    location: {
      lat: -41.826488,
      lng: 174.13992,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 680,
    ownerId: null,
    name: "Farm to Table",
    address: "New Renwick Road, Blenheim",
    location: {
      lat: -41.530597,
      lng: 173.896787,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 682,
    ownerId: null,
    name: "The Harvest Shop",
    address: "Hikurangi Street, Upper Hutt",
    location: {
      lat: -41.126527,
      lng: 175.037186,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Cabbage",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 687,
    ownerId: null,
    name: "Garden Delights",
    address: "888 Atawhai Drive, Nelson",
    location: {
      lat: -41.224653,
      lng: 173.322845,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 688,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "56A William Street, Richmond",
    location: {
      lat: -41.341242,
      lng: 173.195159,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 689,
    ownerId: null,
    name: "Fresh Harvest",
    address: "5 Mackenzie Street, Putaruru",
    location: {
      lat: -38.047376,
      lng: 175.77944,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 690,
    ownerId: null,
    name: "Emma's Orchard",
    address: "5 Vardon Street, Hamilton",
    location: {
      lat: -37.76428,
      lng: 175.253233,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Garlic",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 692,
    ownerId: null,
    name: "The Produce Stand",
    address: "47 Main Road, Havelock",
    location: {
      lat: -41.280887,
      lng: 173.766556,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "pumpkin",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 694,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "316 Paton Road, Hope",
    location: {
      lat: -41.369201,
      lng: 173.145106,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-9.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "gooseberry",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 695,
    ownerId: null,
    name: "Fruit Frenzy",
    address: "15 Mahana School Road, Mahana",
    location: {
      lat: -41.26635,
      lng: 173.044234,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 696,
    ownerId: null,
    name: "Lucy's Fruit Basket",
    address: "4 Stafford Drive, Mapua",
    location: {
      lat: -41.246728,
      lng: 173.090942,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 700,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "Galt Street, Hawera",
    location: {
      lat: -39.581158,
      lng: 174.288885,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 701,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "11 Uruti Road, New Plymouth",
    location: {
      lat: -38.944846,
      lng: 174.52966,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "Carrot",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Carrot",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Onion",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Beetroot",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 702,
    ownerId: null,
    name: "The Farm Stand",
    address: "Sanders Avenue, New Plymouth",
    location: {
      lat: -39.072672,
      lng: 174.063478,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "kiwifruit",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "Beetroot",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: true,
  },
  {
    stallId: 704,
    ownerId: null,
    name: "The Garden Market",
    address: "Fitzherbert East Road, Palmerston North",
    location: {
      lat: -40.363624,
      lng: 175.66447,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "banana",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "lemon",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 722,
    ownerId: null,
    name: "Fresh Harvest",
    address: "Bridge Street, Bulls",
    location: {
      lat: -40.168741,
      lng: 175.385156,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 723,
    ownerId: null,
    name: "The Produce Stop",
    address: "55 Herbert Avenue, Palmerston North",
    location: {
      lat: -40.345267,
      lng: 175.584798,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "grapes",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Broccoli",
        amount: "kg",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 726,
    ownerId: null,
    name: "The Carrot Patch",
    address: "Campbells Road, Blenheim",
    location: {
      lat: -41.42944,
      lng: 173.962221,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 727,
    ownerId: null,
    name: "Garden Bounty",
    address: "5668 Kenepuru Road, Picton",
    location: {
      lat: -41.158283,
      lng: 174.044022,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "strawberries",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Carrot",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Leek",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 728,
    ownerId: null,
    name: "Harvest Fresh",
    address: "Te Manuao Road, Otaki",
    location: {
      lat: -40.757712,
      lng: 175.166355,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 729,
    ownerId: null,
    name: "Fresh Harvest",
    address: "106 Ellis Street, Brightwater",
    location: {
      lat: -41.37914,
      lng: 173.112957,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "each",
        price: "$ 2",
      },
      {
        item: "apples",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 731,
    ownerId: null,
    name: "The Orange Grove",
    address: "57 Pine Avenue, Hamilton",
    location: {
      lat: -37.81316,
      lng: 175.288082,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 733,
    ownerId: null,
    name: "Fruitful Harvest",
    address: "15 Durham Street, Nelson",
    location: {
      lat: -41.306739,
      lng: 173.224448,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Eggplant",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 734,
    ownerId: null,
    name: "The Orange Grove",
    address: "111 Haven Road, Nelson",
    location: {
      lat: -41.268292,
      lng: 173.277868,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 735,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "19 Moutere Highway, Tasman",
    location: {
      lat: -41.306922,
      lng: 173.119986,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "cherry",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 736,
    ownerId: null,
    name: "Fresh Harvest",
    address: "8 School Road, Lower Moutere",
    location: {
      lat: -41.154344,
      lng: 172.995271,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "cherries",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "cherries",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "blueberry",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "strawberries",
        amount: "small bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 737,
    ownerId: null,
    name: "The Apple Orchard",
    address: "State Highway 63, Nelson",
    location: {
      lat: -41.801592,
      lng: 172.85158,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 738,
    ownerId: null,
    name: "The Beet Boutique",
    address: "1 Boston Crescent, Hastings",
    location: {
      lat: -39.61362,
      lng: 176.773163,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 739,
    ownerId: null,
    name: "The Fruit Farm",
    address: "1357 Queen Charlotte Drive, Linkwater",
    location: {
      lat: -41.289162,
      lng: 173.87947,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Carrot",
        amount: "bunch",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 741,
    ownerId: null,
    name: "Fruit Zone",
    address: "Dublin Street, Martinborough",
    location: {
      lat: -41.218711,
      lng: 175.452717,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 742,
    ownerId: null,
    name: "The Fruit Stand",
    address: "Albert Street, Eketahuna",
    location: {
      lat: -40.64923,
      lng: 175.709131,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Cabbage",
        amount: "small bag",
        price: "$ 1",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "potato",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 745,
    ownerId: null,
    name: "Fruitful Delights",
    address: "Vickerman Street, Blenheim",
    location: {
      lat: -41.481336,
      lng: 173.968885,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 749,
    ownerId: null,
    name: "Fruit Emporium",
    address: "90 Crown Road, Taupo",
    location: {
      lat: -38.691376,
      lng: 176.100389,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 751,
    ownerId: null,
    name: "Nature's Bounty",
    address: "31 Fifth Avenue, Tauranga",
    location: {
      lat: -37.691996,
      lng: 176.16398,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Beetroot",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "banana",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Cabbage",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Beetroot",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 754,
    ownerId: null,
    name: "Fruit Oasis",
    address: "Mclauchlan Street, Blenheim",
    location: {
      lat: -41.504564,
      lng: 173.944347,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 758,
    ownerId: null,
    name: "Lisa's Garden",
    address: "440 Dalefield Road, Carterton",
    location: {
      lat: -41.025385,
      lng: 175.477597,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Carrot",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Asparagus",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "kiwifruit",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "kiwifruit",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 764,
    ownerId: null,
    name: "Sara's Salad Bar",
    address: "Moffat Road, Tokoroa",
    location: {
      lat: -38.236275,
      lng: 175.882807,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 765,
    ownerId: null,
    name: "Juicy Delights",
    address: "150 Wellington Street, Opotiki",
    location: {
      lat: -38.014704,
      lng: 177.293762,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 767,
    ownerId: null,
    name: "Fruit Frenzy",
    address: "2986 Broadlands Road, Reporoa",
    location: {
      lat: -38.511393,
      lng: 176.332745,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 784,
    ownerId: null,
    name: "Fruitopia",
    address: "130 Pt England Road, Auckland",
    location: {
      lat: -36.882824,
      lng: 174.866626,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "100 g",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 785,
    ownerId: null,
    name: "The Green Grocer",
    address: "44 Curran Street, Auckland",
    location: {
      lat: -36.842089,
      lng: 174.738996,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherry",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "orange",
        amount: "bunch",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 787,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Hutchinson Avenue, Auckland",
    location: {
      lat: -36.914497,
      lng: 174.681073,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "blueberry",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "watermelon",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 791,
    ownerId: null,
    name: "Ruby's Orchard Lane",
    address: "842 Galatea Road, Whakatane",
    location: {
      lat: -38.108728,
      lng: 176.816074,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 794,
    ownerId: null,
    name: "Fruit Emporium",
    address: "24 Te Teko Road, Te Teko",
    location: {
      lat: -38.0342,
      lng: 176.797505,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "blueberry",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "banana",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 795,
    ownerId: null,
    name: "Ben's Harvest",
    address: "1274 Waotu Road, Putaruru",
    location: {
      lat: -38.144246,
      lng: 175.68954,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 797,
    ownerId: null,
    name: "The Fruit Stand",
    address: "79 Hutcheson Street, Blenheim",
    location: {
      lat: -41.499975,
      lng: 173.95493,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "Broccoli",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cabbage",
        amount: "small bag",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 809,
    ownerId: null,
    name: "The Green Grocer",
    address: "10 Church Road, Napier",
    location: {
      lat: -39.534894,
      lng: 176.843615,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 814,
    ownerId: null,
    name: "Veggie Delight",
    address: "399 Koputaroa Road, Levin",
    location: {
      lat: -40.578429,
      lng: 175.337387,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 815,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "Mokena Kohere Street, Levin",
    location: {
      lat: -40.713712,
      lng: 175.217885,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "grapes",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "blackberry",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Broccoli",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 816,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "93 Flux Road, Upper Hutt",
    location: {
      lat: -41.123992,
      lng: 175.11671,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 820,
    ownerId: null,
    name: "Ben's Harvest",
    address: "Moresby Avenue, Waihi",
    location: {
      lat: -37.389972,
      lng: 175.838774,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "Onion",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "Lettuce",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Kale",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "watermelon",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 821,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "6 Raroa Road, Waimana",
    location: {
      lat: -38.143098,
      lng: 177.072258,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 825,
    ownerId: null,
    name: "Fruit Zone",
    address: "31 Mill Road, Gisborne",
    location: {
      lat: -38.651399,
      lng: 178.00129,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 828,
    ownerId: null,
    name: "Fresh and Local",
    address: "56 Wairere Road, Gisborne",
    location: {
      lat: -38.683687,
      lng: 178.075122,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 830,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "Muhunoa East Road, Levin",
    location: {
      lat: -40.662132,
      lng: 175.251628,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "Green Beans",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 832,
    ownerId: null,
    name: "The Radish Room",
    address: "6 Harker Street, Waipawa",
    location: {
      lat: -39.943615,
      lng: 176.590064,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 836,
    ownerId: null,
    name: "The Fruit Basket",
    address: "107 State Highway 1, Taupo",
    location: {
      lat: -38.787768,
      lng: 176.076788,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 837,
    ownerId: null,
    name: "The Green Grocer",
    address: "Hotel Access Road, Waitomo Caves",
    location: {
      lat: -38.261418,
      lng: 175.109611,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "grapes",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 838,
    ownerId: null,
    name: "Mike's Produce",
    address: "7 Nimon Street, Havelock North",
    location: {
      lat: -39.664097,
      lng: 176.891791,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 850,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "2 Knox Street, Gisborne",
    location: {
      lat: -38.655029,
      lng: 177.993954,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Broccoli",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 851,
    ownerId: null,
    name: "The Veggie Patch",
    address: "25 Kenderdine Road, Elsthorpe",
    location: {
      lat: -39.914918,
      lng: 176.812564,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "raspberries",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "lemon",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 852,
    ownerId: null,
    name: "Fruit Oasis",
    address: "324 Hill Road, Napier",
    location: {
      lat: -39.402535,
      lng: 176.85281,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 853,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "Stoney Creek Road, Palmerston North",
    location: {
      lat: -40.326441,
      lng: 175.676376,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 854,
    ownerId: null,
    name: "The Apple Orchard",
    address: "30A Meanee Road, Napier",
    location: {
      lat: -39.537197,
      lng: 176.851603,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "apricot",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "apricot",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "Onion",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 863,
    ownerId: null,
    name: "Garden Grove",
    address: "357 Tukapa Street, New Plymouth",
    location: {
      lat: -39.090983,
      lng: 174.056453,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "Green Beans",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 867,
    ownerId: null,
    name: "Farm to Table",
    address: "1071 Argyll Road, Otane",
    location: {
      lat: -39.861195,
      lng: 176.532535,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 869,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "7 Raymond Road, Hastings",
    location: {
      lat: -39.625241,
      lng: 176.951175,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "apricot",
        amount: "100 g",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 4",
      },
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 871,
    ownerId: null,
    name: "The Veggie Shack",
    address: "Bayley Street, Huirangi",
    location: {
      lat: -39.051773,
      lng: 174.249859,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 874,
    ownerId: null,
    name: "Fresh Harvest",
    address: "8 Erin Street, Stratford",
    location: {
      lat: -39.290782,
      lng: 174.264152,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "lemon",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "apricot",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "banana",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 875,
    ownerId: null,
    name: "Fresh and Local",
    address: "Rangi Street, Mokau",
    location: {
      lat: -38.697235,
      lng: 174.617569,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "apples",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Beetroot",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Cabbage",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 876,
    ownerId: null,
    name: "Fresh Harvest",
    address: "3 Hunter Street, Normanby",
    location: {
      lat: -39.54089,
      lng: 174.272881,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "coconut",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 886,
    ownerId: null,
    name: "Juicy Delights",
    address: "25 Kesteven Avenue, Tauranga",
    location: {
      lat: -37.720485,
      lng: 176.143844,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "cherries",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 889,
    ownerId: null,
    name: "Fruit Zone",
    address: "42 Elliott Crescent, Havelock North",
    location: {
      lat: -39.674036,
      lng: 176.871074,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "Asparagus",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "coconut",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 890,
    ownerId: null,
    name: "The Fruit Basket",
    address: "2A Lister Crescent, Napier",
    location: {
      lat: -39.513585,
      lng: 176.905655,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "gooseberry",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "potato",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 891,
    ownerId: null,
    name: "The Veggie Cart",
    address: "80D Latham Street, Napier",
    location: {
      lat: -39.505766,
      lng: 176.905445,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 892,
    ownerId: null,
    name: "The Green Spot",
    address: "54 Kennedy Road, Napier",
    location: {
      lat: -39.496815,
      lng: 176.90779,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "bunch",
        price: "$ 3",
      },
      {
        item: "pumpkin",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 897,
    ownerId: null,
    name: "The Radish Room",
    address: "400 Karamu Road South, Hastings",
    location: {
      lat: -39.645649,
      lng: 176.841387,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-6.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "kiwifruit",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "raspberries",
        amount: "bag",
        price: "$ 3",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 898,
    ownerId: null,
    name: "Fruitopia",
    address: "15 Dick Place, Napier",
    location: {
      lat: -39.516043,
      lng: 176.887624,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "avocado",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "Asparagus",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 899,
    ownerId: null,
    name: "Veggie World",
    address: "2306 Kereru Road, Hastings",
    location: {
      lat: -39.655869,
      lng: 176.407528,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "kg",
        price: "$ 3",
      },
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Lettuce",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 901,
    ownerId: null,
    name: "The Veggie Shack",
    address: "Livingstone Avenue, Hamilton",
    location: {
      lat: -37.779882,
      lng: 175.241733,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "strawberries",
        amount: "each",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 905,
    ownerId: null,
    name: "The Fruit Farm",
    address: "45 Hiruharama Road, Ruatoria",
    location: {
      lat: -37.928293,
      lng: 178.260707,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 907,
    ownerId: null,
    name: "The Harvest Shop",
    address: "316 Paki Paki Road, Pakipaki",
    location: {
      lat: -39.687956,
      lng: 176.787193,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-3.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "987654333",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 909,
    ownerId: null,
    name: "Jane's Fruit Stall",
    address: "262 Valley Road, Woodville",
    location: {
      lat: -40.307229,
      lng: 175.909655,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Cucumber",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Cauliflower",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 919,
    ownerId: null,
    name: "Farm to Table",
    address: "33 Old Coach Road, Paengaroa",
    location: {
      lat: -37.824771,
      lng: 176.414119,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "orange",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 920,
    ownerId: null,
    name: "The Radish Room",
    address: "29 Esdaile Road, Tauranga",
    location: {
      lat: -37.655224,
      lng: 175.996266,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-18.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "apples",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "raspberries",
        amount: "small bag",
        price: "$ 5",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "Eggplant",
        amount: "bag of 5",
        price: "$ 4",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 921,
    ownerId: null,
    name: "The Fruit and Veg Shop",
    address: "20 Patricia Avenue, Hamilton",
    location: {
      lat: -37.786101,
      lng: 175.301528,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-16.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 4",
      },
      {
        item: "gooseberry",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "pumpkin",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Beetroot",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "mandarins",
        amount: "100 g",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 940,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "978 Pyes Pa Road, Pyes Pa",
    location: {
      lat: -37.819257,
      lng: 176.125864,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-2.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 941,
    ownerId: null,
    name: "Ryan's Green Grocer",
    address: "34 Massey Road, Reporoa",
    location: {
      lat: -38.435285,
      lng: 176.343189,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "Kale",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Beetroot",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 942,
    ownerId: null,
    name: "The Veggie Patch",
    address: "1249 Arawa Street, Rotorua",
    location: {
      lat: -38.134522,
      lng: 176.248831,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Beetroot",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Leek",
        amount: "100 g",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 943,
    ownerId: null,
    name: "Juicy Delights",
    address: "358 Makaretu Road, Takapau",
    location: {
      lat: -39.941666,
      lng: 176.309437,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 944,
    ownerId: null,
    name: "Juicy Delights",
    address: "27 Rauma Road, Taihape",
    location: {
      lat: -39.685445,
      lng: 175.809243,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "lemon",
        amount: "bag",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 949,
    ownerId: null,
    name: "Green Valley",
    address: "19 Punga Street, Tangimoana",
    location: {
      lat: -40.296121,
      lng: 175.2492,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cucumber",
        amount: "bunch",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 950,
    ownerId: null,
    name: "Nature's Bounty",
    address: "Waughs Road, Feilding",
    location: {
      lat: -40.256719,
      lng: 175.599626,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "strawberries",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 953,
    ownerId: null,
    name: "The Orange Grove",
    address: "Gloag Street, Waverley",
    location: {
      lat: -39.763184,
      lng: 174.62965,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "123458390",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "100 g",
        price: "$ 4",
      },
      {
        item: "banana",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "bag",
        price: "$ 2",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 954,
    ownerId: null,
    name: "The Green Grocer",
    address: "985 No 1 Road, Waitoa",
    location: {
      lat: -37.532358,
      lng: 175.567819,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-17.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "potato",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Beetroot",
        amount: "bunch",
        price: "$ 4",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 960,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "196 College Street, Palmerston North",
    location: {
      lat: -40.369605,
      lng: 175.59988,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "strawberries",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 961,
    ownerId: null,
    name: "Harvest Fresh",
    address: "84 Matawhero Road, Pukeokahu",
    location: {
      lat: -39.615968,
      lng: 176.00161,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-13.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Leek",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "kiwifruit",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Eggplant",
        amount: "kg",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 962,
    ownerId: null,
    name: "Fruit Zone",
    address: "24 Grey Street, Raetihi",
    location: {
      lat: -39.431444,
      lng: 175.278645,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-10.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 963,
    ownerId: null,
    name: "Juicy Delights",
    address: "7164 Te Aararoa Road, Hicks Bay",
    location: {
      lat: -37.57326,
      lng: 178.142355,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 3",
      },
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "Cauliflower",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "100 g",
        price: "$ 6",
      },
      {
        item: "Cucumber",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 965,
    ownerId: null,
    name: "Green Valley",
    address: "27 Waikare Road, Putorino",
    location: {
      lat: -39.134348,
      lng: 177.00688,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Onion",
        amount: "kg",
        price: "$ 6",
      },
      {
        item: "avocado",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "avocado",
        amount: "each",
        price: "$ 4",
      },
      {
        item: "Leek",
        amount: "kg",
        price: "$ 2",
      },
      {
        item: "apricot",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 966,
    ownerId: null,
    name: "The Harvest Shop",
    address: "945 Makirikiri Road, Marton",
    location: {
      lat: -40.086722,
      lng: 175.309685,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag of 5",
        price: "$ 1",
      },
      {
        item: "Asparagus",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Cucumber",
        amount: "each",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 969,
    ownerId: null,
    name: "Fresh Harvest",
    address: "50 Te Kuiti Road, Te Kuiti",
    location: {
      lat: -38.335869,
      lng: 175.174234,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cabbage",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "cherries",
        amount: "bag",
        price: "$ 5",
      },
      {
        item: "blueberry",
        amount: "bunch",
        price: "$ 5",
      },
      {
        item: "blackberry",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Cauliflower",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 971,
    ownerId: null,
    name: "Garden Delights",
    address: "Ruapehu Street, Waiouru",
    location: {
      lat: -39.468546,
      lng: 175.673128,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-5.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "010940398",
      email: "",
    },
    inStock: [
      {
        item: "blueberry",
        amount: "kg",
        price: "$ 6",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 973,
    ownerId: null,
    name: "Farm to Table",
    address: "91 Mueller Street, Waihi",
    location: {
      lat: -37.392955,
      lng: 175.845002,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-1.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "banana",
        amount: "kg",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 974,
    ownerId: null,
    name: "The Green Grocer",
    address: "101 King Street, Whakatane",
    location: {
      lat: -37.964493,
      lng: 176.982539,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "283908023",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "bag",
        price: "$ 6",
      },
      {
        item: "Onion",
        amount: "bunch",
        price: "$ 2",
      },
      {
        item: "Leek",
        amount: "each",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 978,
    ownerId: null,
    name: "Alex's Veggie World",
    address: "Brighton Crescent, Palmerston North",
    location: {
      lat: -40.359755,
      lng: 175.590336,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-15.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Cauliflower",
        amount: "bag of 5",
        price: "$ 6",
      },
      {
        item: "gooseberry",
        amount: "small bag",
        price: "$ 3",
      },
      {
        item: "orange",
        amount: "bag of 5",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 979,
    ownerId: null,
    name: "Green Valley",
    address: "208 Old West Road, Tiritea",
    location: {
      lat: -40.401262,
      lng: 175.619913,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "1012345678",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "bag of 5",
        price: "$ 5",
      },
      {
        item: "Onion",
        amount: "100 g",
        price: "$ 2",
      },
      {
        item: "cherries",
        amount: "bag of 5",
        price: "$ 3",
      },
      {
        item: "blackberry",
        amount: "each",
        price: "$ 6",
      },
      {
        item: "Kale",
        amount: "bag",
        price: "$ 1",
      },
    ],
    organic: false,
    marketStall: true,
    eftposPayment: false,
  },
  {
    stallId: 980,
    ownerId: null,
    name: "Garden Delights",
    address: "State Highway 4, Whanganui",
    location: {
      lat: -39.866199,
      lng: 175.113684,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "Carrot",
        amount: "kg",
        price: "$ 4",
      },
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 1",
      },
      {
        item: "Carrot",
        amount: "bag",
        price: "$ 1",
      },
      {
        item: "Garlic",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 982,
    ownerId: null,
    name: "The Farmer's Market",
    address: "38 Keith Street, Whanganui",
    location: {
      lat: -39.922316,
      lng: 175.046264,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 983,
    ownerId: null,
    name: "Fruitopia",
    address: "Flyger Street, Kimbolton",
    location: {
      lat: -40.053459,
      lng: 175.778381,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-4.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Lettuce",
        amount: "bag",
        price: "$ 4",
      },
      {
        item: "lemon",
        amount: "small bag",
        price: "$ 2",
      },
      {
        item: "Beetroot",
        amount: "each",
        price: "$ 5",
      },
      {
        item: "Cabbage",
        amount: "100 g",
        price: "$ 1",
      },
      {
        item: "raspberries",
        amount: "bag",
        price: "$ 5",
      },
    ],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 985,
    ownerId: null,
    name: "Max's Fruit Express",
    address: "260 Clarkin Road, Hamilton",
    location: {
      lat: -37.764108,
      lng: 175.284078,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-7.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "0102030405",
      email: "",
    },
    inStock: [
      {
        item: "Eggplant",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "cherry",
        amount: "bunch",
        price: "$ 1",
      },
      {
        item: "blueberries",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "potato",
        amount: "bag",
        price: "$ 2",
      },
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 2",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 986,
    ownerId: null,
    name: "The Garden Market",
    address: "897 Waingaro Road, Ngaruawahia",
    location: {
      lat: -37.673206,
      lng: 175.075906,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-8.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "gooseberry",
        amount: "small bag",
        price: "$ 6",
      },
      {
        item: "mandarins",
        amount: "bag of 5",
        price: "$ 2",
      },
      {
        item: "blueberries",
        amount: "bag of 5",
        price: "$ 5",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 987,
    ownerId: null,
    name: "Zoe's Fruit Zone",
    address: "Bruce Avenue, Hamilton",
    location: {
      lat: -37.81635,
      lng: 175.290754,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-11.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Thursday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Friday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "5:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "grapes",
        amount: "100 g",
        price: "$ 3",
      },
      {
        item: "apricot",
        amount: "each",
        price: "$ 3",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 988,
    ownerId: null,
    name: "Emma's Orchard",
    address: "Patapu Street, Whanganui",
    location: {
      lat: -39.91454,
      lng: 175.063803,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Friday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "9:00 am",
        closeTime: "12:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [],
    organic: false,
    marketStall: false,
    eftposPayment: false,
  },
  {
    stallId: 989,
    ownerId: null,
    name: "Leo's Veg Out",
    address: "56 Linton Street, Palmerston North",
    location: {
      lat: -40.361293,
      lng: 175.610019,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-12.jpg",
    openTimes: {
      Monday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Tuesday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Wednesday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Friday: {
        open: true,
        openTime: "1:00 pm",
        closeTime: "6:00 pm",
      },
      Saturday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
      Sunday: {
        open: false,
        openTime: "",
        closeTime: "",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Garlic",
        amount: "bunch",
        price: "$ 1",
      },
    ],
    organic: true,
    marketStall: false,
    eftposPayment: true,
  },
  {
    stallId: 996,
    ownerId: null,
    name: "The Farmer's Market",
    address: "30 Rongoiti Road, Taihape",
    location: {
      lat: -39.651711,
      lng: 175.720986,
    },
    about:
      "EXAMPLE ONLY: This is an example of a fruit/vegetable seller for demonstration. Sellers can include more information here such as growing methods, what they have available in different seasons, upcoming stock etc.",
    img: "./images/test-image-14.jpg",
    openTimes: {
      Monday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Tuesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Wednesday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Thursday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Friday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Saturday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
      Sunday: {
        open: true,
        openTime: "7:00 am",
        closeTime: "8:00 pm",
      },
    },
    contactDetails: {
      phone: "",
      email: "",
    },
    inStock: [
      {
        item: "Broccoli",
        amount: "small bag",
        price: "$ 4",
      },
      {
        item: "pumpkin",
        amount: "kg",
        price: "$ 5",
      },
      {
        item: "Eggplant",
        amount: "each",
        price: "$ 3",
      },
      {
        item: "Green Beans",
        amount: "100 g",
        price: "$ 6",
      },
    ],
    organic: true,
    marketStall: true,
    eftposPayment: false,
  },
];

const users = [
  {
    userId: 57304,
    email: "guest@email.com",
    password: "password",
    stalls: [1, 3],
    favouriteStalls: [
      10, 30, 23, 66, 103, 140, 12, 203, 240, 34, 92, 111, 160, 226, 161,
    ],
  },
  {
    userId: 24232,
    email: "email@email.com",
    password: "testpass",
    stalls: [],
    favouriteStalls: [1],
  },
];

export { stallData, users };
