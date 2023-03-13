import React, { useState } from 'react';
import TravelList from './TravelList.js';
// import { DestSelectForm } from './DestSelectForm';
import rawDat from '../data/hoteldata.json';
import { Link } from 'react-router-dom';


export function Homepage(props) {
  const EXAMPLE_TRAVEL = [
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalprice: '1904.21', class: 'First Class'},
    { date: '05/30/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'FlyingDrops', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
    { date: '05/24/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
    { date: '05/26/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
    { date: '05/12/2023', from: 'New York (NY)', to: 'Los Angeles (LA)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
    { date: '05/03/2023', from: 'Huston (HU)', to: 'New York (NY)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
    { date: '05/28/2023', from: 'New York (NY)', to: 'Huston (HU)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
    { date: '05/16/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1311.38', flightDur: '2.44', flightDist: '937.77', totalprice: '1574.79', class: 'Premium' }
  ];




  return (
    <div>
      <header>
        {/* <h1 className="homepage">Faran</h1> */}
        <div className="container homeBox">
          <div className="d-grid gap-2 col-6 mx-auto">
            <h1 className='homeT'>Thinking Where to Go?</h1>
            <Link to="search" type="button" className="btn btn-primary">Start Your Search</Link>
          </div>
        </div>
      </header>

      <main>
        {/* section 1 */}
        {/* <DestSelectForm destOptions={uniqueDest} applyFilterCallback={applyFilter}/> */}
        
        <div className="container row">
          <div className='illustration-container col'>
            <img className="faran" src="img/noun-world-travel-5074160.svg" alt="faran logo"/>
          </div>
          <div className="container col goFav">
            <div className="d-grid gap-2 col-6 mx-auto">
              <h2 className='homepageText'>Had a Travel Plan?</h2>
              <Link to="favorites" type="button" className="btn btn-primary">Go To Your Travel List!</Link>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <h2 className="examplePlace">Here to help</h2>
        <h3 className="exampleP"> -- keep you on the move</h3>
        <TravelList travelRec={rawDat}/>

      </main>
    </div>
    
  );

}