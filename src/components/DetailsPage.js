import React from "react";
import { Link } from 'react-router-dom';

const EXAMPLE_TRAVEL = [
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalprice: '1904.21', class: 'First Class'},
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'FlyingDrops', flightprice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalprice: '1956.05', class: 'First Class' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalprice: '1894.16', class: 'First Class' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'Rainbow', flightprice: '1367.88', flightDur: '2.44', flightDist: '937.77', totalprice: '1631.29', class: 'Premium' },
    { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Salvador (BH)', hotel: 'Hotel K', hotelprice: '263.41', flight: 'CloudFy', flightprice: '1311.38', flightDur: '2.44', flightDist: '937.77', totalprice: '1574.79', class: 'Premium' }
];

export function DetailsPage(props) {
    {/*variable below is not used for now, but setting up for later when implement the details page with the dataset*/}
    const currentpage = props.currentpage

    {/* for now, set it to the first in the results page for filtering */}
    let currLoc = EXAMPLE_TRAVEL[0]

    return (
        <div>
            <header>
                <h1>Details: {currLoc.to}</h1>
            </header>
            <main className="display">
                <div className="container">
                    <div className="row">
                        <div className="card mb-4 col-12 col-sm-6">
                        <div className="card-header">
                            <h2>{currLoc.flight}</h2>
                        </div>
                        <div className="card-body">
                            <p>Flight Price: ${currLoc.flightprice}</p>
                            <p>Flight Date: {currLoc.flight}</p>
                            <p>Class: {currLoc.flight}</p>
                            <p>Flight Duration: {currLoc.flightDur} hours</p>
                            <p>Flight Distance: {currLoc.flightDist} km</p>
                        </div>
                        </div>

                        <div className="card mb-4 col-12 col-sm-6">
                        <div className="card-header">
                            <h2>{currLoc.hotel}</h2>
                        </div>
                        <div className="card-body">
                            <p>Hotel Price: ${currLoc.hotelprice}</p>
                            <p>Check-in Date: {currLoc.date}</p>
                        </div>
                        </div>
                    </div>

                    <section>
                        <Link to="/favorites" className="btn btn-dark">Go Back</Link>
                    </section>
                </div>


            </main>
        </div>

    )
}