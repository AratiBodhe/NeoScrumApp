import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

export class ButtonComponent extends React.Component {
  render() {
    return (
      <View>
        {/*  <TouchableOpacity
          style={btnstyles.button}
          onPress={email => {
            this.state.route.params.onSubmit(email);
          }}>
          <Text style={{color: 'white'}}>{this.props.label}</Text>
        </TouchableOpacity> */}
        <Button style={btnstyles.button}>{this.props.label}</Button>
      </View>
    );
  }
}
const btnstyles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 8,
    marginLeft: 20,
    marginBottom: 40,
    marginTop: 30,
    borderRadius: 5,
    textcolor: 'white',
  },
});
