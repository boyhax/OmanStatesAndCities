# OmanStatesAndCities

A database containing information about cities and states in Oman, including slugs, location codes, and coordinates. This package provides methods to filter cities and states based on their type and access all location data.

## Features

- Provides a list of cities and states in Oman.
- Includes location details like labels (Arabic and English), latitude, longitude, and unique location codes.
- Supports filtering cities and states separately.

## Installation

To install the package, run the following command:

```bash
npm install OmanStatesAndCities
Usage
Importing the module
You can import the module into your JavaScript or TypeScript project like this:

javascript
نسخ الكود
import { getCities, getStates, allLocations } from "OmanStatesAndCities";
Fetching Cities
Use the getCities function to get all cities in Oman:

javascript
نسخ الكود
const cities = getCities();
console.log(cities);
Fetching States
Use the getStates function to get all states in Oman:

javascript
نسخ الكود
const states = getStates();
console.log(states);
Accessing All Locations
You can access all locations, including both cities and states, using the allLocations variable:

javascript
نسخ الكود
const locations = allLocations;
console.log(locations);
Location Type Definition
The locations are typed as follows:

typescript
نسخ الكود
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

export type locationType = "city" | "country" | "state";
Example Data
Here is an example of a location object:

json
نسخ الكود
{
  "slug": "adam",
  "label_ar": "أدم",
  "label_en": "Adam",
  "url_name": "adam",
  "type": "city",
  "parent_slug": "al-dakhiliya",
  "location": "0101000020E6100000EC51B81E85C34C40C7BAB88D06603640",
  "lat": 22.3751,
  "lng": 57.5275
}
License
This project is licensed under the MIT License.

Author
This package was created by Said Alhajri, a developer from Oman. Follow me on Twitter @boyhaxdev.

