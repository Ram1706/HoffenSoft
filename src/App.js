import React from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ImageSearch from '../src/components/ImageSearch';
import configureStore from '../src/modules/store';


const reduxStore=configureStore({images:{}});
class App extends React.PureComponent {

  render(){
  return (
    <Provider store={reduxStore}>
    <div className="App">
      <ImageSearch></ImageSearch>
    </div>
    </Provider>
  )
  }
}

export default App;
