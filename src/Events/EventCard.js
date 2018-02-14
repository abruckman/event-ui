import React, { Component } from 'react';
import PropTypes from 'prop-types'

class EventCard extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div>
        <p>-------------------</p>
        <h3>{this.props.event.name}</h3>
      </div>
    )
  }

}

EventCard.PropTypes = {
  event: PropTypes.object
}

export default EventCard;
