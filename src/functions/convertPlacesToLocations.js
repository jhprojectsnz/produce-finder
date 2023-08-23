//This function was used to convert the results from the NZ govt data API call below
//This API gives details about a range of schools in NZ
//The address and location of each school is extracted to use as a stall location 
//https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&limit=300
export default function convertPlacesToLocations(array) {
    // keeps track of how often cities are used so this can be limited
    const cities = {};
    // set this to the maximun number of locations you want in each city
    const maxLocationsPerCity = 20;

    const convertToStalls = array.map((place) => {
      if (!place.Latitude) return null;

      // Add or update cities object with the city of the current place
      if (place.Add1_City in cities) {
        cities[place.Add1_City] = cities[place.Add1_City] + 1
      } else {
        cities[place.Add1_City] = 1
      };
      
      // extract the location data unless max number of locations has already been reached for this city
      return cities[place.Add1_City] < maxLocationsPerCity ? 
      {
        stallId: place._id,
        address: `${place.Add1_Line1}, ${place.Add1_City}`,
        location: {lat: place.Latitude, lng: place.Longitude},
      } 
      : null;
    })
  
    // filter out any null entries in array
    return convertToStalls.filter(stall => stall);
  }
  