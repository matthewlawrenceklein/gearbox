import React, { Component } from 'react';
import "firebase/firestore";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GigCard from './GigCard'
import CollectionCard from './CollectionCard'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



class Dash extends Component {
    
    renderGigs = () => {
        return this.props.gigs.map(gig => {
            return <GigCard 
            date={gig.combinedGigObj.date}
            time={gig.combinedGigObj.time}
            description={gig.combinedGigObj.description}
            />
        })
    }
    
    renderCollections = () => {
        const userCollections = []
        const firestore = firebase.firestore();
        firestore.collection("collections").where('combinedCollection.user', '==', this.props.user.email)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    userCollections.push(doc.data())
            });      
            return userCollections.map(collection => {
                return <CollectionCard />
            }) 
        })
    }

    render(){
       return (
           <div className='master-container'>
               <div className='dash-button-bar'>
                    <button className='dash-buttons' onClick={() => this.props.history.push("./newgigform1")}>add a new gig</button>
                    <button className='dash-buttons' onClick={() => this.props.history.push("./newcollection")}>create a gear collection</button>
               </div>
            <div className='component-container'>
                <br></br>
                <div>
                    { this.renderGigs() }
                    { this.renderCollections() }
                </div>
            </div>
           </div>
       );
   }
}

const mapStateToProps = (state) => {
    return {
        user : state.setUser,
        gigs : state.setGigs
        
    }
  }
  
const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dash));
