import React from 'react';

export default class SearchBar extends React.Component{

render(){
    return(
    <div>
        <div class="input-group">
        <span class="input-group-addon" id="sizing-addon2"></span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"></input>
        <button type='button' type="button" class="btn btn-light">GO!</button>
        </div>

    </div>
    );
}
}