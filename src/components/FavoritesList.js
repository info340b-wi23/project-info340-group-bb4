import React from 'react';

export function FavoritesCard(props){
   
    const favorite = props.location;
    //favorite.pinned = true

    return(
    <div className="card">
        <div className="col-sm">
            <img src={favorite.img} className="card-img" />
        </div>
        <div className="col-sm-6">
            <h2 className="card-title">{favorite.name}</h2>
            <p className="card-text">{favorite.tagline}</p>
            <h3>Total Cost for Travels: ${favorite.totalCost}</h3>
            <p>Date Pinned: {favorite.pinDate}</p>
            <a href="favorites-popout.html" type="button" className="btn btn-dark">View More Details</a>
        </div>

    </div>
    );
}

export default function favoritesList(props){
    let favoriteList = props.favorites;
    
    let favoriteCards = favoriteList.map((location) => {
        return <FavoritesCard key={location.name} location={location} />
    });

    return(
        <div id="card-deck">
            <h2>Your Travel Bucket List</h2>
            <div className="card-deck">{favoriteCards}</div>
        </div>
    );
}