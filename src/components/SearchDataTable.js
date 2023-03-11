import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heart from "react-heart";
import rawDat from '../data/hoteldata.json';

let fromDisp = "";
let toDisp = "";

const EXAMPLE_TRAVEL = [
  { date: '05/04/2023', from: 'Aracaju (SE)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalprice: '1904.21', class: 'First Class'},
  { date: '05/30/2023', from: 'Brasilia (DF)', to: 'Recife (PE)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'FlyingDrops', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
  { date: '05/24/2023', from: 'Campo Grande (MS)', to: 'Sao Paulo (SP)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
  { date: '05/26/2023', from: 'Florianopolis (SC)', to: 'Rio de Janeiro (RJ)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
  { date: '05/12/2023', from: 'Natal (RN)', to: 'Campo Grande (MS)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
  { date: '05/03/2023', from: 'Recife (PE)', to: 'Aracaju (SE)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
  { date: '05/28/2023', from: 'Rio de Janeiro (RJ)', to: 'Natal (RN)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
  { date: '05/28/2023', from: 'Salvador (BH)', to: 'Florianopolis (SC)', hotel: 'Hotel J', hotelprice: '472.98', flight: 'BlueLine', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
  { date: '05/16/2023', from: 'Sao Paulo (SP)', to: 'Brasilia (DF)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1311.38', flightDur: '2.44', flightDist: '937.77', totalprice: '1574.79', class: 'Premium' }
];

export function SearchDataTable(props) {
  //let rawDat = EXAMPLE_TRAVEL;
  let [displayedData, setDisplayedData] = useState(rawDat);

  //for favorites list
  let toggleFavorite = props.toggleFavorite;

  // set conditions for filtering 
  const applyFilter = (to, from) => {
    if(to === "" || from === "") {
      setDisplayedData(rawDat);
    } else {
      let filterData = rawDat.filter((flight) => {
        if(flight.to === to && flight.from === from) {
          // console.log(flight.to);
          // console.log(to);
          // console.log(flight.from);
          // console.log(from);
          return true;
        } 
        // else {
        //   return false;
        // }
      });
      setDisplayedData(filterData)
    }
  }

  //convert data into rows
  const rows = displayedData.map((flight) => {
    return <DestDataRow key={flight.date+flight.to+flight.from} flight={flight} toggleFavorite={toggleFavorite}/>
  });

  if (rows.length == 0) {
    return (
      <div>
      <header className="homepage">
        <h1>Find Your Trip</h1>
      </header>
      {/* section 1 */}
      <FlightSelectForm sortData={rawDat} applyFilterCallback={applyFilter}/>
      <div className="col-12">
        <div className="container">
          <h2 className="text-center">Showing Results for Trips From {fromDisp} to {toDisp}:</h2>
          <div className="row">
            <h3 className="text-right">NO TRAVEL PLANS AVAILABLE: try a different combination of "From" and "To" locations</h3>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      <header className="homepage">
        <h1>Find Your Trip</h1>
      </header>
      {/* section 1 */}
      <FlightSelectForm sortData={rawDat} applyFilterCallback={applyFilter}/>
      <div className="col-12">
        <div className="container">
          <h2 className="text-center">Showing Results for Trips From {fromDisp} to {toDisp}:</h2>
          <div className="row">
            {rows}
          </div>
        </div>
      </div>
    </div>
    
  );

}



function DestDataRow(props) { 
  //for the heart button
  let toggleFavorite = props.toggleFavorite;
  let flight = props.flight;
  const [active, setActive] = useState(false);

  let img = flight.to;
  img = img.substring(0, img.length-5);

  const handleFavoriteClick = (event) => {
    //event.preventDefault();
    setActive(!active);
    toggleFavorite(flight);
    console.log('from destdatarow: should be adding card');
};
  //print each result in card
  return (
    <div className="col-12 d-flex">
      <div className="card mb-4 mt-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
                <img src={'img/'+img+'.jpeg'} className="card-img" />
            </div>
            <div className="col">
              <h2 className="card-title">{flight.to}</h2>
              <p className="card-text">Traveling From: {flight.from}</p>
              <h3 className="card-title">Total Cost for Travels: ${flight.totalprice}</h3>
              <p className="card-text">Hotel: ${flight.hotelprice} ({flight.hotel})</p>
              <p className="card-text">Flight: ${flight.flightprice} ({flight.flight})</p>
              <Link to='/details' type="button" className="btn btn-dark">View More Details</Link>
              <a className="btn btn-light">Add to Comparison</a>
            </div>
            <div className='col-sm-1 mt-4'>
                <div style={{ width: "2rem" }}>
			            <Heart isActive={active} onClick={handleFavoriteClick} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "red" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
		            </div>
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
    toDisp = event.target.value;
  }
  const handleSelectFrom = (event) => {
    setSelectInputFrom(event.target.value)
    fromDisp = event.target.value;
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

  const optionElemsTo = uniqueNamesTo.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })

  const optionElemsFrom = uniqueNamesFrom.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })


  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <div className='find'>
            <div className='container card'>
              <div className='form card-body'>
                <div className='row'>
                  {/* from filter */}
                    <div className="input-group row  mb-3 col">
                        <label htmlFor='fromInput' className='col-lg-1 row'>From</label>
                        <div className="col-lg-11">
                            <select type="search" id="inputLGEx" className="form-control" value={selectInputFrom} onChange={handleSelectFrom} required>
                                <option value="">
                                </option>
                                {optionElemsFrom}
                            </select>
                        </div>
                    </div>
                    {/* from filter */}
                    <div className="input-group row mb-3 col">
                        <label htmlFor="toInput" className="col-lg-1 row">To</label>
                        <div className="col-lg-11">
                            <select type="search" id="inputLGEx" className="form-control" value={selectInputTo} onChange={handleSelectTo} required>
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