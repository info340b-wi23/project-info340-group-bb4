import React from 'react';

export function ComparisonPage(props) {
    return (
       <div>
        <header>   
            <h1>Compare Destinations</h1>
            <p>Choose two to three of your favorite destinations and let us help you decide!</p>
        </header>

        <main>
            {/* <div className="box">Destinations chosen: Seattle, New York, <a href="3comparisonPage.html">Add a third destination</a>
            </div> */}
            {/* <!-- first section: destination --> */}
            <section>
                <div className="flex-container">
                {/* <!-- Destination 1 --> */}
                <div className="cards two">
                    <h2>Seattle</h2>
                    <img src="img/sea.jpeg" alt="Seattle" />         
                </div>
                {/* <!-- Destination 2 --> */}
                <div className="cards two">
                    <h2>New York</h2>
                    <img src="img/nyc.jpeg" alt="New York City" />     
                </div>
                </div>
            </section>
            {/* <!-- second section: average price for a week trip --> */}
            <section>
                <h3>Average Travel Cost For a One-Week Trip</h3>
                <div className="flex-container">
                {/* <!-- Destination 1 --> */}
                <div className="cards small">
                    <img src="img/dollar.png" alt="budget sign" /> 
                    <p>$800</p>
                </div>
                {/* <!-- Destination 2 --> */}
                <div className="cards small">
                    <img src="img/dollar.png" alt="budget sign" /> 
                    <p>$1000</p>
                </div>
                </div>
            </section>
            {/* <!-- third section: average hotel price --> */}
            <section>
                <h3>Average Hotel Price per Night</h3>
                <div className="flex-container">
                {/* <!-- Destination 1 --> */}
                <div className="cards small">
                    <img src="img/hotel.png" alt="hotel sign" /> 
                    <p>$80</p>
                </div>
                {/* <!-- Destination 2 --> */}
                <div className="cards small">
                    <img src="img/hotel.png" alt="hotel sign" /> 
                    <p>$100</p>
                </div>
                </div>
            </section>
            {/* <!-- fourth section: average flight ticket --> */}
            <section>
                <h3>Average Flight Ticket Price</h3>
                <div className="flex-container">
                {/* <!-- Destination 1 --> */}
                <div className="cards small">
                    <img src="img/flight.jpeg" alt="flight sign" /> 
                    <p>$200</p>
                </div>
                {/* <!-- Destination 2 --> */}
                <div className="cards small">
                    <img src="img/flight.jpeg" alt="flight sign" /> 
                    <p>$350</p>
                </div>
                </div>
            </section>
            {/* <!-- fifth section: average hotel price --> */}
         <section>
                <h3>Average Transportation Fee per Week</h3>
            <div className="flex-container">
                {/* <!-- Destination 1 --> */}
                <div className="cards small">
                    <img src="img/bus.jpeg" alt="public transportation sign" /> 
                    <p>$80</p>
                </div>
                {/* <!-- Destination 2 --> */}
                <div className="cards small">
                    <img src="img/bus.jpeg" alt="public transportation sign" /> 
                    <p>$100</p>
                </div>
            </div>
        </section>
    </main>
</div>
    );
}
