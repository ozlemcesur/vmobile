import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import HomeScreen from './screens/HomeScreen';
//import OtherScreen from './screens/OtherScreen';
import SignInScreen from './screens/SignInScreen';
import ConsultantScreen from './screens/ConsultantScreen';
import PlanningScreen from './screens/PlanningScreen';

const AppStack = createStackNavigator({ Home: HomeScreen , Consultant : ConsultantScreen, Planning : PlanningScreen});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
