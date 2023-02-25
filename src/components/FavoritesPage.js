import React from 'react';
import FavoritesList from './FavoritesList.js';
//import { NavBar } from './Navbar.js';

export function MapComp(props){

    return(
        <div id="map">
            <img src="img/world.svg" alt="global map with destinations" />
            <p className="text-center">See your bucket list locations on this map!</p>
        </div>
    );
}

export default function FavoritesPage(props){

    return(
        <div>
            {/* <NavBar /> */}
            <h2>Your Travel Bucket List</h2>
            <p>Pin favorites on your search page and create the perfect travel bucket list for your future endeavors!</p>
            <MapComp />
            <FavoritesList />
        </div>
    );
}