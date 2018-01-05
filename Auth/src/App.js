import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // firebase setup
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB20pKqZl2XrYzb_laas3_7h2sPc_1ZgHA',
      authDomain: 'auth-83f30.firebaseapp.com',
      databaseURL: 'https://auth-83f30.firebaseio.com',
      projectId: 'auth-83f30',
      storageBucket: 'auth-83f30.appspot.com',
      messagingSenderId: '156843621547'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
