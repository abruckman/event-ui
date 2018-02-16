import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';


class EventCard extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }


  render(){
    let event = this.props.event

    return(
      <div>
        <GridTile
          title={event.name}
          subtitle={event.date_start}>
          <img src="dog.jpeg"/>
        </GridTile>
      </div>
    )
  }

}

EventCard.propTypes = {
  event: PropTypes.object
}

export default EventCard;
