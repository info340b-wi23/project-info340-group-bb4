import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';


export function ComparisonPage(props) {
  const [compareData, setCompareData] = useState([]);

//   useEffect(() => {
//     fetch('../data/comparedata.json')
//       .then(response => response.json())
//       .then(data => setCompareData(data))
//       .catch(error => console.error(error));
//   }, []);

  return (
     <div>
      <header> 
          <h1>Compare Destinations</h1>
          <p>Choose two to five of your favorite destinations and let us help you decide!</p>
      </header>
      <main>
          <MultiDropdown setCompareData={setCompareData}/>
          <section>
              <DestinationList compareData={compareData} />
          </section>
          {/* <!-- second section: average price for a week trip --> */}
          <section>
              <h3>Typical Travel Cost For a One-Week Trip</h3>
              <CostList compareData={compareData} />
          </section>
          {/* <!-- third section: average hotel price --> */}
          <section>
              <h3>Typical Hotel Price per Night</h3>
              <HotelList compareData={compareData} />
          </section>
          {/* <!-- fourth section: average flight ticket --> */}
          <section>
              <h3>Typical Flight Ticket Price</h3>
              <FlightList compareData={compareData} />
          </section>
          {/* <!-- fifth section: average hotel price --> */}
          <section>
              <h3>Typical Transportation Fee per Week</h3>
              <TransportList compareData={compareData} />
          </section>
  </main>
</div>
  );
}


// The Helper

const EXAMPLE_COMPARE = [
    { name: 'Salvador (BH)', placeImg: 'img/salvador.jpeg', totalPrice: '$1904.21', hotelPrice:'$263.41', flightPrice: '$1640.80'},
    { name: 'Recife (PE)', placeImg: 'img/Recife.jpeg', totalPrice: '$1956.05', hotelPrice:'$263.41', flightPrice: '$1692.64'},
    { name: 'Sao Paulo (SP)', placeImg: 'img/Sao Paulo.jpeg', totalPrice: '$1894.16', hotelPrice:'$263.41', flightPrice: '$1630.75'},
    { name: 'Rio de Janeiro (RJ)', placeImg: 'img/Rio de Janeiro.jpeg', totalPrice: '$1631.29', hotelPrice:'$472.98', flightPrice: '$1367.88'},
    { name: 'Campo Grande (MS)', placeImg: 'img/Campo Grande.jpeg', totalPrice: '$1956.05', hotelPrice:'$472.98', flightPrice: '$1692.64'},
    { name: 'Aracaju (SE)', placeImg: 'img/Aracaju.jpeg', totalPrice: '$1894.16', hotelPrice:'$472.98', flightPrice: '$1630.75'},
    { name: 'Natal (RN)', placeImg: 'img/Natal.jpeg', totalPrice: '$1631.29', hotelPrice:'$472.98', flightPrice: '$1367.88'},
    { name: 'Florianopolis (SC)', placeImg: 'img/Florianopolis.jpeg', totalPrice: '$1631.29', hotelPrice:'$472.98', flightPrice: '$1367.88'},
    { name: 'Brasilia (DF)', placeImg: 'img/Brasilia.jpeg', totalPrice: '$1574.79', hotelPrice:'$263.41', flightPrice: '$1311.38'} 
  ];


const options = EXAMPLE_COMPARE.map(destination => ({ value: destination.name , label: destination.name }));


function MultiDropdown({ setCompareData }) {
   const [selectedOptions, setSelectedOptions] = useState([]);

   const handleSelectChange = (selectedOptions) => {
      // remove any duplicates from the selected options
      const uniqueSelectedOptions = Array.from(new Set(selectedOptions.map((option) => option.value)))
         .map((value) => options.find((option) => option.value === value));
      setSelectedOptions(uniqueSelectedOptions);
      // add unique selected places to the compare data
      const uniqueSelectedPlaces = EXAMPLE_COMPARE.filter((place) =>
         uniqueSelectedOptions.some((option) => option.value === place.name)
      );
      setCompareData(uniqueSelectedPlaces);
   };
   return (
      <Select
         options={options}
         value={selectedOptions}
         isMulti
         onChange={handleSelectChange}
         placeholder="Select destinations to compare"
      />
   );
}


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


   let destinationArray = props.compareData.map((destination) => (
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
   const costArray = props.compareData.map((destination) => (
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
   const hotelArray = props.compareData.map((destination) => (
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
   const flightArray = props.compareData.map((destination) => (
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
   const transportArray = props.compareData.map((destination) => (
       <TransportCard key={destination.name} destination={destination} />
   ))
   return(
       <div className="flex-container">
           {transportArray}
       </div>
   )
}










