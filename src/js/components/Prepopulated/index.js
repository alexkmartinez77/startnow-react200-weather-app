import { connect } from 'react-redux';
import Prepopulated from './Prepopulated';

function mapStoreToProps(store) {
    return {
      location: store.search.location,
    };
  }
  export default connect(mapStoreToProps)(Prepopulated);