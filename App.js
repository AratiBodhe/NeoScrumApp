import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
/* import {RegisterPage} from './src/Auth/RegisterPage'; */
/* import {FeedbackComponent} from './src/Components/FeedbackComponent'; */
/* import {UserCardComponent} from './src/Components/UserCardComponent'; */
/* import {LoginPage} from './src/Auth/LoginPage'; */
/* import MyStack from './src/Navigation/NavigatePages'; */
/* import {NavBarComponent} from './src/Components/NavbarComponent'; */
/* import DashbordPage from './src/Auth/DashboardPage'; */
/* import NavigatePages from './src/Navigation/NavigatePages'; */
import AppNavigator from './src/Navigation/NavigatePages';

class App extends React.Component {
  render() {
    return (
      /*<UserCardComponent /> */

      /*<RegisterPage /> */

      /*<NavBarComponent /> */

      /*<LoginPage /> */

      /*<FeedbackComponent /> */

      /*<DashbordPage /> */

      <AppNavigator />
    );
  }
}
export default App;
