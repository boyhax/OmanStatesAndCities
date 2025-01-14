# OmanStatesAndCities

**Oman Database for states and cities**

## Overview

This package provides a database of states and cities in Oman. It contains essential information regarding various states and cities within Oman and offers utility functions to filter and retrieve data based on the type of location (city or state).

## Installation

To install this package, you can use npm or yarn:

```bash
npm install OmanStatesAndCities
or

bash
نسخ الكود
yarn add OmanStatesAndCities
Functions
getCities()
Returns a list of all cities in Oman.

javascript
نسخ الكود
import { getCities } from 'OmanStatesAndCities';

const cities = getCities();
console.log(cities);
getStates()
Returns a list of all states in Oman.

javascript
نسخ الكود
import { getStates } from 'OmanStatesAndCities';

const states = getStates();
console.log(states);
Data Structure
The database contains the following fields for each location:

id: Unique identifier
label_ar: Name in Arabic
label_en: Name in English
url_name: URL-friendly name
nhoods: Array of neighborhoods, if applicable (in case of cities)
Each entry in the location data has a type indicating whether the entry is a city or state.

Example Location Object:
json
نسخ الكود
{
  "id": 43,
  "label_ar": "مسقط",
  "label_en": "Muscat",
  "url_name": "muscat",
  "nhoods": [
    {
      "id": 13474,
      "label_ar": "بوشر",
      "label_en": "Bosher",
      "count": 109,
      "url_name": "bosher"
    }
  ]
}
Usage Example
javascript
نسخ الكود
import { getCities, getStates } from 'OmanStatesAndCities';

// Get cities
const cities = getCities();
console.log(cities);

// Get states
const states = getStates();
console.log(states);
License
MIT License

Author
Said Alhajri (Twitter: @boyhaxdev)