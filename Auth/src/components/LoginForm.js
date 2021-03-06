import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // add a state to receive feedback/input from user
  state = { email: '', password: '', error: '', loading: false };

  //import firebase framework
  onButtonPress() {
    const { email, password } = this.state;
    // clear error msg when user resign again and set loading state true
    this.setState({ error: '', loading: true });

    //.then handles the case where successed, while catch handles failure
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  // use a helper function to return needed JSX
  renderButton() {
      if (this.state.loading) {
        return <Spinner size='small' />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            // undefined secureTextEntry is false
            placeholder="user@domain.com"
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};
export default LoginForm;
