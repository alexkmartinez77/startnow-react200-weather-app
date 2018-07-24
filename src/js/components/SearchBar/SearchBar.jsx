import React from 'react';
import { updateLocationName, getWeather} from './searchBarActions';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);

    this.handleNewLocation = this.handleNewLocation.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);    
    }

handleNewLocation(e){
    const { dispatch } = this.props;
    const location = e.target.value;
    dispatch(updateLocationName(location));
};

handleGetWeather(){
    const { dispatch } = this.props;
    const location = this.props.location;
    dispatch(getWeather(location));
}

render(){
    const { location } = this.props;
    return(
    <div>
        <div className="input-group">
        <input type="text" 
        className="form-control" 
        aria-describedby="sizing-addon3"
        value={ location }
        onChange={ this.handleNewLocation }>
        </input>
        <button type='button' className="btn btn-light" onClick={this.handleGetWeather}>GO!</button>
        </div>

    </div>
    );
}
}