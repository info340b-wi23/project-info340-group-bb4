import React from 'react';

import TravelList from './TravelList.js';

export function Homepage(props) {
  const currentpage = props.currentpage;
  return (
    <div>
      <header>
        <h1 className="homepage">Find Your Trip</h1>
      </header>

      <main>
        <div className="row">
          <div className="col-12">
            <div className="find">
              <div className="container card">
                <form id="signUpForm" className="form card-body" novalidate>
                  <div className="row">
                    {/* FROM */}
                    <div className="input-group row mb-3 col">
                      <label for="fromInput" className="col-lg-1 row">From</label>
                      <div className="col-lg-11">
                        <input type="search" id="inputLGEx" className="form-control" required/>
                      </div>
                    </div>
          
                    {/* TO */}
                    <div className="input-group row mb-3 col">
                      <label for="toInput" className="col-lg-1 row">To</label>
                      <div className="col-lg-11">
                        <input type="search" id="inputLGEx" className="form-control" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Depart */}
                    <div className="input-group row mb-3 col">
                      <label for="departInput" className="col-lg-1 row">Depart</label>
                      <div className="col-lg-11">
                        <input type="date" id="start" className="form-control" required/>
                      </div>
                    </div>
            
                    {/* Return */}
                    <div className="input-group row mb-3 col">
                      <label for="returnInput" className="col-lg-1 row">Return</label>
                      <div className="col-lg-11">
                        <input type="date" id="end" className="form-control" required/>
                      </div>
                    </div>
            
                    {/* <!-- Passinger # --> */}
                    <div className="input-group row mb-3 col">
                      <label for="passingerInput" className="col-lg-1 row">Passenger #</label>
                      <div className="col-lg-11">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Please select...</option>
                          <option value="1">1 Passenger</option>
                          <option value="2">2 Passengers</option>
                          <option value="3">3 Passengers</option>
                          <option value="4">4 Passengers</option>
                          <option value="5">5 Passengers</option>
                          <option value="6">6 Passengers</option>
                          <option value="7">7 Passengers</option>
                          <option value="8">8 Passengers</option>
                          <option value="9">9 Passengers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* <!-- Other search options -->
                  <!-- https://getbootstrap.com/docs/5.3/forms/checks-radios/#inline --> */}
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
          
                  {/* <!-- Submit --> */}
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary search-btn">Search</button>
                  </div>

                </form>
              </div> 
            </div>
          </div>


          {/* <!-- section 2 --> */}
          {/* <TravelList/> */}


        </div>

        {/* section 2 */}
        <h2 className="examplePlace">Place You May Like</h2>
        <TravelList/>

      </main>
    </div>
    
  );

}