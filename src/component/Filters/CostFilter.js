import React,{Component} from 'react';
import axios from 'axios';

const roomUrl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{
    filterCost = (event) => {
        let costValue = (event.target.value).split(',');
        let lCost = Number(costValue[0]) 
        let hCost = Number(costValue[1]) 
        let tripType = sessionStorage.getItem('tripId');
        console.log(tripType, "tripType")
        let costUrl;
        if(costValue == ''){
            costUrl = `${roomUrl}/${tripType}`
        }else{
            costUrl = `${roomUrl}/${tripType}?hcost=${hCost}&lcost=${lCost}`
        }
        axios.get(costUrl)
        .then((response) => {this.props.roomPerCost(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <strong>Search by Cost Type</strong>
                <div onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All 
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,5000" name="room"/>3001-5000
                    </label>
                    <label className="radio">
                        <input type="radio" value="5001,7000" name="room"/>5001-7000
                    </label>
                    <label className="radio">
                        <input type="radio" value="7001,9000" name="room"/>7001-9000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;