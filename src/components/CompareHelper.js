const EXAMPLE_COMPARE = [
    { name: 'Seattle', placeImg: 'img/sea.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
    { name: 'New York', placeImg: 'img/nyc.jpeg', totalPrice: '$1000', hotelPrice:'$100', flightPrice: '$350', transportPrice: '$100'},
    // { name: 'San Diego', placeImg: 'img/sd.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'}
  ];

  let compareData = EXAMPLE_COMPARE;

// 1
// Show each destination along with picture
function destinationCard(props) {
    const destination = props.destination;

    <div className="cards two">
        <h2>{destination.name}</h2>
        <img src={destination.placeImg} alt={destination.name} />         
    </div>
}

// Map each destination to a list to show several destinations
export default function destinationList(props) {
    const destinationArray = compareData.map((destination) => (
        <destinationCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {destinationArray} 
        </div>
    );
}


// 2
// Show the average total cost for each destination
function costCard(props) {
    const destination = props.destination;

    <div className="cards small">
        <img src='img/dollar.png' alt='budget icon' /> 
        <p>{destination.totalPrice}</p>
    </div>
}

// Show the average total cost for multiple destinations
export function costList(props) {
    const costArray = compareData.map((destination) => (
        <costCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {costArray} 
        </div>
    )
}

//3
// Show the average hotel cost for each destination
function hotelCard(props) {
    const destination = props.destination;

    <div className="cards small">
        <img src='img/hotel.png' alt='hotel icon' /> 
        <p>{destination.hotelPrice}</p>
    </div>
}

// Show the average hotel cost for multiple destinations
export function hotelList(props) {
    const hotelArray = compareData.map((destination) => (
        <hotelCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {hotelArray} 
        </div>
    )
}


// 4
// Show the average flight cost for each destination
function flightCard(props) {
    const destination = props.destination;

    <div className="cards small">
        <img src='img/flight.jpeg' alt='flight icon' /> 
        <p>{destination.flightPrice}</p>
    </div>
}

// Show the average flight cost for multiple destinations
export function flightList(props) {
    const flightArray = compareData.map((destination) => (
        <flightCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {flightArray} 
        </div>
    )
}

// 5
// Show the average flight cost for each destination
function transportCard(props) {
    const destination = props.destination;

    <div className="cards small">
        <img src='img/bus.jpeg' alt='transport icon' /> 
        <p>{destination.transportPrice}</p>
    </div>
}

// Show the average flight cost for multiple destinations
export function transportList(props) {
    const transportArray = compareData.map((destination) => (
        <transportCard key={destination.name} destination={destination} />
    ))
    return(
        <div className="flex-container">
            {transportArray} 
        </div>
    )
}

