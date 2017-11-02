import { connect } from 'react-redux';
import App from '../components/App/App';
import { houseData } from '../actions/AppActions';

const mapStateToProps = store => ({
  houseData: store.houseData
});

const mapDispatchToProps = dispatch => ({
  setHouseData: (houseDataArray) => {
    dispatch( houseData(houseDataArray) )
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);