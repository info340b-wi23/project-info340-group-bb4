

import React from 'react';
import { Link } from 'react-router-dom';

export function DestCard(props) {
    const singleDest = props.single;
    return(
        <div>
            <div className='row'>
                <div className="card mb-4">
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={'img/'+singleDest.img} className='pb-3'/>
                            </div>
                            <div className='col-sm'>
                                <h2 className="card-title">{singleDest.name}</h2>
                                <p className="card-text">{singleDest.description}</p>
                                <Link to="/details" type="button" className="btn btn-dark">View More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TravelList(props) {
    const EXAMPLE_TRAVEL = [
        { name: 'Barcelona, Spain', description: 'Alluring architecture, colorful street life, and beautiful beaches—a trip to Barcelona is always a good idea. Experience one of Europe’s most dynamic destinations on our trips to Barcelona.', img:'Barcelona.jpeg'},
        { name: 'Honolulu, Hawaii', description: 'Discover the beauty, culture and adventures waiting for you on the Hawaiian Islands', img:'Hawaii.jpg'},
        { name: 'Santorini, Greece', description: 'A must-see island that has it all - from hypnotic sunset views of volcanoes rising out of blue seas, to larger-than-life island identities like Mama who make it a real Greek island experience.', img:'Architecture-of-Santorini.jpeg'},
        { name: 'Rotterdam, Netherlands', description: 'Take an autumn walk in the Kralingse Bos, discover breathtaking art enriching Rotterdam’s streets.', img:'rotterdam.jpeg'}
    ];

    let TravelList =EXAMPLE_TRAVEL;
    let destCard = TravelList.map((single) => {
        return <DestCard single={single} key={single.key}/>
    });

    return(
        <div className="expCards col-12">
            <div className="container">
                <div className="row">
                    {destCard}
                </div>
            </div>
        </div>
    );
}