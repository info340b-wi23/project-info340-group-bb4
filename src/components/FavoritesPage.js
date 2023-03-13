import React from 'react';
import FavoritesList from './FavoritesList.js';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth'


export default function FavoritesPage(props){
    
    let favoritesList = props.favoritesList;
    const toggleFavorite = props.toggleFavorite;

    const currentUser = props.currentUser;
    const favObjArray = props.favArray;
    const howToAddFav = props.howToAddFav;

    return(
        <div>
            <h2 className="favorites mb-6">Your Travel Bucket List</h2>
            <p className="favorites">Pin favorites on your search page and create the perfect travel bucket list for your future endeavors! </p>
            <p className="favorites">After you have traveled to one of your dream destinations, simply click the heart button to remove locations from your bucket list!</p>
            <FavoritesList 
                fav={favoritesList} toggleFavorite={toggleFavorite}
                currentUser={currentUser} favArray={favObjArray} howToAddFav={howToAddFav}

            />
        </div>
    );
}