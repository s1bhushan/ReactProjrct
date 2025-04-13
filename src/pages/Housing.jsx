import React,{Component} from "react";

import JSON from './photo.json';
import HousingList from './HousingList';
 
class Housing extends Component{
    constructor(){
        super();
        this.state={
            title: 'Housing Page',
            products: JSON
        }
    }

    render(){
        return(
            <div>
            <h2>{this.state.title}</h2>
            <HousingList prodlist={this.state.products}/>
            </div>
        )
    }
}
export default Housing;