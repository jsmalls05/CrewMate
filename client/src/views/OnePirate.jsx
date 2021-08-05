import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dragon from '../dbz.jpg';

const OnePirate = props => {
    const [onePirate, setOnePirates] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${props._id}`)
        .then(res => setOnePirates(res.data.pirate))
    })
    return(
        <div>
            <h1 className="jumbotron">{onePirate.name}</h1>
            <div>
                < img src={onePirate.url} alt ="non"/>
                <h1>"{onePirate.catchPhrase}"</h1>
            </div>
            <div className="border border-secondary">
                <h2 >About</h2>
                <h4>Position: {onePirate.position}</h4>
                <h4>Treasures: {onePirate.treasure}</h4>
                <h4>Peg Leg: {onePirate.pegLeg}</h4>
                <h4>Eye Patch: {onePirate.eyePatch}</h4>
                <h4>Hook Hand: {onePirate.hookHand}</h4>
            </div>
        </div>
    )
}

export default OnePirate;