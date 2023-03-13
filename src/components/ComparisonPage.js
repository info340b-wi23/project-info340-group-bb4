import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';

export function ComparisonPage(props) {
    const [compareData, setCompareData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
  
    // access to orginal data
    // note for data: comparedata extracts from our raw dataset (hoteldata). It represents the typical price of each unique destination.
    useEffect(() => {
      let url = '/data/comparedata.json';
      fetch(url)
        .then(response => response.json())
        .then(data => setOriginalData(data))
        .catch(error => console.error(error));
    }, []);
  
    // create the list of destination based on the names of orginal data
    const options = originalData.map(destination => ({ value: destination.name, label: destination.name }));

    const handleSelectChange = (selectedOptions) => {
      // remove any duplicate from the selected options  
      const uniqueSelectedOptions = Array.from(new Set(selectedOptions.map((option) => option.value)))
        .map((value) => options.find((option) => option.value === value));
  
      // add unique selected places to compare data  
      const uniqueSelectedPlaces = originalData.filter((place) =>
        uniqueSelectedOptions.some((option) => option.value === place.name)
      );
  
      setCompareData(uniqueSelectedPlaces);
    };
  
    return (
      <div>
        <header> 
          <h1>Compare Destinations</h1>
          <p>Choose up to four of your favorite destinations and let us help you decide!</p>
        </header>
        <main>
          <MultiDropdown setCompareData={setCompareData} originalData={originalData} handleSelectChange={handleSelectChange} />
          <section>
            <DestinationList compareData={compareData} />
          </section>
          {/* <!-- second section: typical price for a week trip --> */}
          <section>
            <h3>Typical Travel Cost For a One-Week Trip</h3>
            <CostList compareData={compareData} />
          </section>
          {/* <!-- third section: typical hotel price --> */}
          <section>
            <h3>Typical Hotel Price per Night</h3>
            <HotelList compareData={compareData} />
          </section>
          {/* <!-- fourth section: typical flight ticket --> */}
          <section>
            <h3>Typical Flight Ticket Price</h3>
            <FlightList compareData={compareData} />
          </section>
        </main>
      </div>
    );
  }
  
  // The Helper
  const MultiDropdown = ({ originalData, handleSelectChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showWarning, setShowWarning] = useState(false);
  
    // create dropdown menu list using the name in original data
    const options = originalData.map(destination => ({ value: destination.name, label: destination.name }));
  
    const handleMultiSelectChange = (selectedOptions) => {
        // limit user to select up to 4 options (for better formatting reason)
        if (selectedOptions.length > 4) {
            selectedOptions.splice(4);
            // set showWarning to true if user tries to select more than 4 options
            setShowWarning(true);
            return;
        }
        setSelectedOptions(selectedOptions);
        handleSelectChange(selectedOptions);
        setShowWarning(false);
    };
  
    return (
        <div>
          <Select
            className="multi-dropdown"
            options={options}
            value={selectedOptions}
            isMulti
            onChange={handleMultiSelectChange}
            placeholder="Select destinations to compare..."
          />
          {showWarning && (
            <div className="warning">
              You can only select up to 4 destinations to compare!
            </div>
          )}
        </div>
      );
    };

// 1
// Show each destination along with picture
function DestinationCard(props) {
   const destination = props.destinationInfo;
   return(
       <div className="cards">
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