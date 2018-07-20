import React from 'react';

export default class Prepopulated extends React.Component{

render(){
    return(
        <div>
            <button type="button" className="btn btn-primary">San Diego</button>
            <button type="button" className="btn btn-primary">New York</button>
            <button type="button" className="btn btn-primary">Washington D.C.</button>
            <button type="button" className="btn btn-primary">London</button>
            <button type="button" className="btn btn-primary">Tokyo</button>
        </div>
    );
    }
}