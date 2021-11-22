import React from 'react';
/* import {DashboardPage} from '../Auth/DashboardPage'; */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DashboardPage} from '../Auth/DashboardPage';
import {LoginPage} from '../Auth/LoginPage';
import {RegisterPage} from '../Auth/RegisterPage';
const AppNavigator = createStackNavigator({
  SignUp: {
    screen: RegisterPage,
  },
  Login: {
    screen: LoginPage,
  },
  Dashboard: {
    screen: DashboardPage,
  },
});
export default createAppContainer(AppNavigator);
