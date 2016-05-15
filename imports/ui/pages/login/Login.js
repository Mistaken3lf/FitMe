import React from 'react';
import Alert from 'react-s-alert';
import {Row, Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap';

export default class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    // Capture username and password from form
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username == '' || username == null) {
      Alert.error('Please enter your username', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else if (password == '' || password == null) {
      Alert.error('Please enter your password', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      // Log user in with userrname and password
      Meteor.loginWithPassword(username, password, (error) => {
        // Invalid login
        if (error) {
          // Pop up an alert to show login failed
          Alert.error(error.reason, {
            position: 'top-right',
            effect: 'jelly',
          });
        }
      });
    }
  }

  render() {
    return (
      <Row>
      <Form horizontal>
        <FormGroup controlId="formHorizontalPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
            <Button type="submit" bsStyle="primary" block>
              Sign in
            </Button>
        </FormGroup>
      </Form>
      </Row>
    );
  }
}