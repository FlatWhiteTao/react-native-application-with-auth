import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // init state, not logged in to the system
  state = { loggedIn: null, headerContent: '' };
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

    // event handler to handle if the user signed in or out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, headerContent: user.uid });
      } else {
        this.setState({ loggedIn: false, headerContent: 'Auth' });
      }
    });
  }

  // based on the loggedIn state to render loginForm or another content
  rednerContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={this.state.headerContent} />
        {this.rednerContent()}
      </View>
    );
  }
}

export default App;
