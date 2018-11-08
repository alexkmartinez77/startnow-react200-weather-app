import React from 'react';

export default class CityInfo extends React.Component {


    render() {
        const { location, lon, lat, temp, press, hum, low, high, wind } = this.props;
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>City Information</div>
                <div className='card-body'>
                    <div className="container">
                        <table className='text-center'>
                            <tbody className='text-center'>
                                <tr className='text-center'>
                                    <td colSpan='3' className='text-center'><h2>{location}</h2></td>
                                </tr>
                                <tr>
                                    <td colSpan='3' className='text-center'>Latitude/Longitude: {lat}, {lon} </td>
                                </tr>
                                <tr className='text-center'>
                                    <th className='text-center'>Temperature (F)</th>
                                    <th className='text-center'>Pressure</th>
                                    <th className='text-center'>Humidity</th>
                                </tr>

                                <tr className='text-success text-center'>
                                    <td className='text-center'>{temp}</td>
                                    <td className='text-center'>{press}</td>
                                    <td className='text-center'>{hum}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className='text-center'>
                                    <th className='text-center'>Lowest Temp (F)</th>
                                    <th className='text-center'>Highest Temp (F)</th>
                                    <th className='text-center'>Wind Speed</th>
                                </tr>
                                <tr className='text-success text-center'>
                                    <td className='text-center'>{low}</td>
                                    <td className='text-center'>{high}</td>
                                    <td className='text-center'>{wind}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}