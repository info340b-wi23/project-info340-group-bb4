import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

function SortButton(props) {
    let iconClasses = ""
    if (props.active) { iconClasses += ` active` }
    if (props.ascending) { iconClasses += ` flip` };

    return (
      <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
        <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
      </button>
    );
}
  
function GameDataRow({ travel }) { 
    return (
      <tr>
        <td>{travel.from}</td>
        <td className="text-end">{travel.to}</td>
        <td className="text-center">{travel.flight}</td>
        <td className='text-center'>{travel.flightprice}</td>
        <td>{travel.hotel}&nbsp;&nbsp;{travel.hotel_price}</td>
      </tr>
    );
}


export default function DestDataCard(props){
    const [sortByCriteria, setSortByCriteria] = useState(null);
    const [isAscending, setIsAscending] = useState(null);

    // sort
    const handleClick = (event) => {
        const clickedName = event.currentTarget.name;
        if(clickedName !== sortByCriteria){
            setSortByCriteria(clickedName)
            setIsAscending(1);
        } else{
            if (isAscending === 1){
                setIsAscending(2);
            } else {
                setIsAscending(null);
                setSortByCriteria(null)
            }
        }
    };

    let sortedDataArray  = _.sortBy(props.travel, sortByCriteria);
    if(sortByCriteria !== null && isAscending !== 1) {
      sortedDataArray = _.reverse(sortedDataArray);
    }

    //convert data into rows
    const rows = sortedDataArray.map((match) => {
        return <GameDataRow key={match.from} game={match} />
    });


    return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  From
                  <SortButton name={"from"} active={sortByCriteria === "from"} onClick={handleClick} ascending={sortByCriteria === "from" && isAscending === 1}/>
                </th>
                <th className="text-end">
                  To
                  <SortButton name="to" active={sortByCriteria === "to"} onClick={handleClick} ascending={sortByCriteria === "to" && isAscending === 1}/>
                </th>
                <th className="text-center">
                  Flight
                  <SortButton name="flight" active={sortByCriteria === "flight"}  onClick={handleClick} ascending={sortByCriteria === "flight" && isAscending === 1}/>
                </th>
                <th>
                  Flight Price
                  <SortButton name="flightprice" active={sortByCriteria === "flightprice"} onClick={handleClick} ascending={sortByCriteria === "flightprice" && isAscending === 1}/>
                </th>
                <th>
                  Hotel Price
                  <SortButton name="hotel_price" active={sortByCriteria === "hotel_price"} onClick={handleClick} ascending={sortByCriteria === "hotel_price" && isAscending === 1}/>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
    );
}