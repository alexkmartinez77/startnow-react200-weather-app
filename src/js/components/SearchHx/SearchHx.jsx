import React from 'react';

export default class SearchHx extends React.Component {

    render() {
        const { searchHistory } = this.props;
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>Search History</div>
                <div className='card-body'>
                    {/* {searchHistory.map((searched) =>
                            <div className='row'>
                                <div className='col-4'><p>{searched.location}</p></div>
                                <div className='col-8 text-right'><p>{searched.date} {searched.time}</p></div>
                            </div>

                        )
                        } */}
                    <table className="table table-striped">
                        <tbody>
                            {searchHistory.map((searched) =>
                                <tr>
                                    <td>{searched.location}</td>
                                    <td className='text-right'>{searched.date}     {searched.time}</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}