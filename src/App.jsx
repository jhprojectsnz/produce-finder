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
                />
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/form/:id?" element={<StallDetailsForm />}></Route>
            <Route
              path="/mystalls"
              element={<MyStalls setSelectedStall={setSelectedStall} />}
            ></Route>
            <Route
              path="/favourites"
              element={<Favourites setSelectedStall={setSelectedStall} />}
            ></Route>
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
