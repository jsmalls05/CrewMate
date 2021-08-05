import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dragon from '../dbz.jpg';
import ReactDOM from 'react-dom';

const Main = props => {
    const [pirates, setPirates] = useState();
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
        .then(res => setPirates(res.data.pirates))
    }, [update])

    const removePirate = _id => {
        axios.delete(`http://localhost:8000/api/pirate/delete/${_id}`)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
        
    }
    return(
        <div>
            <h1 className="jumbotron">Pirate Crew &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href ={`http://localhost:3000/pirate/new`} className="btn btn-primary">Add Pirate</a></h1>
            <br/><br/>
            <div>
                {                    
                    pirates ?
                    pirates.map((pirat, i) => {
                        return(
                            <div className="border border-secondary">
                                <img src={pirat.url} alt ="non" width="250" height="175"/>
                                <h1> {pirat.name}
                                <br/>
                                <a href ={`http://localhost:3000/pirate/${pirat._id}`} className="btn btn-primary">View Pirate</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => removePirate(pirat._id)} className="btn btn-danger">Walk the Plank</button></h1>
                            </div>
                        
                        )
                    }) :""
                } 
            </div>
        </div>
        
        
    )
}

export default Main;