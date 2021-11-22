import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';
import {ButtonComponent} from '../Components/ButtonComponemt';
import {TextInputComponent} from '../Components/TextInputComponent';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';

export class RegisterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      validated: false,
      ProfileImage: {},
      EmployeeName: '',
    };
  }

  onChangeEmail = email => {
    this.setState({email: email});
  };
  onChangeName = EmployeeName => {
    this.setState({EmployeeName: EmployeeName});
  };

  selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState({ProfileImage: image});
    });
  };

  onSubmit = (email, EmployeeName, profileImage) => {
    console.log('arive');
    var emailpattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (emailpattern.test(this.state.email) === true) {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8;',
        },
      };
      console.log(this.state.ProfileImage);
      const imageData = new FormData();
      imageData.append('email', this.state.email);
      imageData.append('name', this.state.EmployeeName);
      imageData.append('profileImage', {
        uri: this.state.ProfileImage.path,
        type: this.state.ProfileImage.mime,
        name: 'image.jpg',
        filename: '5quhhz.jpg',
      });
      console.log('arrived in onsubmit if condition');
      console.log(imageData);

      console.log(this.state.email, this.state.EmployeeName);
      axios
        .post(
          'https://quiet-harbor-07900.herokuapp.com/register',
          imageData,
          config,
        )
        .then(function (response) {
          console.log('response', response);
          console.log('response received');
        })
        .catch(function (error) {
          console.log('error', error);
        });
    } else {
      alert('Incorrect Email');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter New Developer</Text>
        <TextInputComponent
          placeholder="Employee Name*"
          value={this.state.EmployeeName}
          changeText={this.onChangeName}
        />
        <TextInputComponent
          placeholder="Email*"
          value={this.state.email}
          changeText={this.onChangeEmail}
        />

        <TouchableOpacity
          style={styles.chooseFilebtn}
          onPress={() => {
            this.selectImage();
          }}>
          <Text style={{color: 'black', textAlign: 'center'}}>Choose File</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            this.onSubmit();
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gotobtn}
          onPress={() => {
            this.props.navigation.push('Login');
          }}>
          <Text>go to login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    alignItems: 'center',

    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: 'blue',
    width: 70,
    fontSize: 10,
    padding: 7,
    marginTop: 20,
  },
  chooseFilebtn: {
    width: 90,
    height: 30,

    padding: 7,
    backgroundColor: 'gray',
    marginTop: 40,
    marginLeft: 40,
    alignSelf: 'flex-start',
  },
  gotobtn: {
    marginTop: 50,
    backgroundColor: 'lightblue',
    padding: 10,
  },
});
