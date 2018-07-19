import React from 'react';
import CityInfo from './components/CityInfo/CityInfo';
import SearchHx from './components/SearchHx/SearchHx';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h3 className='display-3'>Origin Weather Application</h3>
          <h5>Always know if you will need an umbrella!</h5>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <SearchBar/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo/>
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHx/>
          </div>
        </div>

      </div>
    );
  }
}