import React,{Component} from 'react';
import QuickSearch from './QuickSearch';

const QuickUrl = "https://developerfunnel.herokuapp.com/booking";

class QuickLogic extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }

    render(){
        return(
            <div>
                <QuickSearch tripData={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(QuickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickLogic;