import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
      location: store.search.location,
    };
  }
export default connect(mapStoreToProps)(SearchBar);