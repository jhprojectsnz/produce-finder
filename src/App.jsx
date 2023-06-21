import SearchResults from "./Pages/search-results/search-results.jsx";
import "./App.css";
import Home from "./Pages/home/home.jsx";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

function App() {
  const [showResults, setShowResults] = useState(false);
  const [mapCenter, setMapCenter] = useState({});

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="app">
      {showResults ? (
        <SearchResults setMapCenter={setMapCenter} mapCenter={mapCenter} />
      ) : (
        <Home
          setMapCenter={setMapCenter}
          mapCenter={mapCenter}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
}

export default App;
