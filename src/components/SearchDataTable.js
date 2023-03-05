import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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


export function SearchDataTable(props) {
  let rawDat = EXAMPLE_TRAVEL;
  let [displayedData, setDisplayedData] = useState(rawDat);

  // set conditions for filtering 
  const applyFilter = (to, from) => {
    if(to === "" || from === "") {
      setDisplayedData(rawDat);
    } else {
      let filterData = rawDat.filter((flight) => {
        if(flight.to === to && flight.from === from) {
          return true;
        } 
      });
      setDisplayedData(filterData)
    }
  }

  //convert data into rows
  const rows = displayedData.map((flight) => {
    return <DestDataRow key={flight.date} flight={flight} />
  });

  return (
    <div>
      <header className="homepage">
        <h1>Find Your Trip</h1>
      </header>
      {/* section 1 */}
      <FlightSelectForm sortData={rawDat} applyFilterCallback={applyFilter}/>
      <div class="col-12">
        <div class="container">
          <div class="row">
            {rows}
          </div>
        </div>
      </div>
    </div>
    
  );

}



function DestDataRow({ flight }) { 
  //print each result in card
  return (
    <div class="col-12 d-flex">
      <div class="card mb-4 mt-4 w-100">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h2 class="card-title">Total: ${flight.totalprice}</h2>
              <h3 class="card-title">Hotel: {flight.hotel}</h3>
              <p class="card-text">Hotel Price: ${flight.hotelprice} </p>
              <h3 class="card-title">Flight: {flight.flight}</h3>
              <p class="card-text">Flight Price: ${flight.flightprice} (Class: {flight.class})</p>
              <Link to="/details" type="button" className="btn btn-dark">View More Details</Link>
              <a class="btn btn-dark">Add to Favorites</a>
              <a class="btn btn-dark">Add to Comparison</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// create and html the search navigation
function FlightSelectForm(props) {
  let sortData = props.sortData;

  let [selectInputTo, setSelectInputTo] = useState("");
  let [selectInputFrom, setSelectInputFrom] = useState("");

  const handleSelectTo = (event) => {
    setSelectInputTo(event.target.value);
  }
  const handleSelectFrom = (event) => {
    setSelectInputFrom(event.target.value)
  }
  const handleClick = (event) => {
    props.applyFilterCallback(selectInputTo, selectInputFrom);
  }

  const uniqueNamesTo = [...new Set(sortData.reduce((all, current) => {
    return all.concat([current.to]);
  }, []))].sort();

  const uniqueNamesFrom = [...new Set(sortData.reduce((all, current) => {
    return all.concat([current.from]);
  }, []))].sort();

  console.log(uniqueNamesTo)
  const optionElemsTo = uniqueNamesTo.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })

  const optionElemsFrom = uniqueNamesFrom.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })

  console.log(optionElemsTo)

  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <div className='find'>
            <div className='container card'>
              <div id='signUpForm' className='form card-body'>
                <div className='row'>
                  {/* from filter */}
                    <div className="input-group row  mb-3 col">
                        <label htmlFor='fromInput' className='col-lg-1 row'>From</label>
                        <div className="col-lg-11">
                            <select type="search" id="inputLGEx" class="form-control" value={selectInputFrom} onChange={handleSelectFrom} required>
                                <option value="">
                                </option>
                                {optionElemsFrom}
                            </select>
                        </div>
                    </div>
                    {/* from filter */}
                    <div class="input-group row mb-3 col">
                        <label htmlFor="toInput" class="col-lg-1 row">To</label>
                        <div class="col-lg-11">
                            <select type="search" id="inputLGEx" class="form-control" value={selectInputTo} onChange={handleSelectTo} required>
                                <option value="">
                                </option>
                                {optionElemsTo}
                            </select>                
                        </div>
                    </div>
                </div>
                <div className='row'>
                </div>
                {/* search filter */}
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search</button>

                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    
  );
}