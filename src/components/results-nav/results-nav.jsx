import "./results-nav.css";

export default function ResultsNav({ showMapView, setShowMapView }) {
  return (
    <div className="results-nav">
      <button
        className={
          showMapView ? "results-nav-btn nav-btn-selected" : "results-nav-btn"
        }
        onClick={() => setShowMapView(true)}
      >
        Map
      </button>
      <button
        className={
          !showMapView ? "results-nav-btn nav-btn-selected" : "results-nav-btn"
        }
        onClick={() => setShowMapView(false)}
      >
        List
      </button>
    </div>
  );
}
