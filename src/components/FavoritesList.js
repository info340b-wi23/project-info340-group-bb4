import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Heart from "react-heart";

export function FavoritesCard(props){
   
    const favorite = props.location;
    //favorite.pinned = true

    //for the heart button
    const [active, setActive] = useState(true);

    return(
        <div className="col-12 d-flex">
            <div className='card mb-4 mt-4 w-100'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 favcard">
                            <img src={'img/'+favorite.img} className="card-img" />
                        </div>
                        <div className="col-sm-6">
                            <h2 className="card-title">{favorite.to}</h2>
                            <p>Traveling From: {favorite.from}</p>
                            <h3>Total Cost for Travels: ${favorite.totalPrice}</h3>
                            <p>Date Pinned: {favorite.pinDate}</p>
                            <Link to="/details" type="button" className="btn btn-dark" aria-label="click to view more details">View More Details</Link>
                        </div>
                        <div className='col-sm-1 mt-4'>
                            {/* <button className="btn like-button">
                                <span className="material-icons" style={{ color: 'red' }}>♥</span>
                            </button> */}
                            <div style={{ width: "2rem" }}>
                                <Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "red" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FavoritesList(props){

    const EXAMPLE_FAVORITES = [
        {from: 'Florianopolis (SC)', to: 'Salvador (BH)', totalPrice: '1000', img:'salvador.jpeg', pinDate: '2-3-2020'},
        {from: 'San Jose (US)', to: 'Beijing (CN)', totalPrice: '1200', img:'beijing.jpeg', pinDate: '2-3-2020'},
        {from: 'Seattle (US)', to: 'Calgary (CA)', totalPrice: '1300', img:'calgary.jpeg', pinDate: '2-3-2020'},
    ];

    //let favoriteList = props.favorites;
    let favoriteList = EXAMPLE_FAVORITES;

    let favoriteCards = favoriteList.map((location) => {
        return <FavoritesCard key={location.key} location={location} />
    });

    return(
        <div id="card-deck" className='container-fluid'>
            <div className="card-deck">{favoriteCards}</div>
        </div>
    );
}