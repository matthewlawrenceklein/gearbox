import React from 'react';
import "firebase/firestore";
import { withRouter } from "react-router-dom";

const Dash = (props) => {
   
    return (
        <div className='component-container'>
            <h3>hey</h3>
            <button onClick={() => props.history.push("./newgigform1")}>add a new gig</button>
            <button onClick={() => props.history.push("./newcollection")}>create a gear collection</button>
        </div>
    );
}

export default withRouter(Dash);
