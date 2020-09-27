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
    collectionFields : [],
    gear : {},
    collections : []
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

  handleGearDropdownChange = (e) => {
    const key = `gear-text-${e.target.id}-category`
    const newGearObj = Object.assign(this.state.gear, { [key] : e.target.value})
    this.setState({
      gear : newGearObj
    })
  }

  handleGearTextChange = (e) => {
    const newGearTextObj = Object.assign(this.state.gear, { [e.target.name] : e.target.value })
    this.setState({
      gear : newGearTextObj
    })
  }

  handleCollectionChange = (e) => {
    this.setState({
      collections : [...this.state.collections, e.target.value ]
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
            <div key={idx} className='form-item'>
                <input type='text' name={`gear-text-${idx}`} onChange={ this.handleGearTextChange } placeholder='add gear'className='form-item'></input>
                <select name={`gear-category-${idx}`} id={idx}onChange={ this.handleGearDropdownChange }className='form-item'>
                    <option> None </option>
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
      <select name={`user-collection-${idx}`} key={idx} onChange={this.handleCollectionChange} className='form-item'>
        <option> None </option>
       { this.componentDidMount() }
      </select>  
     )
   })
}

handleFormSubmit = (e) => {
  e.preventDefault()
  const firestore = firebase.firestore();
  const completeGigDataObj = Object.assign(this.state.gear, this.state.collections, this.props.gigData, {user : this.props.user.email})
  console.log(completeGigDataObj)
  firestore.collection("gigs").add({
    completeGigDataObj
  })
  this.props.history.push("/");  
}

  render() {
    
    return (
      <div className='login-master'>
        <div className='form-container'>
                  <button onClick={this.handleGearFields} className='form-item'> add gear </button>
                  <button onClick={this.handleCollectionFields} className='form-item'> add a collection </button>

              <form>
                  { this.createCollectionField() }
                  { this.createGearField() }
                  <input type="submit" onClick={ this.handleFormSubmit } className='form-item'/>
              </form>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      gigData: state.newGigFirstData,
      userCollections : state.setCollections,
      user : state.setUser
  } 
}
  
const mapDispatchToProps = {
    addGig
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm2))