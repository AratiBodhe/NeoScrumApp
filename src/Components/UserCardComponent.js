import axios from 'axios';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Button, Card, FAB, Image} from 'react-native-paper';
import {Axios} from 'axios';
export class UserCardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      textLength: 0,
    };
  }
  GetCharFunction = text => {
    var countCharacter = text.length.toString();
    this.setState({textLength: countCharacter});
  };

  onSubmitFeedback = text => {
    axios
      .post(
        'https://quiet-harbor-07900.herokuapp.com/#/feedback/post_addFeadback',
        {
          feadback: this.state.text,
        },
      )
      .then(function (response) {
        console.log('response', response);
        console.log('success');
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  render() {
    return (
      <View>
        <Card style={cardStyles.container}>
          <Avatar.Image size={50} style={cardStyles.fab} />
          <Text style={cardStyles.cardName}>NAME</Text>
          <TextInput
            placeholder="Write your feedback here..."
            style={cardStyles.cardTxtInput}
            maxLength={100}
            onChangeText={text => {
              this.GetCharFunction(text);
            }}></TextInput>

          <View
            style={{
              marginTop: 10,
              position: 'relative',
            }}>
            <View style={cardStyles.cardMaxChar}>
              <Text style={cardStyles.text}>Max 100 characters</Text>
            </View>
            <View style={cardStyles.cardCountChar}>
              <Text style={cardStyles.text}>{this.state.textLength} / 100</Text>
            </View>
          </View>

          <TouchableOpacity
            style={cardStyles.cardBtn}
            onPress={this.onSubmitFeedback()}>
            <Text style={{color: 'white', fontSize: 10}}>Submit Feedback</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 200,
    height: 300,
    borderWidth: 2,
    margin: 15,
  },
  fab: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 50,
  },
  cardName: {
    marginTop: 10,
    textAlign: 'center',
    position: 'relative',
  },
  cardTxtInput: {
    alignSelf: 'center',
    position: 'relative',
    padding: 10,
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'gray',
    width: 180,
  },
  cardMaxChar: {
    position: 'relative',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  },
  text: {
    fontSize: 10,
    padding: 5,
  },

  cardCountChar: {
    position: 'absolute',
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
  },

  cardBtn: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
    padding: 8,
    borderRadius: 5,
  },
});
