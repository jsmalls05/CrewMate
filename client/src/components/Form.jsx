import React from 'react';

const Form = props => {
    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div>
                        <label>Pirate Name:</label><br/>
                        <input type="text" name="name" onChange={props.onChangeHandler} value={props.form.name}/>
                        <br/>
                        {
                            props.error.name ?
                            <span className="text-danger">{props.error.name.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label>Image Url:</label><br/>
                        <input type="text" name="url" onChange={props.onChangeHandler} value={props.form.url}/>
                        <br/>
                        {
                            props.error.url ?
                            <span className="text-danger">{props.error.url.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label># of Treasure Chest:</label><br/>
                        <input type="number" name="treasure" min="1" max="1000" onChange={props.onChangeHandler} value={props.form.treasure}/>
                        <br/>
                        {
                            props.error.treasure ?
                            <span className="text-danger">{props.error.treasure.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label>Pirate Catch Phrase:</label><br/>
                        <input type="text" name="catchPhrase" onChange={props.onChangeHandler} value={props.form.catchPhrase}/>
                        <br/>
                        {
                            props.error.catchPhrase ?
                            <span className="text-danger">{props.error.catchPhrase.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        <br/>                        
                        </div>
                        <div>
                        <label>Crew Position:</label><br/>
                        <select name="position" onChange={props.onChangeHandler} value={props.form.position}>
                            <option value="Captain">Captain</option>
                            <option value="First">First Mate</option>
                            <option value="Quarter">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder">Powder Monkey</option>
                        </select>
                        {
                            props.error.position ?
                            <span className="text-danger">{props.error.position.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label>Peg Leg:</label>
                        <select name="pegLeg" onChange={props.onChangeHandler} value={props.form.pegLeg}>
                            <option value="Yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <br/>
                        {
                            props.error.pegLeg ?
                            <span className="text-danger">{props.error.pegLeg.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label>Eye Patch:</label>
                        <select name="eyePatch" onChange={props.onChangeHandler} value={props.form.eyePatch}>
                            <option value="Yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {
                            props.error.eyePatch ?
                            <span className="text-danger">{props.error.peeyePatchgLeg.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <label>Hook Hand:</label>
                        <select name="hookHand" onChange={props.onChangeHandler} value={props.form.hookHand}>
                            <option value="Yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {
                            props.error.hookHand ?
                            <span className="text-danger">{props.error.hookHand.message}</span>
                            :""
                        }
                        <br/>
                        <br/>
                        </div>
                        <input type="submit" value="Add Pirate" className="btn btn-primary"/>                       
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Form;