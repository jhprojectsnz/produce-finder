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
import StallDetails from "./Pages/stall-details/stall-details.jsx";
import WelcomeModal from "./components/welcome-modal/welcome-modal.jsx";
import CreateStallData from "./Pages/Create-Stall-Data/Create-Stall-Data.jsx";

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

export default function App() {
  const defaultMapCenter = {
    lat: -36.850821266967884,
    lng: 174.76444851328998,
  };
  const [mapDetails, setMapDetails] = useState({
    center: defaultMapCenter,
    zoom: 13,
    bounds: false,
  });
  const [lastSearchLoaction, setLastSearchLocation] = useState("");
  const [selectedStall, setSelectedStall] = useState({});
  //Filters only used in SearchResults component but are here to store values when use navigates between results and stall details
  //Could create a second set of context for this and other shared variables(e.g. mapCenter)?
  //Or include the filters in the url?
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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  console.log("app");

  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <MainNavBar />
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
        </UserProvider>
      </BrowserRouter>
      {showWelcomeModal && (
        <WelcomeModal setShowWelcomeModal={setShowWelcomeModal} />
      )}{" "}
    </div>
  );
}
