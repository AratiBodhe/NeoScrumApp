import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

export class TextInputComponent extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={this.props.placeholder}
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.changeText}
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            margin: 15,
            width: 250,
            paddingBottom: 4,
          }}></TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  onchange: {
    borderBottomColor: 'red',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
