import "./search-results.css";
import Map from "../../components/map/map";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useState } from "react";
import StallDetails from "../stall-details/stall-details";

export default function SearchResults({ setMapCenter, mapCenter }) {
  const [showMapView, setShowMapView] = useState(true);
  const [showStallDetails, setShowStallDetails] = useState(false);
  const [selectedStall, setSelectedStall] = useState({});

  return (
    <div className="search-results">
      {showStallDetails && (
        <StallDetails
          selectedStall={selectedStall}
          setShowStallDetails={setShowStallDetails}
        />
      )}
      <SearchBar />
      {showMapView ? (
        <Map
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
          setShowStallDetails={setShowStallDetails}
          setMapCenter={setMapCenter}
          mapCenter={mapCenter}
        />
      ) : (
        <ResultsList
          setSelectedStall={setSelectedStall}
          setShowStallDetails={setShowStallDetails}
          showStallDetails={showStallDetails}
        />
      )}
      <ResultsNav showMapView={showMapView} setShowMapView={setShowMapView} />
    </div>
  );
}
