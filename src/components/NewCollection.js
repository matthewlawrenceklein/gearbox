import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const NewCollection = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const [numFields, addField] = useState([])

    const onSubmit = data => {
        console.log(numFields)
        console.log(data);
        props.history.push("/");
    }
    const createUI = () => {
        return numFields.map((el, idx) =>{
           return (
                <div>
                    <input type='text' name={`collection-item-${idx}`}ref={register}></input>
                    <select ref={register} name={`select-${idx}`}>
                        <option> Instrument </option>
                        <option> Amplifier  </option>
                        <option> Pedal  </option>
                        <option> Accessory  </option>
                        <option> Recording Equip  </option>
                        <option> Misc </option>
                    </select>
                </div>
           )
        })
     }
   
   

    return (
        <div className='component-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button onClick={() => addField([...numFields, 'el'])}> add gear to the collection</button>
                { createUI() }
                <button type='submit'>create collection</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {   
    }
  }
  
const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCollection));
