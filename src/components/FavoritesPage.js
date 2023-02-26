import React from 'react';
import FavoritesList from './FavoritesList.js';
//import { NavBar } from './Navbar.js';
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
            {/* <NavBar /> */}
            <h2 className="favorites">Your Travel Bucket List</h2>
            <MapChart />
            <p className="favorites">Pin favorites on your search page and create the perfect travel bucket list for your future endeavors!</p>
            <FavoritesList />
        </div>
    );
}