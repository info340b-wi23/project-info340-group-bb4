import React from 'react';

export function FavoritesCard(props){
   
    const favorite = props.location;
    //favorite.pinned = true

    return(
        <div className='card mx-auto mb-4'>
            <div className="row">
                <div className="col-sm favcard">
                    <img src={'img/'+favorite.img} className="card-img" />
                </div>
                <div className="col-sm-6">
                    <h2 className="card-title">{favorite.to}</h2>
                    <p>Traveling From: {favorite.from}</p>
                    <h3>Total Cost for Travels: ${favorite.totalCost}</h3>
                    <p>Date Pinned: {favorite.pinDate}</p>
                    <a href="" type="button" className="btn btn-dark">View More Details</a>
                </div>
                <div className='col-sm-1'>
                    <button className="btn like-button">
                        <span className="material-icons" style={{ color: 'red' }}>♥</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function FavoritesList(props){

    const EXAMPLE_FAVORITES = [
        {from: 'Florianopolis (SC)', to: 'Salvador (BH)', totalCost: '1000', img:'salvador.jpeg', pinDate: '2-3-2020', key:1},
        {from: 'San Jose (US)', to: 'Beijing (CN)', totalCost: '1200', img:'beijing.jpeg', pinDate: '2-3-2020', key:2},
        {from: 'Seattle (US)', to: 'Calgary (CA)', totalCost: '1300', img:'calgary.jpeg', pinDate: '2-3-2020', key:3},
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