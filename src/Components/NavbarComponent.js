import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
const Stack = createStackNavigator();

export class NavBarComponent extends React.Component() {
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}
