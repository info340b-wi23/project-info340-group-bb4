import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Heart from "react-heart";

export function DestCard(props) {
    //for the heart button
    const [active, setActive] = useState(false);
    const singleDest = props.single;

    let img = singleDest.to;
    img = img.substring(0, img.length-5);

    return(
        <div>
            <div className='row'>
                <div className="card mb-4">
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-3'>
                                <img src={'img/'+img+'.jpeg'} className='pb-3'/>
                            </div>
                            <div className='col-sm'>
                                <h2 className="card-title">{singleDest.to}</h2>
                                <h3 className="card-title">Total Cost for Travels: ${singleDest.totalprice}</h3>
                                <p className="card-text">Traveling From: {singleDest.from}</p>
                                <Link to="/details" type="button" className="btn btn-dark">View More Details</Link>
                            </div>
                            <div className='col-sm-1 mt-4'>
                                <div style={{ width: "2rem" }}>
			                        <Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "red" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
		                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TravelList(props) {
    // const EXAMPLE_TRAVEL = [
    //     { name: 'Barcelona', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Barcelona.jpeg'},
    //     { name: 'Hawaii', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Hawaii.jpg'},
    //     { name: 'Santorini, Greece', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Architecture-of-Santorini.jpeg'},
    //     { name: 'Rotterdam, Netherlands', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?', img:'Rotterdam-skyline-Erasmus-bridge.jpeg'}
    // ];
    const travelRec = props.travelRec.slice(0, 3);

//     const EXAMPLE_TRAVEL = [
//         { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Barcelona (BA)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'CloudFy', flightPrice: '1640.80', flightDur: '2.44', flightDist: '937.77', totalPrice: '1904.21', class: 'First Class', img:'Barcelona.jpeg'},
//         { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Hawaii (HI)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'FlyingDrops', flightPrice: '1692.64', flightDur: '2.44', flightDist: '937.77', totalPrice: '1956.05', class: 'First Class',img:'Hawaii.jpg' },
//         { date: '05/04/2023', from: 'Florianopolis (SC)', to: 'Santorini (SA)', hotel: 'Hotel K', hotelPrice: '263.41', flight: 'Rainbow', flightPrice: '1630.75', flightDur: '2.44', flightDist: '937.77', totalPrice: '1894.16', class: 'First Class', img:'Architecture-of-Santorini.jpeg' },
//    ];
    // let TravelList =EXAMPLE_TRAVEL;
    let destCard = travelRec.map((single) => {
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
