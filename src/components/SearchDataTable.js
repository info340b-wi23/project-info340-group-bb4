import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heart from "react-heart";
import { Alert } from 'react-bootstrap';

let fromDisp = "";
let toDisp = "";

export function SearchDataTable(props) {
  let rawDat = props.hotelData;
  let [displayedData, setDisplayedData] = useState(rawDat);
  let [alertMessage, setAlertMessage] = useState(props.alertMessage);

  //for favorites list
  let toggleFavorite = props.toggleFavorite;

  // set conditions for filtering 
  const applyFilter = (to, from) => {
    if(to === "" && from === "") {
      setDisplayedData(rawDat);
    } else {
      let filterData = rawDat.filter((flight) => {
        if(flight.to === to && flight.from === from) {
          return true;
        } 
        return false;
      });
      setDisplayedData(filterData)
      if (filterData.length === 0) {
        setAlertMessage("NO TRAVEL PLANS AVAILABLE: try a different combination of 'From' and 'To' locations");
      } else {
        setAlertMessage(props.alertMessage);
      }
    }
  }

  //convert data into rows
  const rows = displayedData.map((flight) => {
    return <DestDataRow key={flight.date+flight.to+flight.from} flight={flight} toggleFavorite={toggleFavorite}/>
  });

  if (rows.length === 0) {
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
            {/* display any error messages as dismissible alerts */}
            {alertMessage &&
              <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>}
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
          {/* display any error messages as dismissible alerts */}
          {alertMessage &&
            <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
          }
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

  const handleFavoriteClick = () => {
    setActive(!active);
    toggleFavorite(flight);
};
  return (
    <div className="col-12 d-flex">
      <div className="card mb-4 mt-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
                <img src={'img/'+flight.to+'.jpeg'} className="card-img" alt = {flight.to}/>
            </div>
            <div className="col">
              <h2 className="card-title">{flight.to}</h2>
              <p className="card-text">Traveling From: {flight.from}</p>
              <h3 className="card-title">Total Cost for Travels: ${flight.totalprice}</h3>
              <p className="card-text">Hotel: ${flight.hotelprice} ({flight.hotel})</p>
              <p className="card-text">Flight: ${flight.flightprice} ({flight.flight})</p>
              <Link to={'/details'} type="button" className="btn btn-dark">View More Details</Link>
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