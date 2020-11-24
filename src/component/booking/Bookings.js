import React,{Component} from 'react';
import axios from 'axios';
import BookingView from './BookingView';

const url = "https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                 <p>Your Booking is {this.props.location.search.split('=')[1]}</p>
                <BookingView bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(url);
        this.setState({booking:response.data})
    }
}

export default Booking;