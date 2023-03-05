import React from 'react';
import FavoritesList from './FavoritesList.js';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"


// code from React Simple Maps for simple world map svg
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export function MapChart() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export default function FavoritesPage(props){

    return(
        <div>
            <h2 className="favorites mb-6">Your Travel Bucket List</h2>
            <p className="favorites">Pin favorites on your search page and create the perfect travel bucket list for your future endeavors! </p>
            <p className="favorites">After you have traveled to one of your dream destinations, simply click the heart button to remove locations from your bucket list!</p>
            {/* <MapChart /> */}
            <FavoritesList />
        </div>
    );
}