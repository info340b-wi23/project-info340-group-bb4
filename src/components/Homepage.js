import React from 'react';

export function Homepage(props) {

  return (
    <div>
      <header className="homepage">
        <h1>Find Your Trip</h1>
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
                        <input type="text" id="inputLGEx" className="form-control" required/>
                      </div>
                    </div>
          
                    {/* TO */}
                    <div className="input-group row mb-3 col">
                      <label for="toInput" className="col-lg-1 row">To</label>
                      <div className="col-lg-11">
                        <input type="text" id="inputLGEx" className="form-control" required/>
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
          <h2 className="examplePlace">Place You May Like</h2>
          <div className="expCards col-12">
            <div className="container">
              {/* <!-- Card 1 --> */}
              <div className="row">
                <div className="col-12 d-flex">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img className="pb-3" src="img/Barcelona.jpeg" alt="view in Barcelona"/>
                        </div>
                        <div className="col-sm">
                          <h2 className="card-title">Barcelona</h2>
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?</p>
                          <a className="btn btn-dark" href="home-search-details.html">View details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                {/* <!-- Card 2 --> */}
                <div className="col-12 d-flex">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img className="pb-3" src="img/Hawaii.jpg" alt="view in Hawaii"/>
                        </div>
                        <div className="col-sm">
                          <h2 className="card-title">Hawaii</h2>
                          <p className="card-text">Quam, officiis ut adipisci pariatur veniam labore ipsum optio tenetur!</p>
                          <a className="btn btn-dark" href="home-search-details.html">View details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <!-- Card 3 --> */}
                <div className="col-12 d-flex">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img className="pb-3" src="img/Architecture-of-Santorini.jpeg" alt="Architecture of Santorini"/>
                        </div>
                        <div className="col-sm">
                          <h2 className="card-title">Santorini, Greece</h2>
                          <p className="card-text">Reiciendis doloremque voluptas veniam repellendus quisquam deleniti tenetur quia a.</p>
                          <a className="btn btn-dark" href="home-search-details.html">View details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                {/* <!-- Card 4 --> */}
                <div className="col-12 d-flex">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img className="pb-3" src="img/Rotterdam-skyline-Erasmus-bridge.jpeg" alt="view of Rotterdam, Netherlands"/>
                        </div>
                        <div className="col-sm">
                          <h2 className="card-title">Rotterdam, Netherlands</h2>
                          <p className="card-text">Maiores voluptate rem odit dolor temporibus asperiores maxime velit sapiente.</p>
                          <a className="btn btn-dark" href="home-search-details.html">View details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
    
  );

}