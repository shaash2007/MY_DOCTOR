import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import Navigator from '../screens/navigator';
import SettingScreen from '../screens/settingsScreen'
/* import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen'; */

import {Icon} from 'react-native-elements';
import { RFValue } from "react-native-responsive-fontsize";

export const AppDrawerNavigator = createDrawerNavigator({
  Navigation:{screen:Navigator,
        navigationOptions:{
          drawerIcon : <Icon name="home" type ="fontawesome5" />
        }
        },

        Settings : {
            screen : SettingScreen,
            navigationOptions:{
              drawerIcon : <Icon name="gear" type ="fontawesome5" />
            }
            },

    },
    {contentComponent:CustomSideBarMenu},
{initialRouteName:"Navigation"
})
