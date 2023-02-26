import React from 'react';
import {DestinationList} from './CompareHelper.js';
import {CostList} from './CompareHelper.js';
import {HotelList} from './CompareHelper.js';
import {FlightList} from './CompareHelper.js';
import {TransportList} from './CompareHelper.js';


export function ComparisonPage(props) {
    return (
       <div>
        <header>   
            <h1>Compare Destinations</h1>
            <p>Choose two to three of your favorite destinations and let us help you decide!</p>
        </header>

        <main>
            <div className="box">Destinations chosen: Seattle, New York, <a href="3comparisonPage.html">Add a third destination</a>
            </div>
            {/* <!-- first section: destination --> */}
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
         <section>
                <h3>Average Transportation Fee per Week</h3>
                <TransportList />
        </section>
    </main>
</div>
    );
}
