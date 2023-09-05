import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useRef, useState } from "react";

export default function Map({
  selectedStall,
  setSelectedStall,
  setMapDetails,
  mapDetails,
}) {
  // Import all stalls from context
  const { stalls } = useUserContext();

  // Get google map component as a ref
  const mapRef = useRef(null);

  // Styles for the Google map - switch of points of interest to make map clearer
  const mapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

  const [googleMap, setGoogleMap] = useState();

  console.log(mapDetails);

  useEffect(() => {
    console.log("useEffect");
    const map = new google.maps.Map(mapRef.current, {
      center: mapDetails.center,
      zoom: mapDetails.zoom,
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: true,
    });

    map.addListener("idle", () => {
      setMapDetails((prev) => ({
        ...prev,
        bounds: map.getBounds(),
      }));
    });

    setGoogleMap(map);
  }, []);

  // // Make a array of stalls, first filtered by map bounds and then by user filters
  // // The resulting stalls are used as markers on map and to populate results list
  // const filteredStalls = useMemo(() => {
  //   // Filter all stalls to just those within the current map bounds
  //   const stallsWithinMapBounds = mapDetails.mapBounds
  //     ? stalls.filter((stall) =>
  //         mapDetails.mapBounds.contains(
  //           new google.maps.LatLng(stall.location.lat, stall.location.lng)
  //         )
  //       )
  //     : [];

  //   // Return an array of stalls filtered by user selected filters
  //   return stallsWithinMapBounds.filter((stall) => {
  //     // If Open now filter is selected and stall is closed don't include stall
  //     if (filters.buttonFilters["Open now"] && !isOpen(stall.openTimes))
  //       return false;
  //     // If Items in stock is selected and stall has no stock don't include stall
  //     if (filters.buttonFilters["Items in stock"] && stall.inStock.length < 1)
  //       return false;
  //     // If Organic/Market stall/Eftopos payment filters are selected
  //     // Check if the stall matchs and exclude if not
  //     if (filters.buttonFilters.Organic && !stall.organic) return false;
  //     if (filters.buttonFilters["Market stall"] && !stall.marketStall)
  //       return false;
  //     if (filters.buttonFilters["Eftpos payment"] && !stall.eftposPayment)
  //       return false;

  //     // If the user has search for a fruit or vegetable filter stalls by this keyword
  //     if (filters.keyword) {
  //       // Simplify the keyword by:
  //       // - Converting to lower case
  //       // - Slicing of the end to keyword to account for plurals "ies" or "s"
  //       const filterTerm = /ies$/.test(filters.keyword)
  //         ? filters.keyword.toLowerCase().slice(0, -3)
  //         : filters.keyword.toLowerCase().slice(0, -1);

  //       // Initiate variable to track whether the stall has an item that matches the filterTerm
  //       let stallHasKeyword = false;

  //       // Look through each product to see if it includes the search term
  //       // Sliced filterTerms like cherr (from Cherries) will match Cherries, Cherry etc
  //       stall.inStock.forEach((product) => {
  //         // toSting needs to be run before toLowerCase will work here
  //         // Product.item not stored as a primitive string?
  //         const productName = product.item.toString().toLowerCase();
  //         if (productName.includes(filterTerm)) {
  //           stallHasKeyword = true;
  //         }
  //       });
  //       // If stallHasKeyword is still false then stall does not have a matching product - don't include
  //       if (!stallHasKeyword) return false;
  //     }

  //     // If there none of the above conditions have been meet then include the stall in filtered array
  //     return true;
  //   });
  // });

  return (
    <>
      <div ref={mapRef} className="map"></div>
      {/* <GoogleMap
      onClick={() => setSelectedStall({})}
    >
      {console.log("map")}
      <Markers
        filteredStalls={filteredStalls}
        selectedStall={selectedStall}
        setSelectedStall={setSelectedStall}
      />
    </GoogleMap> */}
      {selectedStall.stallId && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
          updateMapCenter={updateMapSettings}
        />
      )}
    </>
  );
}
