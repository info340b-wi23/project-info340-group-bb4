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
    { id: 1, string: "1 Passenger" },
    { id: 2, string: "2 Passenger" },
    { id: 3, string: "3 Passenger" },
    { id: 4, string: "5 Passenger" },
    { id: 6, string: "6 Passenger" },
    { id: 7, string: "7 Passenger" },
    { id: 8, string: "8 Passenger" },
    { id: 9, string: "9 Passenger" }
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
  
  const uniqueNamesTo = [...new Set(travelData.reduce((all, current) => {
    return all.concat([current.to]);
  }, []))].sort();

  const uniqueNamesFrom = [...new Set(travelData.reduce((all, current) => {
    return all.concat([current.from]);
  }, []))].sort();

  const optionElemsTo = uniqueNamesTo.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })

  const optionElemsFrom = uniqueNamesFrom.map((name) => {
    return <option key={name} value={name}>{name}</option>
  })

  // const optionElemsFrom = travelData.map((travelData) => {
  //   return <option key={travelData.from} value={travelData => <div>{travelData.from}</div>}></option>
  // })

  // const optionElemsTo = travelData.map((travelData) => {
  //   return <option key={travelData.to} value={travelData => <div>{travelData.to}</div>}></option>
  // })

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
                            <select type="search" id="inputLGEx" className="form-control" value={selectFrom} onChange={handleFromSelect} required>
                                <option value="">
                                    {/* <input/> */}
                                </option>
                                {optionElemsFrom}
                            </select>
                        </div>
                    </div>
                    <div className="input-group row mb-3 col">
                        <label htmlFor="toInput" className="col-lg-1 row">To</label>
                        <div className="col-lg-11">
                            <select type="search" id="inputLGEx" className="form-control" value={selectTo} onChange={handleToSelect} required>
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