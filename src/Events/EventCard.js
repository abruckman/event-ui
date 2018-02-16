import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';


class EventCard extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div>
        <GridTile
        <p>-------------------</p>
        <h3>{this.props.event.name}</h3>
        <p>{this.props.event.date_start}</p>
      </div>
    )
  }

}

EventCard.PropTypes = {
  event: PropTypes.object
}

export default EventCard;
