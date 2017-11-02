import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import HouseCard from '../HouseCard/HouseCard';


class App extends Component {

  componentDidMount(){ 
    fetch(`http://localhost:3001/api/v1/houses`)
      .then( response => response.json() )
      .then( parsed => Promise.all(parsed) )
      .then(resolvedHouseDataArrayPromises => this.props.setHouseData(resolvedHouseDataArrayPromises) )
  }

  render() {

    const mappedHouseData = this.props.houseData.map( house => <HouseCard key={house.name} houseData={house}/> )
    
    if(!this.props.houseData.length){
      console.log('FIRED');
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
            <button onClick={() => {
              this.props.fakeAction();
              alert(this.props.fake);
            }}> FAKE ACTION</button>
          </div>
          <div className='Display-info'>
            <img src={require('./wolf.gif')} alt='gif of running wolf' />
          </div>
        </div>
      )
    }
  return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          {mappedHouseData}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
