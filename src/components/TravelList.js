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
        { name: 'Barcelona', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Barcelona.jpeg'},
        { name: 'Hawaii', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Hawaii.jpg'},
        { name: 'Santorini, Greece', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Architecture-of-Santorini.jpeg'},
        { name: 'Rotterdam, Netherlands', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Rotterdam-skyline-Erasmus-bridge.jpeg'}
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
