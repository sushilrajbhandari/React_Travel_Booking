import React, {Component} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";
const bookingUrl = ""; //post url

class PlaceBooking extends Component {
    constructor (){
        super ()
        this.state={
            order_id:Math.floor(Math.random()*1000),
            //hotel_name: sessionStorage.getItem('hotelName'), //getting from sessionStorage instead calling api to load faster
            hotel_name: '',
            name:'',
            phone:''
        }
    }

    async componentDidMount (){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({hotel_name:response.data[0].name})
    }

    handleChangeName = (event)=>{
        this.setState({name:event.target.value})
    }
    handleChangePhone = (event)=>{
        this.setState({phone:event.target.value})
    }

    handleSubmit = () =>{
        console.log(this.state, "ABC")
        fetch (bookingUrl, {
            method:'POST',
            headers :{
                'Accept': 'aaplication/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewbookings?message=success'))
        .catch(this.props.history.push('/viewbookings?message=fail'))
    }

    render (){
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input type="text" value={this.state.order_id}
                            readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input type="text" value={this.state.hotel_name}
                            readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={this.state.name} className="form-control" 
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" value={this.state.phone} className="form-control"
                             onChange={this.handleChangePhone}/>
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link>
                        &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default PlaceBooking