import React, { Component } from 'react';
import "firebase/firestore";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GigCard from './GigCard'



class Dash extends Component {
   renderGigs = () => {
       console.log(this.props.gigs)
       return this.props.gigs.map(gig => {
        return <GigCard 
                date={gig.newGigObj.date}
                time={gig.newGigObj.time}
                description={gig.newGigObj.description}
                />
       })
  }

   render(){
       return (
           <div className='component-container'>
               <button onClick={() => this.props.history.push("./newgigform1")}>add a new gig</button>
               <button onClick={() => this.props.history.push("./newcollection")}>create a gear collection</button>
               <br></br>
               <div>
                { this.renderGigs() }
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
