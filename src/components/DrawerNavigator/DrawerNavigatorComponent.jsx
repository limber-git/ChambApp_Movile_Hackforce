import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../../screens/ProfileScreen';
import {EventosScreen} from '../../screens/EventosScreen';
import {Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Colors';
import {HeaderMenu} from './HeaderMenu';
import {FooterMenu} from './FooterMenu';
import {CustomDrawer} from './CustomDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerPosition: 'left',
        drawerHideStatusBarOnOpen: false, 
        drawerActiveTintColor: '#ffff',
        drawerInactiveTintColor: '#ffff',
        drawerActiveBackgroundColor: colors.teal,
        drawerStyle: {
          backgroundColor: colors.bgUsed,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitle: 'Profile',
          headerBackground: () => (
            <View
              style={{
                backgroundColor:colors.bgUsed,
                height: 100,  
              }}
            />
          ),
          headerTintColor: '#fff',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Events"
        component={EventosScreen}
        
        options={{
          title: 'Events',
          headerTitle: 'Events',
          headerBackground: () => (
            <View
              style={{
                backgroundColor:colors.bgUsed,
                height: 100,  
              }}
            />
          ),
          headerTintColor: '#fff',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="calendar-month"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Qr"
        component={EventosScreen}
        options={{
          title: 'Scanner',
          headerTitle: 'Scanner',
          headerBackground: () => (
            <View
              style={{
                backgroundColor:colors.bgUsed,
                height: 100,  
              }}
            />
          ),
          headerTintColor: '#fff',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name="qrcode" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
