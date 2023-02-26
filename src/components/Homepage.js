import React, { useState } from 'react';
import TravelList from './TravelList.js';
import { DestSelectForm } from './DestSelectForm';
import  DestDataCard from './DestDataCard';

export function Homepage(props) {
  const [filterFrom, setFilterFrom] = useState('');
  const [filterDest, setFilterDest] = useState('');
  const [filterHotel,setFilterHotel]  = useState(false);

  const displayedData = props.travelData.filter((obj)=>{
    if(filterDest === '' && filterFrom === '') {
      return props.travelData;
    } else {
      if(filterHotel === true) {
        return ((obj.hotel === filterDest) && (obj.hotel === filterFrom));
      } 
      // else {
      //   return (obj.winner === filterDest);
      // }
    }
  })

  function applyFilter(from, dest, hotel) {
    setFilterFrom(from);
    setFilterDest(dest);
    setFilterHotel(hotel);
  }

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueDest = [...new Set(props.travelData.reduce((all, current) => {
    return all.concat([current.from, current.hotel]);
  }, []))].sort();

  // fbhdjskfghjkl;dfghjkl

  return (
    <div>
      <header>
        <h1 className="homepage">Find Your Trip</h1>
      </header>

      <main>
        {/* <div className="row">
          <div className="col-12">
            <div className="find">
              <div className="container card">
                <form id="signUpForm" className="form card-body" novalidate>
                  <div className="row">

                    <div className="input-group row mb-3 col">
                      <label for="fromInput" className="col-lg-1 row">From</label>
                      <div className="col-lg-11">
                        <input type="search" id="inputLGEx" className="form-control" required/>
                      </div>
                    </div>
          
                    <div className="input-group row mb-3 col">
                      <label for="toInput" className="col-lg-1 row">To</label>
                      <div className="col-lg-11">
                        <input type="search" id="inputLGEx" className="form-control" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-group row mb-3 col">
                      <label for="departInput" className="col-lg-1 row">Depart</label>
                      <div className="col-lg-11">
                        <input type="date" id="start" className="form-control" required/>
                      </div>
                    </div>
            
                    <div className="input-group row mb-3 col">
                      <label for="returnInput" className="col-lg-1 row">Return</label>
                      <div className="col-lg-11">
                        <input type="date" id="end" className="form-control" required/>
                      </div>
                    </div>
            
                    <div className="input-group row mb-3 col">
                      <label for="passingerInput" className="col-lg-1 row">Passinger#</label>
                      <div className="col-lg-11">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Please select...</option>
                          <option value="1">1 Passinger</option>
                          <option value="2">2 Passingers</option>
                          <option value="3">3 Passingers</option>
                          <option value="4">4 Passingers</option>
                          <option value="5">5 Passingers</option>
                          <option value="6">6 Passingers</option>
                          <option value="7">7 Passingers</option>
                          <option value="8">8 Passingers</option>
                          <option value="9">9 Passingers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  

                  <div className="checkbox">
                    <p className="search-text">SEARCH OPTIONS</p>
                    
                    <div className="form-check form-check-inline search">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" for="flexCheckDefault">
                        With Stays
                      </label>
                    </div>
          
                    <div className="form-check form-check-inline search">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" for="flexCheckDefault">
                        With ...
                      </label>
                    </div>
                    
                    <div className="form-check form-check-inline search">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" for="flexCheckDefault">
                        With ..
                      </label>
                    </div>
                  </div>
          
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary search-btn">Search</button>
                  </div>

                </form>
              </div> 
            </div>
          </div>
        </div> */}

        {/* section 1 */}
        <DestSelectForm destOptions={uniqueDest} applyFilterCallback={applyFilter}/>
        {/* <DestDataCard/> */}
        {/* table? */}
        <DestDataCard data={displayedData}/> 

        {/* section 2 */}
        <h2 className="examplePlace">Place You May Like</h2>
        <TravelList/>

      </main>
    </div>
    
  );

}