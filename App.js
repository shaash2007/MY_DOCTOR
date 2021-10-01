import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation"
//import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import Navigator from './screens/navigator';
import Application from './screens/application';
import {AppDrawerNavigator} from './components/appDrawerNavigator'
import DocInfo from './screens/docINFO'
export default function App() {
  return (
<AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen:AppDrawerNavigator},
  Navigation:{screen:Navigator},
  Application:{screen:Application},
  DocInfo:{screen:DocInfo}
})

const AppContainer = createAppContainer(switchNavigator)