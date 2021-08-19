import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios'; 
import { navigate } from '@reach/router';

const NewPirate = props => {
    const [form, setForm] = useState({
        name: "",
        position: "Captain",
        url: "",
        treasure: 1,
        catchPhrase: "",
        pegLeg: "Yes",
        eyePatch: "Yes",
        hookHand: "Yes"
    })

    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        console.log(form);
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate/new", form)
            .then(res => {
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                } else {
                    console.log(res.data);
                navigate("/pirates")
                }                
            })
            .catch(err => console.log(err));
    }
    return(
        <div>
            <h1 className="jumbotron">Add Pirate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href ={`http://localhost:3000/pirates`} className="btn btn-primary">Crew Board</a></h1>            
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default NewPirate;
