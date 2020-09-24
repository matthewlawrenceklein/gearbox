import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const NewCollection = (props) => {
    return (
        <div className='component-container'>
            <button onClick={() => props.history.push("/")}>beep</button>
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
