import "./map.css";
import Markers from "../markers/markers";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { useEffect, useRef, useState } from "react";

export default function Map({
  selectedStall,
  setSelectedStall,
  setMapDetails,
  mapDetails,
  filteredStalls,
}) {
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

  useEffect(() => {
    console.log("useEffect");
    const map = new google.maps.Map(mapRef.current, {
      center: mapDetails.center,
      zoom: mapDetails.zoom,
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: true,
    });

    setGoogleMap(map);

    map.addListener("idle", () => {
      if (map) {
        setMapDetails({
          zoom: map.getZoom(),
          center: {
            lat: map.center.lat(),
            lng: map.center.lng(),
          },
          bounds: map.getBounds(),
        });
      }
    });

    map.addListener("click", () => {
      setSelectedStall({});
    });

    return () => {
      google.maps.event.clearInstanceListeners(map);
    };
  }, []);

  console.log("map");
  return (
    <>
      <div ref={mapRef} className="map"></div>

      <Markers
        googleMap={googleMap}
        filteredStalls={filteredStalls}
        selectedStall={selectedStall}
        setSelectedStall={setSelectedStall}
      />
      {selectedStall.stallId && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      )}
    </>
  );
}

// const markerIcon = {
//   path: "M 172.268 501.67 C 26.97 291.031 0 269.413 0 192 C 0 85.961 85.961 0 192 0 s 192 85.961 192 192 c 0 77.413 -26.97 99.031 -172.268 309.67 c -9.535 13.774 -29.93 13.773 -39.464 0 Z M 192 272 c 44.183 0 80 -35.817 80 -80 s -35.817 -80 -80 -80 s -80 35.817 -80 80 s 35.817 80 80 80 Z",
//   fillColor: "#C2FFB2",
//   fillOpacity: 1,
//   strokeWeight: 2,
//   strokeColor: "#2C2C2C",
//   scale: 0.06,
//   anchor: new google.maps.Point(200, 500),
// };

// const favIcon = {
//   path: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z",
//   fillColor: "#DA3333",
//   strokeWeight: 2,
//   strokeColor: "black",
//   fillOpacity: 1,
//   scale: 0.03,
//   anchor: new google.maps.Point(600, 900),
// };

// const userIcon = {
//   path: "M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z",
//   fillColor: "#A559BF",
//   fillOpacity: 1,
//   strokeWeight: 1.5,
//   strokeColor: "#2C2C2C",
//   scale: 0.06,
//   anchor: new google.maps.Point(300, 500),
// };

// function markerType(stallId) {
//   if (currentUser.userId && currentUser.stalls.includes(stallId)) {
//     return stallId === selectedStall.stallId
//       ? { ...userIcon, scale: 0.08, strokeWeight: 2.5 }
//       : userIcon;
//   }
//   if (currentUser.userId && currentUser.favouriteStalls.includes(stallId)) {
//     return stallId === selectedStall.stallId
//       ? { ...favIcon, scale: 0.04, fillColor: "#E31515" }
//       : favIcon;
//   }
//   return stallId === selectedStall.stallId
//     ? { ...markerIcon, fillColor: "#00801C", scale: 0.08 }
//     : markerIcon;
// }

// useEffect(() => {
//   console.log(googleMap);
//   const markers = filteredStalls.map((stall) => {
//     const marker = new google.maps.Marker({
//       position: {
//         lat: stall.location.lat,
//         lng: stall.location.lng,
//       },
//       icon: markerType(stall.stallId),
//       map: googleMap,
//     });
//     return marker;
//   });
//   console.log(markers);
// }, [filteredStalls]);

// Clear old markers
// markers.forEach((marker) => {
//   console.log("clear");
//   marker.setMap(null);
// });

// const newMarkers = [];
// stallsWithinMapBounds.forEach((location) => {
//   console.log(location);
//   const marker = new google.maps.Marker({
//     postion: {
//       lat: location.location.lat,
//       lng: location.location.lng,
//     },
//     map: googleMap,
//   });

//   newMarkers.push(marker);
// });

// newMarkers.forEach((marker) => marker.setMap(map));

// setMarkers(newMarkers);

// setMapDetails((prev) => ({
//   ...prev,
//   bounds: map.getBounds(),
// }));
