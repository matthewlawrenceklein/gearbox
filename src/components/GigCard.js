import React, { Component } from 'react';

class GigCard extends Component {
    render() {
        return (
            <div className='gig-card'>
                <p>{this.props.location}</p>
                <p>{this.props.description}</p>
                <p>{this.props.date} // {this.props.time}</p>
            </div>
        );
    }
}

export default GigCard;
