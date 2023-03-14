import React from 'react';
import FavoritesList from './FavoritesList.js';


export default function FavoritesPage(props){
    let favArray = props.favArray;
    const toggleFavorite = props.toggleFavorite;

    return(
        <div>
            <h2 className="favorites mb-6">Your Travel Bucket List</h2>
            <p className="favorites">Pin favorites on your search page and create the perfect travel bucket list for your future endeavors! </p>
            <p className="favorites">After you have traveled to one of your dream destinations, simply click the heart button to remove locations from your bucket list!</p>
            <FavoritesList favArray={favArray} toggleFavorite={toggleFavorite}/>
        </div>
    );
}