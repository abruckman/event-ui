import React, {Component} from 'react'
import $ from 'jquery'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      events:[]
    }
    this.getEvents = this.getEvents.bind(this)
  }

  getEvents(){
    $.ajax({
      url: "http://localhost:3000/api/events",
      type: "GET",
      context: this,
      success: function(result){
        this.setstate({events: result})
      }
    })
  }

  render(){
    this.getEvents()
    return (
      <div>
      {this.props.events.map((event)=>{
        return(
            <p>{event.name}</p>
          )
        })
      }
    </div>
    )
  }

}

export default Index;
