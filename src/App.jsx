import SearchResults from "./Pages/search-results/search-results.jsx";
import "./App.css";
import Home from "./Pages/home/home.jsx";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login/login.jsx";
import StallDetailsForm from "./Pages/stall-details-form/stall-details-form.jsx";
import MyStalls from "./Pages/my-stalls/my-stalls.jsx";
import Favourites from "./Pages/favourites/favourites.jsx";
import UserProvider from "./context/UserContext.jsx";
import MainNavBar from "./components/main-navbar/main-navbar.jsx";

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

function App() {
  const [mapCenter, setMapCenter] = useState({});
  const [lastSearchLoaction, setLastSearchLocation] = useState("");
  const [stalls, setStalls] = useState([
    {
      name: "Jim's Fruit Stall",
      stallId: 48290021,
      address: "3785 test st, auckland, nz",
      location: { lat: 0, lng: 0 },
      locationType: "",
      about: "The is a test stall",
      img: "testImg1",
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
        email: "dfdpofiod@test.com",
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
    },
    {
      name: "Jim's Market Stall",
      stallId: 24422021,
      address: "68 Queen st, auckland, nz",
      location: { lat: 0, lng: 0 },
      locationType: "",
      about: "This is another test market stall",
      img: "testImg1",
      openTimes: {
        Monday: { open: false, openTime: "", closeTime: "" },
        Tuesday: { open: false, openTime: "", closeTime: "" },
        Wednesday: { open: false, openTime: "", closeTime: "" },
        Thursday: { open: false, openTime: "", closeTime: "" },
        Friday: { open: false, openTime: "", closeTime: "" },
        Saturday: { open: false, openTime: "8:00am", closeTime: "12:00pm" },
        Sunday: { open: false, openTime: "", closeTime: "" },
      },
      contactDetails: {
        phone: "557837987",
        email: "dfdpofiod@test.com",
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
    },
  ]);

  // const [currentUser, setCurrentUser] = useState({});

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <MainNavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setMapCenter={setMapCenter}
                  lastSearchLocation={lastSearchLoaction}
                  setLastSearchLocation={setLastSearchLocation}
                />
              }
            />
            <Route
              path="/results/*"
              element={
                <SearchResults
                  setMapCenter={setMapCenter}
                  mapCenter={mapCenter}
                />
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/form/:id?"
              element={
                <StallDetailsForm stalls={stalls} setStalls={setStalls} />
              }
            ></Route>
            <Route path="/mystalls" element={<MyStalls />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
