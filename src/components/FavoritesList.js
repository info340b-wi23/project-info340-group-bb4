import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Heart from "react-heart";

export function FavoritesCard(props){
   
    const favorite = props.location;
    const toggleFavorite = props.toggleFavorite;
    let img = favorite.to;

    //for the heart button
    const [active, setActive] = useState(true);

    //to remove favorite cards - IT WORKS!
    const handleFavoriteClick = () => {
        setActive(!active);
        toggleFavorite(favorite);
    };

    return(
        <div className="col-12 d-flex">
            <div className='card mb-4 mt-4 w-100'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 favcard">
                            <img src={'img/'+img+'.jpeg'} className="card-img" alt= {img}/>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="card-title">{favorite.to}</h2>
                            <p>Traveling From: {favorite.from}</p>
                            <h3>Total Cost for Travels: ${favorite.totalprice}</h3>
                            <p>Travel Date: {favorite.date}</p>
                            <Link to="/details" type="button" className="btn btn-dark" aria-label="click to view more details">View More Details</Link>
                        </div>
                        <div className='col-sm-1 mt-4'>
                            <div style={{ width: "2rem" }}>
                                <Heart isActive={active} onClick={handleFavoriteClick} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "red" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FavoritesList(props){
    
    const toggleFavorite = props.toggleFavorite;
    let favList = props.fav;
    
    if(favList.length === 0){
        return(
            <div>
                <h3 className='text-center'>No favorite locations added!</h3>
                {/* add link to homesearch? */}
            </div>
        )
    }


    let favoriteCards = favList.map((location) => {
        return <FavoritesCard 
            key={location.from+location.to+location.hotelprice+location.date} 
            location={location} 
            toggleFavorite={toggleFavorite} />
    });

    return(
        <div id="card-deck" className='container-fluid'>
            <div className="card-deck">{favoriteCards}</div>
        </div>
    );
}