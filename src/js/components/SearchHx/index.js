import { connect } from 'react-redux';
import SearchHx from './SearchHx';

function mapStoreToProps(store) {
    return {
      searchHistory: store.search.searchHistory,
    };
  }
export default connect(mapStoreToProps)(SearchHx);




