import locations from "./db.json";

export const types = { city: "city", country: "country", state: "state" };
export function getCities() {
  return locations.filter((place) => place.type == types.city);
}
export function getStates() {
  return locations.filter((place) => place.type == types.state);
}


export const allLocations = locations 

