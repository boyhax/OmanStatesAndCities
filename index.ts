import locations from "./db.json";
type Location = {
  slug: string; // Unique identifier for the location (e.g., "adam")
  label_ar: string; // Name of the location in Arabic (e.g., "أدم")
  label_en: string; // Name of the location in English (e.g., "Adam")
  url_name: string; // URL-friendly name for the location (e.g., "adam")
  type: locationType; // Type of location, can be either "city" or "state"
  parent_slug: string; // Parent region or state slug (e.g., "al-dakhiliya")
  location: string; // A unique location code (e.g., "0101000020E6100000EC51B81E85C34C40C7BAB88D06603640")
  lat: number; // Latitude coordinate of the location (e.g., 22.3751)
  lng: number; // Longitude coordinate of the location (e.g., 57.5275)
};

type LocationList = Location[];
export type locationType =  "city"| "country"| "state" 
export function getCities() {
  return locations.filter((place) => place.type == 'city') as LocationList;
}
export function getStates() {
  return locations.filter((place) => place.type == "state") as LocationList;
}


export const allLocations = locations  as LocationList

// result [

//   {
//     "slug": "adam",
//     "label_ar": "أدم",
//     "label_en": "Adam",
//     "url_name": "adam",
//     "type": "city",
//     "parent_slug": "al-dakhiliya",
//     "location": "0101000020E6100000EC51B81E85C34C40C7BAB88D06603640",
//     "lat": 22.3751,
//     "lng": 57.5275
//   },...
// ]
