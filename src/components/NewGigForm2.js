import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addGig } from '../actions/index'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



class NewGigForm2 extends Component  {

  state = {
    gearFields : ['el'],
    collectionFields : []
  }
 
 
  componentDidMount(){
      return this.props.userCollections.map((collection, idx) =>{
      return <option key={idx} value={collection.combinedCollection.collectionlabel}> {collection.combinedCollection.collectionlabel} </option>
      })
  }

  handleGearFields = () => {
    this.setState({
      gearFields : [...this.state.gearFields, 'el']
    })
  }

  handleCollectionFields = () => {
    this.setState({
      collectionFields : [...this.state.collectionFields, 'el']
    })  
  }

  createGearField = () => {
    const numFields = this.state.gearFields
    return numFields.map((el, idx) =>{
       return (
            <div key={idx}>
                <input type='text' name={`collection-item-${idx}`}></input>
                <select name={`select-${idx}`}>
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

 createCollectionField = () => {
   const collectionFields = this.state.collectionFields
   return collectionFields.map((el, idx) => {
     return (
      <select name='user-collections' key={idx}>
       { this.componentDidMount() }
      </select>  
     )
   })
}

  // onSubmit = data => {
  //   const firestore = firebase.firestore();
  //   const combinedGigObj = Object.assign(data, this.props.gigData, {user : this.props.user.email} )
  //   firestore.collection("gigs").add({
  //     combinedGigObj
  //   })
  //   this.props.history.push("/");
  // }
  
  render() {
    
    return (
      <div className='master-container'>
        <div className='component-container'>
                  <button onClick={this.handleGearFields}> add gear </button>
                  <button onClick={this.handleCollectionFields}> add a collection </button>

              <form>
                  {/* <label>Add from your Collections?</label>
                  <select name='user-collections'>
                      { this.componentDidMount() }
                  </select> */}
                  { this.createCollectionField() }
                  { this.createGearField() }
                  <input type="submit" />
              </form>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      gigData: state.newGigFirstData,
      userCollections : state.setCollections
  } 
}
  
const mapDispatchToProps = {
    addGig
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm2))