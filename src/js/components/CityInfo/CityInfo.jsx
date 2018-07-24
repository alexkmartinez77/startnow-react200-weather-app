import React from 'react';

export default class CityInfo extends React.Component{
    

render(){
    const { location, lon, lat, temp, press, hum, low, high, wind } = this.props;
    return(
        <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>City Information</div>
        <div className='card-body'>
          <table>
              <tbody>
                <tr>
                    <td><h2>{ location }</h2></td>
                </tr>
                <tr>
                     <td>Latitude/Longitude: {lat}, {lon} </td>                
                </tr>
                <tr>
                  <th>Temperature (F)</th>
                  <th>Pressure</th>
                  <th>Humidity</th>
                </tr>
                <tr>
                    <td>{ temp }</td>
                    <td>{ press }</td>
                    <td>{ hum }</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                  <th>Lowest Temp (F)</th>
                  <th>Highest Temp (F)</th>
                  <th>Wind Speed</th>
                </tr>
                <tr>
                    <td>{ low }</td>
                    <td>{ high }</td>
                    <td>{ wind }</td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>
        );
    }  
}