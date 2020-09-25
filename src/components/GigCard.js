import React, { Component } from 'react';

class GigCard extends Component {
    render() {
        return (
            <div className='gig-card'>
                <h3>{this.props.date}</h3>
                <h3>{this.props.time}</h3>
                <h3>{this.props.description}</h3>
            </div>
        );
    }
}

export default GigCard;
