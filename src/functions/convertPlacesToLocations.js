//This function was used to convert the results from the NZ govt data API call below
//This API gives details about a range of schools in NZ
//The address and location of each school is extracted to use as a stall location 
//https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&limit=300
export default function convertPlacesToLocations(array) {
    const convertToStalls = array.map((place) => {
      if (!place.Latitude) return null;
    
      return {
        stallId: place._id,
        address: `${place.Add1_Line1}, ${place.Add1_City}`,
        location: {lat: place.Latitude, lng: place.Longitude},
      }
    })
  
    return convertToStalls.filter(stall => stall)
  }
  