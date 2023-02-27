import React, { useState } from 'react';

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
  //Your work goes here
  let [displayedData, setDisplayedData] = useState(rawDat);

  const applyFilter = (to, from) => {
    if(to === "" || from === "") {
      setDisplayedData(rawDat);
    } else {
      let filterData = rawDat.filter((flight) => {
        if(flight.to === to && flight.from === flight) {
          return true;
        } 
      });
      setDisplayedData(filterData)
    }
  }
  //console.log(displayedData)
  //convert data into rows
  const rows = displayedData.map((flight) => {
    return <DestDataRow key={flight.date} flight={flight} />
  });
  console.log(rows[0])

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
  //console.log(flight)
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

  const optionElemsTo = sortData.map((sortData) => {
    return <option key={sortData.to} value={sortData => <div>{sortData.to}</div>}></option>
  })

  const optionElemsFrom = sortData.map((sortData) => {
    return <option key={sortData.from} value={sortData => <div>{sortData.from}</div>}></option>
  })

  return (
    <div>
        <div className='row'>
            <div className="input-group row align-items-center mb-3">
                <label htmlFor='fromInput' className='col-lg-1 row'>From</label>
                <div className="col-lg-11">
                    <select type="search" id="inputLGEx" class="form-control" value={selectInputTo} onChange={handleSelectTo} required>
                        <option value="">
                            {/* <input/> */}
                        </option>
                        {optionElemsTo}
                    </select>
                </div>
            </div>
            <div class="input-group row mb-3 col">
                <label htmlFor="toInput" class="col-lg-1 row">To</label>
                <div class="col-lg-11">
                    <select type="search" id="inputLGEx" class="form-control" value={selectInputFrom} onChange={handleSelectFrom} required>
                        <option value="">
                            {/* <input/> */}
                        </option>
                        {optionElemsFrom}
                    </select>                
                </div>
            </div>
        </div>
        <div className="col-auto">
            <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search</button>
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