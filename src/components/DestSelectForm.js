import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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

  const EXAMPLE_NUM_PPL = [
    { id: 1, string: "1 Passinger" },
    { id: 2, string: "2 Passinger" },
    { id: 3, string: "3 Passinger" },
    { id: 4, string: "5 Passinger" },
    { id: 6, string: "6 Passinger" },
    { id: 7, string: "7 Passinger" },
    { id: 8, string: "8 Passinger" },
    { id: 9, string: "9 Passinger" }
  ]

  let numData =EXAMPLE_NUM_PPL;
  

  // track From selected from the <select> input 
  const [selectFrom, setSelectFrom] = useState('');

  // track To selected from the <select> input 
  const [selectTo, setSelectTo] = useState('');

  // track search option checkbox input -- hotel
  const [searchOption, setSearchOption] = useState(false);

  // const [selectNum, setSelectNum] = useState(false);

  const handleFromSelect = (event) => {
    setSelectFrom(event.target.value);
  }

  const handleToSelect = (event) => {
    setSelectTo(event.target.value);
  }
  
  // const handleNumSelect = (event) => {
  //   setSelectNum(event.target.value);
  // }

  const handleCheck = (event) => {
    setSearchOption(event.target.checked);
  }

  const handleClick = (event) => {
    event.preventDefault();
    props.applyFilterCallback(selectFrom, searchOption);
  }

  const optionElemsFrom = travelData.map((travelData) => {
    return <option key={travelData.from} value={travelData => <div>{travelData.from}</div>}></option>
  })

  const optionElemsTo = travelData.map((travelData) => {
    return <option key={travelData.to} value={travelData => <div>{travelData.to}</div>}></option>
  })

  // const optionElemsNum = numData.map((numData) => {
  //   return <option key={numData.id} value={numData => <div>{numData.string}</div>}></option>
  // })

  return(
    <div>
      <div className='row'>
        <div className='col-12'>
          <div className='find'>
            <div className='container card'>
              <div id='signUpForm' className='form card-body'>
                <div className='row'>
                    <div className="input-group row  mb-3 col">
                        <label htmlFor='fromInput' className='col-lg-1 row'>From</label>
                        <div className="col-lg-11">
                            <select type="search" id="inputLGEx" class="form-control" value={selectFrom} onChange={handleFromSelect} required>
                                <option value="">
                                    {/* <input/> */}
                                </option>
                                {optionElemsFrom}
                            </select>
                        </div>
                    </div>
                    <div class="input-group row mb-3 col">
                        <label htmlFor="toInput" class="col-lg-1 row">To</label>
                        <div class="col-lg-11">
                            <select type="search" id="inputLGEx" class="form-control" value={selectTo} onChange={handleToSelect} required>
                                <option value="">
                                    {/* <input/> */}
                                    {/* {optionElemsTo} */}
                                </option>
                                {optionElemsTo}
                            </select>                
                        </div>
                    </div>
                </div>
                <div className='row'>
                  {/* depart */}
                  {/* <div className='input-group row mb-3 col'>
                    <label htmlFor='departInput' className='col-lg-1 row'>Depart</label>
                    <div className='col-lg-11'>
                      <input type="date" id="start" className='form-control' required></input>
                    </div>
                  </div> */}
                  {/* return */}
                  {/* <div className='input-group row mb-3 col'>
                    <label htmlFor='returnInput' className='col-lg-1 row'>Return</label>
                    <div className='col-lg-11'>
                      <input type="date" id="end" className='form-control' required></input>
                    </div>
                  </div> */}
                  {/* passigner num */}
                  {/* <div className='input-group row mb-3 col'>
                    <label htmlFor='passingerInput' className='col-lg-1 row'>Passinger#</label>
                    <div className='col-lg-11'>
                      <select className="form-select" value={selectNum} onChange={handleNumSelect} required>
                        <option value="">Please select...</option>
                        {optionElemsNum}
                      </select>  
                    </div>
                  </div> */}
                </div>
                <div className='row'>
                  <p class="search-text">SEARCH OPTIONS</p>
                    <div className='col-auto'>
                        <div className='form-check checkbox'>
                          <input id="flexCheckDefault" type="checkbox" className="form-check-input" checked={searchOption} onChange={handleCheck} />
                          <label htmlFor="flexCheckDefault" className="form-check-label">With Hotel</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  {/* <button type="submit" className="btn btn-primary search-btn" onChange={handleCheck}><Link to="search"></Link>Search</button> */}
                  <Link to="search" type="button" className="btn btn-primary search-btn" onChange={handleCheck}>Search</Link>

                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );


}