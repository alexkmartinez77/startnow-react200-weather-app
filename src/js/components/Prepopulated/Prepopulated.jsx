import React from 'react';
import { getWeather} from '../SearchBar/searchBarActions';

export default class Prepopulated extends React.Component{
    constructor(props){
        super(props);
    
    this.handlePrepopulated = this.handlePrepopulated.bind(this);    
    }    


handlePrepopulated(e){
    const { dispatch } = this.props;
    const location = e.target.value;
    dispatch(getWeather(location));
   };

render(){
    return(
        <div>
            <button type="button" className="btn btn-primary" value="San Diego" onClick={this.handlePrepopulated}>San Diego</button>
            <button type="button" className="btn btn-primary" value="New York" onClick={this.handlePrepopulated}>New York</button>
            <button type="button" className="btn btn-primary" value="Washington DC." onClick={this.handlePrepopulated}>Washington D.C.</button>
            <button type="button" className="btn btn-primary" value="London" onClick={this.handlePrepopulated}>London</button>
            <button type="button" className="btn btn-primary" value="Tokyo" onClick={this.handlePrepopulated}>Tokyo</button>
        </div>
    );
    }
}