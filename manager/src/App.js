import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDY4BHIbchj-rBHVYstD4XEmxo4OG2Rld8',
      authDomain: 'manager-46506.firebaseapp.com',
      databaseURL: 'https://manager-46506.firebaseio.com',
      projectId: 'manager-46506',
      storageBucket: '',
      messagingSenderId: '594140879507'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Employee" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
