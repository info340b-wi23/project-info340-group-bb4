import React from "react";
const EXAMPLE_TRAVEL = [
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'CloudFy', flightPrice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalPrice: '1904.21', class: 'First Class'},
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'FlyingDrops', flightPrice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalPrice: '1956.05', class: 'First Class' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'Rainbow', flightPrice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalPrice: '1894.16', class: 'First Class' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'Rainbow', flightPrice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalPrice: '1631.29', class: 'Premium' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'CloudFy', flightPrice: '1311.38', flightDur: '2.44', flightDist: '937.77', totalPrice: '1574.79', class: 'Premium' }
];

// button to make details go back to whichever page it was on, not just favorites/search page
function BackButton() {
    const goBack = () => {
      window.history.back();
    };
  
    return (
      <button onClick={goBack} className="btn btn-dark" aria-label="button to go back">
        Go Back
      </button>
    );
}

export function DetailsPage(props) {
    {/*variable below is not used for now, but setting up for later when implement the details page with the dataset*/}
    const currLoc = props.currTravel;

    {/* for now, set it to the first in the results page for filtering, set up feature later */}
    //let currLoc = EXAMPLE_TRAVEL[0];

    return (
        <div>
            <header>
                <h1 className="p-2">Travel Details: {currLoc.to}</h1>
                <p className="text-center">from: {currLoc.from}</p>
            </header>
            <main className="display">
                <div className="container">
                    <div className="row">
                            <h2 className="text-center">Total Travel Price: ${currLoc.totalPrice}</h2>
                            <p className="text-center">date: {currLoc.date}</p>
                            <img src={'img/salvador.jpeg'} className="card-img mb-4" alt= "Salvador scene"/>
                    </div>
                    <div className="row">
                        <div className="card mx-5 col-sm">
                            <div className="card-header">
                                {/* i want to add icons here */}
                                <h2>Flight: {currLoc.flight}</h2>
                            </div>
                            <div className="card-body">
                                <p>Flight Price: ${currLoc.flightPrice}</p>
                                <p>Flight Date: {currLoc.date}</p>
                                <p>Class: {currLoc.class}</p>
                                <p>Flight Duration: {currLoc.flightDur} hours</p>
                                <p>Flight Distance: {currLoc.flightDist} km</p>
                            </div>
                        </div>
                        <div className="card mx-5 col-sm">
                            <div className="card-header">
                                <h2>Hotel: {currLoc.hotel}</h2>
                            </div>
                            <div className="card-body">
                                <p>Hotel Price: ${currLoc.hotelPrice}</p>
                                <p>Check-in Date: {currLoc.date}</p>
                            </div>
                        </div>
                    </div>
                    <section>
                        <BackButton/>
                    </section>
                </div>


            </main>
        </div>

    )
}