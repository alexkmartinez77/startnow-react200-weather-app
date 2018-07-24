import React from 'react';

export default class SearchHx extends React.Component{

    render(){
        const { searchHistory } = this.props;
        return(
            <div className='card border-primary mb-3'>
            <div className='card-header text-white bg-primary'>Search History</div>
            <div className='card-body'>
            <table>
               { searchHistory.map((searched) =>
                <tr>
                    <tr>
                        <td>{searched.location}</td>
                        <td>{searched.date}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{searched.time}</td>
                    </tr>  
                </tr>
  
                )
            }
            </table>
            </div>
          </div>
        );
    }

}