import React, { useState } from 'react';


export function DestSelectForm(props) {

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

  const optionElems = props.teamOptions.map((result) => {
    return <option key={result} value={result}>{result}</option>
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