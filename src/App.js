import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./store";
import Home from './screen/home';

const { store, persistor } = configureStore();

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
