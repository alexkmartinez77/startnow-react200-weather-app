import React from 'react';

export default class CityInfo extends React.Component {


    render() {
        const { location, lon, lat, temp, press, hum, low, high, wind } = this.props;
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>City Information</div>
                <div className='card-body'>
                    <h5 className="card-title">{location}</h5>
                    <p>
                        <strong>Latitude/Longitude: {lat}, {lon}</strong>
                    </p>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <strong>Temperature (F)</strong>
                            </p>
                            <p className="text-success">{temp}</p>
                        </div>
                        <div className="col-4">
                            <p>
                                <strong>Pressure</strong>
                            </p>
                            <p className="text-success">{press}</p>
                        </div>
                        <div className="col-4">
                            <p>
                                <strong>Humidity</strong>
                            </p>
                            <p className="text-success">{hum}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>
                                <strong>Lowest Temp (F)</strong>
                            </p>
                            <p className="text-success">{low}</p>
                        </div>
                        <div className="col-4">
                            <p>
                                <strong>Highest Temp (F)</strong>
                            </p>
                            <p className="text-success">{high}</p>
                        </div>
                        <div className="col-4">
                            <p>
                                <strong>Wind Speed</strong>
                            </p>
                            <p className="text-success">{wind}</p>
                        </div>
                    </div>
                    {/* <table>
                        <tbody>
                            <tr>
                                <td colSpan='3' className='text-center'><h2>{location}</h2></td>
                            </tr>
                            <tr>
                                <td colSpan='3' className='text-center'>Latitude/Longitude: {lat}, {lon} </td>
                            </tr>
                            <tr>
                                <th className='text-center'>Temperature (F)</th>
                                <th className='text-center'>Pressure</th>
                                <th className='text-center'>Humidity</th>
                            </tr>

                            <tr className='text-success'>
                                <td className='text-center'>{temp}</td>
                                <td className='text-center'>{press}</td>
                                <td className='text-center'>{hum}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th className='text-center'>Lowest Temp (F)</th>
                                <th className='text-center'>Highest Temp (F)</th>
                                <th className='text-center'>Wind Speed</th>
                            </tr>
                            <tr className='text-success'>
                                <td className='text-center'>{low}</td>
                                <td className='text-center'>{high}</td>
                                <td className='text-center'>{wind}</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        );
    }
}