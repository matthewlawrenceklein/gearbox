import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth';
import { addCollection } from '../actions/index'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const NewCollection = (props) => {

    const { register, handleSubmit } = useForm();
    const [numFields, addField] = useState([])
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        
        const combinedCollection = Object.assign(data, {user : user.email})
        firestore.collection("collections").add({
            combinedCollection
        })
        props.addCollection(combinedCollection)
        props.history.push("/");
    }
    const createUI = () => {
        return numFields.map((el, idx) =>{
           return (
                <div key={idx}>
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
            <input type='text' name='collectionlabel' placeholder='name this collection' ref={register}></input>
            <button onClick={() => addField([...numFields, 'el'])}> add gear to the collection</button>
            <form onSubmit={handleSubmit(onSubmit)}>
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
    addCollection
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCollection));
