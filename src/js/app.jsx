import React from 'react';
import CityInfo from './components/CityInfo';
import SearchHx from './components/SearchHx';
import SearchBar from './components/SearchBar';
import Prepopulated from './components/Prepopulated';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h3 className='display-3'>Origin Weather Application</h3>
          <h5>Always know if you will need an umbrella!</h5>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12 mb-4'>
            <Prepopulated/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12 mb-4'>
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
