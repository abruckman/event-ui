import React, {Component} from 'react'
import axios from 'axios'
import EventCard from './EventCard'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      events:[]
    }
    this.getEvents = this.getEvents.bind(this)
  }
  getEvents(){

    axios.get('http://localhost:3000/api/events')
    .then( res => {
      console.log(res.data)
      this.setState({events:res.data})
    })
  }

  componentDidMount(){
    this.getEvents()
  }




  render(){

    // const Events = this.state.events.map((event)=>{
    //   return(<p>{event.name}</p>)
    // })c
    console.log(this.state.events)
    return (
      <div>
        <p>hey there!</p>
        {this.state.events.map((event)=>{
          return(<EventCard event={event} />)
        })}
      </div>
    )
  }

}

export default Index;
