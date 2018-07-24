import React from 'react';

export default class SearchHx extends React.Component{

    render(){
        const { searchHistory } = this.props;
        return(
            <div className='card border-primary mb-3'>
            <div className='card-header text-white bg-primary'>Search History</div>
            <div className='card-body'>
            <table className="table table-striped">
                <tbody>
               { searchHistory.map((searched) =>
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