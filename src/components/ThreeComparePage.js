import React from 'react';
import { useState } from 'react'; 
// import Select from 'react-select';
import { Link } from 'react-router-dom';


export function ThreeComparisonPage(props) {
    return (
       <div>
        <header>   
            <h1>Compare Destinations</h1>
            <p>Choose two to three of your favorite destinations and let us help you decide!</p>
        </header>

        <main>
            {/* <div className="box">Destinations chosen: Seattle, New York, <Link to="/comparisonPage">Remove a destination</Link>
            </div> */}
            {/* <!-- first section: destination --> */}
            {/* <MultiDropdown /> */}
            <section>
                <DestinationList />
            </section>
            {/* <!-- second section: average price for a week trip --> */}
            <section>
                <h3>Average Travel Cost For a One-Week Trip</h3>
                <CostList />
            </section>
            {/* <!-- third section: average hotel price --> */}
            <section>
                <h3>Average Hotel Price per Night</h3>
                <HotelList />
            </section>
            {/* <!-- fourth section: average flight ticket --> */}
            <section>
                <h3>Average Flight Ticket Price</h3>
                <FlightList />
            </section>
            {/* <!-- fifth section: average hotel price --> */}
         {/* <section>
                <h3>Average Transportation Fee per Week</h3>
                <TransportList />
        </section> */}
    </main>
</div>
    );
}



// The Helper
const EXAMPLE_COMPARE = [
    { name: 'Seattle (WA)', placeImg: 'img/sea.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
    { name: 'New York (NY)', placeImg: 'img/nyc.jpeg', totalPrice: '$1000', hotelPrice:'$100', flightPrice: '$350', transportPrice: '$100'},
    { name: 'San Diego (CA)', placeImg: 'img/sd.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'}
  ];

  let compareData = EXAMPLE_COMPARE;

  const names = EXAMPLE_COMPARE.map(item => item.name);


// create the dropdown menu that allows users to select up to three destinations they want to compare
// function dropDown() {
//     return(
//         <label for="menu">Choose a destination:</label>
//             <select multiple>
//                 {names.map((name) => (
//                     <option key={name} value={name}>{name}</option>
//                 ))}
//             </select>
//     )
// }

// create the muti-select dropdown 
// function MultiDropdown() {
//     const [, setSelectedOptions] = useState([]);
  
//     return (
//       <Select
//         options={options}
//         value={selectedOptions}
//         isMulti
//         onChange={setSelectedOptions}
//         classNamePrefix="react-select"
//       />
//     );
//   }

// 1
// Show each destination along with picture
function DestinationCard(props) {
    const destination = props.destinationInfo;
    return(
        <div className="cards three">
            <h2>{destination.name}</h2>
            <img src={destination.placeImg} alt={destination.name} />         
        </div>
    )
}

// Map each destination to a list to show several destinations
export function DestinationList(props) {

    let destinationArray = compareData.map((destination) => (
         <DestinationCard key={destination.name} destinationInfo={destination} />
    ))
    return(
        <div className="flex-container">
            {destinationArray} 
        </div>
    );
}


// 2
// Show the average total cost for each destination
function CostCard(props) {
    const destination = props.destinationInfo;
    return(
        <div className="cards small">
            <img src="img/dollar.png" alt="budget icon" /> 
            <p>{destination.totalPrice}</p>
        </div>
    )
}

// Show the average total cost for multiple destinations
export function CostList(props) {
    const costArray = compareData.map((destination) => (
        <CostCard key={destination.name} destinationInfo={destination} />
    ))
    return(
        <div className="flex-container">
            {costArray} 
        </div>
    )
}

//3
// Show the average hotel cost for each destination
function HotelCard(props) {
    const destination = props.destination;
    return(
        <div className="cards small">
            <img src='img/hotel.png' alt='hotel icon' /> 
            <p>{destination.hotelPrice}</p>
        </div>
    )
}

// Show the average hotel cost for multiple destinations
export function HotelList(props) {
    const hotelArray = compareData.map((destination) => (
        <HotelCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {hotelArray} 
        </div>
    )
}


// 4
// Show the average flight cost for each destination
function FlightCard(props) {
    const destination = props.destination;
    return(
        <div className="cards small">
            <img src='img/flight.jpeg' alt='flight icon' /> 
            <p>{destination.flightPrice}</p>
        </div>
    )
}

// Show the average flight cost for multiple destinations
export function FlightList(props) {
    const flightArray = compareData.map((destination) => (
        <FlightCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {flightArray} 
        </div>
    )
}

// 5
// Show the average flight cost for each destination
function TransportCard(props) {
    const destination = props.destination;
    return(
        <div className="cards small">
            <img src='img/bus.jpeg' alt='transport icon' /> 
            <p>{destination.transportPrice}</p>
        </div>
    )
}

// Show the average flight cost for multiple destinations
export function TransportList(props) {
    const transportArray = compareData.map((destination) => (
        <TransportCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {transportArray} 
        </div>
    )
}

