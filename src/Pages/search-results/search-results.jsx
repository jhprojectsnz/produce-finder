import "./search-results.css";
import Map from "../../components/map/map";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function SearchResults({
  setMapCenter,
  mapCenter,
  selectedStall,
  setSelectedStall,
}) {
  const { stalls } = useUserContext();
  const [searchResults, setSearchResults] = useState([]);
  // const [selectedStall, setSelectedStall] = useState({});

  //Import all stalls from context
  useEffect(() => {
    //search database for results that are near the search location here
    //Below is a substitute until back end and database is added
    setSearchResults(stalls);
  }, []);

  return (
    <div className="search-results">
      <SearchBar />
      <Routes>
        <Route
          path="map"
          element={
            <Map
              selectedStall={selectedStall}
              setSelectedStall={setSelectedStall}
              setMapCenter={setMapCenter}
              mapCenter={mapCenter}
            />
          }
        />
        <Route
          path="list"
          element={
            <ResultsList
              setSelectedStall={setSelectedStall}
              stallList={searchResults}
            />
          }
        />
      </Routes>
      <ResultsNav />
    </div>
  );
}
