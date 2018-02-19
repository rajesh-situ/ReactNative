/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAg1whHCSTtAIt_GOGpOlWSaEBuYxKPvQo',
      authDomain: 'authentication-d730d.firebaseapp.com',
      databaseURL: 'https://authentication-d730d.firebaseio.com',
      projectId: 'authentication-d730d',
      storageBucket: 'authentication-d730d.appspot.com',
      messagingSenderId: '779386991598'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<CardSection>
          <Button
            onPress={() => firebase.auth().signOut()}
            title="Logout"
          />
        </CardSection>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
