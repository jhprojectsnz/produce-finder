import "./App.css";

import { Wrapper } from "@googlemaps/react-wrapper";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home/home.jsx";
import Login from "./Pages/login/login.jsx";
import SearchResults from "./Pages/search-results/search-results.jsx";
import StallDetailsForm from "./Pages/stall-details-form/stall-details-form.jsx";
import MyStalls from "./Pages/my-stalls/my-stalls.jsx";
import Favourites from "./Pages/favourites/favourites.jsx";
import UserProvider from "./context/UserContext.jsx";
import MainNavBar from "./components/main-navbar/main-navbar.jsx";
import StallDetails from "./Pages/stall-details/stall-details.jsx";
import WelcomeModal from "./components/welcome-modal/welcome-modal.jsx";
import Footer from "./components/footer/footer.jsx";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

export default function App() {
  // Set a default map center here
  const defaultMapCenter = {
    lat: -36.850821266967884,
    lng: 174.76444851328998,
  };
  // Map details and selecte dStall are stored in App component - used across multiple components
  const [mapDetails, setMapDetails] = useState({
    center: defaultMapCenter,
    zoom: 13,
    bounds: false,
  });
  const [selectedStall, setSelectedStall] = useState({});
  // Filters only used in SearchResults component but are here so values are stored when user navigates between results and stall details
  // Could create a second set of context for this and other shared variables(e.g. mapCenter)?
  // Or save to localStorage/sessionStorage
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

  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <MainNavBar />
          <Wrapper
            apiKey={import.meta.env.VITE_API_KEY}
            version="weekly"
            libraries={["places"]}
          >
            <ScrollToTop />
            <Routes>
              <Route
                path="/:about?"
                element={
                  <Home
                    setMapDetails={setMapDetails}
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
          </Wrapper>
          <Footer />
        </UserProvider>
      </BrowserRouter>
      {showWelcomeModal && (
        <WelcomeModal setShowWelcomeModal={setShowWelcomeModal} />
      )}
    </div>
  );
}
