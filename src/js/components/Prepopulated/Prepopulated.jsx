import React from 'react';

export default class Prepopulated extends React.Component{

render(){
    return(
        <div>
            <button type="button" class="btn btn-info">San Diego</button>
            <button type="button" class="btn btn-primary">New York</button>
            <button type="button" class="btn btn-success">Washington D.C.</button>
            <button type="button" class="btn btn-warning">London</button>
            <button type="button" class="btn btn-danger">Tokyo</button>
        </div>
    );
    }
}