import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import {View} from 'react-native';
import { HeaderMenu } from './HeaderMenu';
import { FooterMenu } from './FooterMenu';
import { DataContext } from '../../app/Context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Environments from '../../utils/Environments';

export const CustomDrawer = props => {
  const navigation = useNavigation();
  const { auth,handleSetAuth,handleLogout } = useContext(DataContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <HeaderMenu/>
        <View style={{
            flex: 1,  
        }}>
        <DrawerItemList {...props} /> 
        </View>
        {/* <FooterMenu /> */}
      </DrawerContentScrollView>
      <View style={{
        flex: 1,
        padding:20, 
        borderTopColor: '#fff',
      }}> 
        <FooterMenu handleLogout={async()=>{
          navigation.navigate('SplashLoading', {
            screen: 'SplashLoading',
            params: { nextScreen: 'SignIn',lastScreen: 'Home'},
          })
          // navigation.reset({
          //   index: 1,
          //   routes: [{ name: 'SplashLoading' }],
          // });
          handleLogout()
          await AsyncStorage.removeItem(Environments.keysLocalStorage.auth); 
        }}/> 
      </View>
    </View>
  );
};
