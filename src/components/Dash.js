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

    state = {
        selectedGig : {},
        showingGig : false 
    }

    renderFullGig = (fullGig) => {
        console.log(fullGig)
        this.setState({
            selectedGig: fullGig,
            showingGig : true 
        })        
    }
    
    renderGigs = () => {
        return this.props.gigs.map((gig, idx) => {
            const { date, time, location, description} = gig.completeGigDataObj
            return <GigCard 
            key={idx}
            date={date}
            time={time}
            location={location}
            description={description}
            fullGigObj={gig.completeGigDataObj}
            renderFullGig={this.renderFullGig}
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
        const { location, description, date, time } = this.state.selectedGig 
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
                <div className='gig-details-panel'>
                    { this.state.showingGig ? 
                        <div className='gig-details-item'>
                            <h2> { location } </h2>
                            <h2> { description } </h2>
                            <h4> { date } -- { time } </h4>
                            <h4> { this.state.selectedGig.geartext0 } -- { this.state.selectedGig.geartext0category }<input type='checkbox'></input> </h4>
                            <h4> { this.state.selectedGig.geartext1 } -- { this.state.selectedGig.geartext1category }<input type='checkbox'></input> </h4>
                            <h4> { this.state.selectedGig.geartext2 } -- { this.state.selectedGig.geartext2category }<input type='checkbox'></input> </h4>
                            <h4> { this.state.selectedGig.geartext3 } -- { this.state.selectedGig.geartext3category }<input type='checkbox'></input> </h4>
                            {/* <h4> { this.state.selectedGig.geartext4 } -- { this.state.selectedGig.geartext4category }<input type='checkbox'></input> </h4>
                            <h4> { this.state.selectedGig.geartext5 } -- { this.state.selectedGig.geartext5category }<input type='checkbox'></input> </h4> */}
                        </div>
                        :
                        <div className='gig-details-panel'>
                            <h2>Click a Gig to Show Details </h2>
                        </div>
                    }
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
