import React from 'react';
import { Link } from 'react-router-dom';

import {DestinationList, CostList, HotelList, FlightList} from './CompareHelper.js';
import {TransportList} from './CompareHelper.js';

export function ComparisonPage(props) {
    return (
       <div>
        <header>   
            <h1 className="compare">Compare Destinations</h1>
            <p>Choose two to three of your favorite destinations and let us help you decide!</p>
        </header>

        <main>
            <div className="box">Destinations chosen: Seattle, New York, <Link to="/3ComparisonPage">Add a third destination</Link>
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
         {/* <section>
                <h3>Average Transportation Fee per Week</h3>
                <TransportList />
        </section> */}
    </main>
</div>
    );
}
