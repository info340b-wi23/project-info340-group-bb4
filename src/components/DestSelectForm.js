import React, { useState } from 'react';


export function DestSelectForm(props) {

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

  let travelData =EXAMPLE_TRAVEL;

  // track From selected from the <select> input 
  const [selectFrom, setSelectFrom] = useState('');

  // track To selected from the <select> input 
  const [selectTo, setSelectTo] = useState('');

  // track search option checkbox input -- hotel
  const [searchOption, setSearchOption] = useState(false);

  const handleFromSelect = (event) => {
    setSelectFrom(event.target.value);
  }

  const handleToSelect = (event) => {
    setSelectTo(event.target.value);
  }

  const handleCheck = (event) => {
    setSearchOption(event.target.checked);
  }

  const handleClick = (event) => {
    event.preventDefault();
    props.applyFilterCallback(selectFrom, searchOption);
  }

  const optionElems = travelData.map((travelData) => {
    return <option key={travelData.from} value={travelData => <div>{travelData.from}</div>}></option>
  })

  return(
    <div>
        <div className='row'>
            <div className="input-group row align-items-center mb-3">
                <label htmlFor='fromInput' className='col-lg-1 row'>From</label>
                <div className="col-lg-11">
                    <select type="search" id="inputLGEx" class="form-control" value={selectFrom} onChange={handleFromSelect} required>
                        <option value="">
                            {/* <input/> */}
                        </option>
                        {optionElems}
                    </select>
                </div>
            </div>
            <div class="input-group row mb-3 col">
                <label htmlFor="toInput" class="col-lg-1 row">To</label>
                <div class="col-lg-11">
                    <select type="search" id="inputLGEx" class="form-control" value={selectTo} onChange={handleToSelect} required>
                        <option value="">
                            {/* <input/> */}
                        </option>
                        {optionElems}
                    </select>                
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-auto'>
                <div className='form-check'>
                    <input id="flexCheckDefault" type="checkbox" className="form-check-input" checked={searchOption} onChange={handleCheck} />
                    <label htmlFor="flexCheckDefault" className="form-check-label">With Hotel</label>
                </div>
            </div>
        </div>
        <div className="col-auto">
            <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Search</button>
        </div>
    </div>
  );


}