import { useEffect, useState } from "react";
import convertLocationsToStalls from "../../functions/convertLocationsToStalls";
import convertPlacesToLocations from "../../functions/convertPlacesToLocations";

// This component was used to fetch school data from NZ govt API and convert it into stall data
export default function CreateStallData() {
  const [schoolData, setSchoolData] = useState([]);
  useEffect(() => {
    fetch(
      "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&limit=1000",
    )
      .then((res) => res.json())
      .then((data) => setSchoolData(data.result.records));
  }, []);

  if (schoolData.length > 1) {
    // The function below extracts the location data from the school data
    const newLocations = convertPlacesToLocations(schoolData);
    // The function below converts the location data into a full set of stall data
    const newStallsData = convertLocationsToStalls(newLocations);
    // The stalls data is then copied from the console into the data.js file so API doesn't need to be called every time
    console.log(newStallsData);
  }

  return <div>API test</div>;
}
