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

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

function App() {
  const [mapCenter, setMapCenter] = useState({});
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
            <Route
              path="/details"
              element={
                <StallDetails
                  selectedStall={selectedStall}
                  setMapCenter={setMapCenter}
                />
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
