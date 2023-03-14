import React from 'react';
import HomeDestCard from './HomeDestCard.js'
import rawDat from '../data/hoteldata.json';
import { Link } from 'react-router-dom';


export function Homepage(props) {

  return (
    <div>
      <main>
        {/* section 1 */}
        <div className="container homeBox">
          <div className="d-grid gap-2 col-6 mx-auto">
            <h1 className='homeT'>Thinking Where to Go?</h1>
            <Link to="search" type="button" className="btn btn-primary">Start Your Search</Link>
          </div>
        </div>
        <div className="container row">
          <div className='illustration-container col-6'>
            <img className="faran" src="img/noun-world-travel-5074160.svg" alt="faran logo"/>
          </div>
          <div className="container col goFav col-6">
            <div className="d-grid gap-2 mx-auto">
              <h2 className='homepageText'>Have a dream destination in mind?</h2>
              <p className='center'>View your saved travel list.</p>
              <Link to="favorites" type="button" className="btn btn-primary">Go To Your Travel List!</Link>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <h2 className="examplePlace">Here to help</h2>
        <h3 className="exampleP"> -- keep you on the move</h3>
        <HomeDestCard travelRec={rawDat}/>

      </main>
    </div>
  );
}