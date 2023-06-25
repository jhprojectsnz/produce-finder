import "./search-results.css";
import Map from "../../components/map/map";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useState } from "react";
import StallDetails from "../stall-details/stall-details";
import { Routes, Route } from "react-router-dom";

export default function SearchResults({ setMapCenter, mapCenter }) {
  const [selectedStall, setSelectedStall] = useState({});

  return (
    <div className="search-results">
      <SearchBar />
      <Routes>
        <Route
          path="details"
          element={<StallDetails selectedStall={selectedStall} />}
        />
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
          element={<ResultsList setSelectedStall={setSelectedStall} />}
        />
      </Routes>
      <ResultsNav />
    </div>
  );
}
