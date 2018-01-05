import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  // add a state to receive feedback/input from user
  state = { email: '', password: '' };


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

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>

    );
  }
}

export default LoginForm;
