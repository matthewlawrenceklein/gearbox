import React, { Component } from 'react';

class GigCard extends Component {
    render() {
        return (
            <div className='gig-card' onClick={() => this.props.renderFullGig(this.props.fullGigObj)}>
                <p>{this.props.location}</p>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default GigCard;
