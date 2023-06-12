import "./search-results.css";
import Map from "../../components/map/map";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useState } from "react";

export default function SearchResults() {
  const [showMapView, setShowMapView] = useState(true);

  return (
    <div className="map-view">
      <SearchBar />
      {showMapView ? <Map /> : <ResultsList />}
      <ResultsNav showMapView={showMapView} setShowMapView={setShowMapView} />
    </div>
  );
}
