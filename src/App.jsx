import "./App.css";

import { useLoadScript } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home/home.jsx";
import Login from "./Pages/login/login.jsx";
import SearchResults from "./Pages/search-results/search-results.jsx";
import StallDetailsForm from "./Pages/stall-details-form/stall-details-form.jsx";
import MyStalls from "./Pages/my-stalls/my-stalls.jsx";
import Favourites from "./Pages/favourites/favourites.jsx";
import UserProvider from "./context/UserContext.jsx";
import MainNavBar from "./components/main-navbar/main-navbar.jsx";
import StallDetails from "./Pages/stall-details/stall-details.jsx";
import WelcomeModal from "./components/welcome-modal/welcome-modal.jsx";
import CreateStallData from "./Pages/Create-Stall-Data/Create-Stall-Data.jsx";
import ModalLayout from "./components/modal-layout/modal-layout.jsx";
import Footer from "./components/footer/footer.jsx";

// Google maps libraries must be assigned outside of the component to avoid error
// Array should not be passed directly to the libraries prop
const libraries = ["places"];

export default function App() {
  // Set a default map center here
  const defaultMapCenter = {
    lat: -36.850821266967884,
    lng: 174.76444851328998,
  };
  // Map details and selecte dStall are stored in App component - used across multiple components
  const [mapDetails, setMapDetails] = useState({
    center: defaultMapCenter,
    zoom: 13,
    bounds: false,
  });
  const [selectedStall, setSelectedStall] = useState({});
  const [lastSearchLoaction, setLastSearchLocation] = useState("");
  // Filters only used in SearchResults component but are here so values are stored when user navigates between results and stall details
  // Could create a second set of context for this and other shared variables(e.g. mapCenter)?
  // Or save to localStorage/sessionStorage
  const [filters, setFilters] = useState({
    keyword: false,
    buttonFilters: {
      "Open now": false,
      "Items in stock": false,
      Organic: false,
      "Market stall": false,
      "Eftpos payment": false,
    },
  });

  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  // Load the google map API - used for places search
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_API_KEY,
  //   libraries: libraries,
  // });

  // if (!isLoaded) return <div>Loading...</div>;
  // console.log("app");
  // const loader = new Loader({
  //   apiKey: import.meta.env.VITE_API_KEY,
  //   version: "weekly",
  //   libraries: ["places"],
  // });

  // const mapOptions = {
  //   center: {
  //     lat: 0,
  //     lng: 0,
  //   },
  //   zoom: 4,
  // };

  // let map;
  // let service;

  // loader
  //   .importLibrary("maps")
  //   .then(({ Map }) => {
  //     map = new Map(document.getElementById("google-map"), mapOptions);
  //   })
  //   .then(() => {
  //     service = new google.maps.places.PlacesService(map);
  //   });

  // loader.importLibrary("places").then((google) => {
  //   const service = new google.PlacesService(map);
  // });

  return (
    <div className="app" id="app">
      <div id="google-map" />
      <BrowserRouter>
        <UserProvider>
          <MainNavBar />
          <Wrapper
            apiKey={import.meta.env.VITE_API_KEY}
            version="weekly"
            libraries={["places"]}
          >
            <Routes>
              <Route
                path="/:about?"
                element={
                  <Home
                    setMapDetails={setMapDetails}
                    lastSearchLocation={lastSearchLoaction}
                    setLastSearchLocation={setLastSearchLocation}
                    setSelectedStall={setSelectedStall}
                  />
                }
              />

              <Route
                path="/results/*"
                element={
                  <SearchResults
                    mapDetails={mapDetails}
                    setMapDetails={setMapDetails}
                    selectedStall={selectedStall}
                    setSelectedStall={setSelectedStall}
                    filters={filters}
                    setFilters={setFilters}
                  />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/form/:id?" element={<StallDetailsForm />} />
              <Route
                path="/mystalls"
                element={<MyStalls setSelectedStall={setSelectedStall} />}
              />
              <Route
                path="/favourites"
                element={<Favourites setSelectedStall={setSelectedStall} />}
              />
              <Route path="/NewStallData" element={<CreateStallData />} />
              <Route
                path="/details"
                element={
                  <StallDetails
                    selectedStall={selectedStall}
                    setMapDetails={setMapDetails}
                  />
                }
              />
            </Routes>
          </Wrapper>
          <Footer />
        </UserProvider>
      </BrowserRouter>
      {showWelcomeModal && (
        <ModalLayout>
          <WelcomeModal setShowWelcomeModal={setShowWelcomeModal} />
        </ModalLayout>
      )}
    </div>
  );
}
