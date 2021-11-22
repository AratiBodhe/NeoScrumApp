import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {ButtonComponent} from '../Components/ButtonComponemt';
import {TextInputComponent} from '../Components/TextInputComponent';
import axios from 'axios';

export class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Password: '',
      email: '',
      secureTextEntry: true,
    };
  }
  onChangeEmail = email => {
    this.setState({email: email});
  };
  onChangePassword = password => {
    this.setState({Password: password});
  };

  onSubmit = email => {
    console.log('arive in onsubmit');
    var emailpattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (emailpattern.test(this.state.email) === true) {
      console.log(this.state.email, this.state.Password);
      axios
        .post('https://quiet-harbor-07900.herokuapp.com/DeveloperSignin', {
          email: this.state.email,
          password: this.state.Password,
        })
        .then(function (response) {
          console.log('response', response);
          console.log('success');
          if (response) {
            this.props.navigation.navigate('Dashboard');
            console.log('a');
          }
        })
        .catch(function (error) {
          console.log('error', error);
        });
    } else {
      console.warn('plz checked the email');
      alert('Incorrect Email');
    }
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>Login</Text>
        <TextInputComponent
          placeholder="Email*"
          value={this.state.email}
          changeText={this.onChangeEmail}
        />
        <TextInputComponent
          placeholder="Password"
          value={this.state.Password}
          secureTextEntry={this.state.secureTextEntry}
          changeText={this.onChangePassword}
        />
        <TouchableOpacity>
          <Text
            style={styles.btnText}
            onPress={() => {
              this.onSubmit();
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <Button
          title="goto"
          onPress={() => {
            this.props.navigation.navigate('Dashboard');
          }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  btnText: {
    marginLeft: 45,
    marginTop: 15,
    padding: 5,
    backgroundColor: 'blue',
    color: 'white',
    alignSelf: 'flex-start',
    fontSize: 20,
    borderRadius: 5,
  },
});
