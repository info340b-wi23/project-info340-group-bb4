import React, { useState } from 'react';

// const EXAMPLE_TRAVEL = [
//   { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalprice: '1904.21', class: 'First Class'},
//   { date: '05/30/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'FlyingDrops', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
//   { date: '05/24/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
//   { date: '05/26/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
//   { date: '05/12/2023', from: 'New York (NY)', to: 'Los Angeles (LA)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
//   { date: '05/03/2023', from: 'Huston (HU)', to: 'New York (NY)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
//   { date: '05/28/2023', from: 'New York (NY)', to: 'Huston (HU)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
//   { date: '05/16/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1311.38', flightDur: '2.44', flightDist: '937.77', totalprice: '1574.79', class: 'Premium' }
// ];


export function SearchDataTable(props) {
  let rawDat = props.travelData;
  //Your work goes here
  let [displayedData, setDisplayedData] = useState(rawDat);

  const applyFilter = (to, from) => {
    if(to === "" || from === "") {
      setDisplayedData(rawDat);
    } else {
      let filterData = rawDat.filter((game) => {
        if(game.to === to && game.from === from) {
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



function DestDataRow({ flight }) { //game = props.game
  return (
    <div class="col-12 d-flex">
      <div class="card mb-4 w-100">
        <div class="card-body">
          <div class="row">
            
            <div class="col">
              <h2 class="card-title">Total: ${flight.totalprice}</h2>
              <h3 class="card-title">Hotel: {flight.hotel}</h3>
              <p class="card-text">Hotel Price: ${flight.hotelprice} </p>
              <h3 class="card-title">Flight: {flight.flight}</h3>
              <p class="card-text">Flight Price: ${flight.flightprice} (Class: {flight.class})</p>
              <a class="btn btn-dark">View details</a>
              <a class="btn btn-dark">Add to Favorites</a>
              <a class="btn btn-dark">Add to Comparison</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlightSelectForm(props) {
  let sortData = props.sortData;

  //Your work goes here
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


    //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  let uniqueNamesTo = [];
  for(let i = 0; i < sortData.length; i++) {
    if(!(uniqueNamesTo.includes(sortData[i].to))) {
      uniqueNamesTo.push(sortData[i].to);
    }
  }

  let uniqueNamesFrom = [];
  for(let i = 0; i < sortData.length; i++) {
    if(!(uniqueNamesFrom.includes(sortData[i].from))) {
      uniqueNamesFrom.push(sortData[i].from);
    }
  }

  const optionElemsTo = sortData.map((uniqueNamesTo) => {
    return <option key={uniqueNamesTo} value={uniqueNamesTo}>{uniqueNamesTo}</option>
  })

  const optionElemsFrom = sortData.map((uniqueNamesFrom) => {
    return <option key={uniqueNamesFrom} value={uniqueNamesFrom}>{uniqueNamesFrom}</option>
  })

  return (
    <div className="row">
      <div className="col-12">
        <div className="find">
          <div className="container card">
            <form id="signUpForm" className="form card-body" novalidate>
              <div className="row">
                {/* FROM */}
                <div className="input-group row mb-3 col">
                  <select id="teamSelect" className="form-select" value={selectInputTo} onChange={handleSelectTo}>
                    <option value="">To Destination</option>
                    {optionElemsTo}
                  </select>
                </div>
      
                {/* TO */}
                <div className="input-group row mb-3 col">
                <select id="teamSelect" className="form-select" value={selectInputFrom} onChange={handleSelectFrom}>
                    <option value="">From Destination</option>
                    {optionElemsFrom}
                  </select>
                </div>
              </div>

              {/* <!-- Submit --> */}
              <div className="d-grid gap-2 col-6 mx-auto">
              <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search</button>
              </div>

            </form>
          </div> 

        </div>
      </div>
    </div>

        // <div className="row align-items-center mb-3">
    //   <div className="col-auto">
    //     <select id="teamSelect" className="form-select" value={selectInputTo} onChange={handleSelectTo}>
    //       <option value="">Show all teams</option>
    //       {optionElemsTo}
    //     </select>
    //   </div>
    //   <div className="col-auto">
    //     <select id="teamSelect" className="form-select" value={selectInputFrom} onChange={handleSelectFrom}>
    //       <option value="">Show all teams</option>
    //       {optionElemsFrom}
    //     </select>
    //   </div>
    //   <div className="col-auto">
    //     <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply Filter</button>
    //   </div>
    // </div>
    
  );
}