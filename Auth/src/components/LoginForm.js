import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  // add a state to receive feedback/input from user
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@domain.com"
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

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
