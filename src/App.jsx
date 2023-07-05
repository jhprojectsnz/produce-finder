import SearchResults from "./Pages/search-results/search-results.jsx";
import "./App.css";
import Home from "./Pages/home/home.jsx";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login/login.jsx";
import StallDetailsForm from "./Pages/stall-details-form/stall-details-form.jsx";

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

function App() {
  const [mapCenter, setMapCenter] = useState({});
  const [lastSearchLoaction, setLastSearchLocation] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="app">
      <BrowserRouter>
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
          <Route path="/form" element={<StallDetailsForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
