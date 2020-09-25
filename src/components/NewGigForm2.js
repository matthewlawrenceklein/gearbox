import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addGig } from '../actions/index'
import { useAuthState } from 'react-firebase-hooks/auth';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



function GetCollections(){
  return(
    null
  )

}


const NewGigForm2 = (props) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const { handleSubmit, register } = useForm();
  
  const onSubmit = data => {
    const firestore = firebase.firestore();
    const combinedGigObj = Object.assign(data, props.gigData, {user : user.email} )
    // const newGigObj = {
    //   user : user.email,
    //   date : props.gigData.date, 
    //   time : props.gigData.time, 
    //   description : props.gigData.description, 
    //   instrument : data.instrument, 
    //   amp : data.amp, 
    //   pedal: data.pedal
    //   // collection : data.collection
    // }

    firestore.collection("gigs").add({
      combinedGigObj
    })
    props.history.push("/");
  }

    return (
      <div className='component-container'>
      <GetCollections/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button> add gear </button>
                <button> add another collection </button>
                <input type='text' name='instrument' placeholder='instrument' ref={register}></input>
                <input type='text' name='amp' placeholder='amp' ref={register}></input>
                <input type='text' name='pedal' placeholder='pedal' ref={register}></input>
                <label>Add from your Collections?</label>
                <select name='user-collections' ref={register}>
                    <option> user collection1</option>
                    <option> pedalboard stuff</option>
                    <option> dog things </option>
                </select>

            
                <input type="submit" />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
      gigData: state.newGigFirstData,
  } 
}
  
const mapDispatchToProps = {
    addGig
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm2))