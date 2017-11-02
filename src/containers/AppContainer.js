import { connect } from 'react-redux';
import App from '../components/App/App';
import { houseData } from '../actions/AppActions';

export const mapStateToProps = store => ({
  houseData: store.houseData
});

export const mapDispatchToProps = dispatch => ({
  setHouseData: (houseDataArray) => {
    dispatch( houseData(houseDataArray) )
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);