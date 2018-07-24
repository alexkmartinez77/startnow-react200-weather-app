import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
      location: store.search.location,
      lon: store.search.lon,
      lat: store.search.lat,
      temp: store.search.temp,
      press: store.search.press,
      hum: store.search.hum,
      low: store.search.low,
      high: store.search.high,
      wind: store.search.wind,
      time: store.search.time
    };
  }
export default connect(mapStoreToProps)(CityInfo);
