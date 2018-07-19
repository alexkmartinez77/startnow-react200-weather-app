import React from 'react';

export default class CityInfo extends React.Component{
    

render(){
    return(
        <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>City Information</div>
        <div className='card-body'>
          <table border="1">
                <tr>
                    <td><h2>Tokyo</h2></td>
                </tr>
                <tr>
                     <td>Lat/Long: 35.69, 139.69</td>
                </tr>
                <tr>
                  <th>Temperature (F)</th>
                  <th>Pressure</th>
                  <th>Humidity</th>
                </tr>
                <tr>
                    <td>65.62F</td>
                    <td>997</td>
                    <td>39%</td>
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
                    <td>62.01F</td>
                    <td>71.01</td>
                    <td>24.16mph</td>
                </tr>
            </table>
        </div>
      </div>
        );
    }  
}