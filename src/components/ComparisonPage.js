import React from 'react';
import { useState, useCallback } from 'react';
import Select from 'react-select';


export function ComparisonPage(props) {
  const [compareData, setCompareData] = useState([]);
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
  { name: 'Seattle (WA)', placeImg: 'img/sea.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'New York (NY)', placeImg: 'img/nyc.jpeg', totalPrice: '$1000', hotelPrice:'$100', flightPrice: '$350', transportPrice: '$100'},
  { name: 'San Diego (CA)', placeImg: 'img/sd.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'Rotterdam (NL)', placeImg: 'img/rotterdam.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'Beijing (CN)', placeImg: 'img/beijing.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'Barcelona (ES)', placeImg: 'img/Barcelona.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'Honolulu (HI)', placeImg: 'img/Hawaii.jpg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'},
  { name: 'Calgary (CA)', placeImg: 'img/calgary.jpeg', totalPrice: '$800', hotelPrice:'$80', flightPrice: '$200', transportPrice: '$80'}
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


// function MultiDropdown({ setCompareData }) {
//    const [selectedOptions, setSelectedOptions] = useState([]);


//    const handleSelectChange = (selectedOptions) => {
//     setSelectedOptions(selectedOptions);
//   };
//    const addToCompareData = useCallback(() => {
//        //get the option (destination name) from users
//        const selectedValues = selectedOptions.map((option) => option.value);
//        //if the selected option from users equals to the name of the destination, add that place's data into compareData
//        const selectedPlaces = EXAMPLE_COMPARE.filter((place) =>
//          selectedValues.includes(place.name)
//        );
//        setCompareData((prevData) => [...prevData, ...selectedPlaces]);
//      }, [selectedOptions]);


// const addToCompareData = useCallback(() => {
//     //get the option (destination name) from users
//     const selectedValues = selectedOptions.map((option) => option.value);
//     //if the selected option from users equals to the name of the destination, add that place's data into compareData
//     const selectedPlaces = EXAMPLE_COMPARE.filter((place) =>
//       selectedValues.includes(place.name)
//     );
 //     // remove any duplicates from selected places
//     const uniqueSelectedPlaces = selectedPlaces.filter((place, index, self) =>
//       index === self.findIndex((p) => p.name === place.name)
//     );
 //     setCompareData((prevData) => [...prevData, ...uniqueSelectedPlaces]);
//   }, [selectedOptions]);




//  return (
//    <div>
//      <h2>Select your destinations:</h2>
//      <Select
//        isMulti
//        options={options}
//        onChange={handleSelectChange}
//        value={selectedOptions}
//      />
//      <button onClick={addToCompareData}>Add to Compare</button>
//    </div>
//  );
//  }


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










