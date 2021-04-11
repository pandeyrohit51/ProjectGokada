import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeScreen' component={HomeScreenNavigator} />
      <Drawer.Screen name='ProfileScreen' component={ProfileScreenNavigator} />
      <Drawer.Screen
        name='SettingsScreen'
        component={SettingsScreenNavigator}
      />
    </Drawer.Navigator>
  );
}

const HomeScreenStack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen name='HomeScreen' component={HomeScreen} />
    </HomeScreenStack.Navigator>
  );
}

const ProfileScreenStack = createStackNavigator();

function ProfileScreenNavigator() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
    </ProfileScreenStack.Navigator>
  );
}

const SettingsScreenStack = createStackNavigator();

function SettingsScreenNavigator() {
  return (
    <SettingsScreenStack.Navigator>
      <SettingsScreenStack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
      />
    </SettingsScreenStack.Navigator>
  );
}
