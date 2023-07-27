import { useEffect } from "react";
import locationData from "../../data/locationData";
import convertLocationsToStalls from "../../functions/convertLocationsToStalls";

export default function APITest() {
  console.log("api test");
  useEffect(() => {
    console.log("fetch");
    // fetch(
    //   "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&limit=2"
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const newStalls = convertLocationsToStalls(locationData);
    console.log(newStalls);
  }, []);

  return <div>API test</div>;
}
