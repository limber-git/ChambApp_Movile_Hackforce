import React, {useContext, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import {EventosScreen} from './EventosScreen';
import { DrawerNavigatorComponent } from '../components/DrawerNavigator/DrawerNavigatorComponent';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Environments from '../utils/Environments';
import { DataContext } from '../app/Context';
import { BackHandler } from 'react-native';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation, ...props}) => {
  const { auth } = useContext(DataContext);
  const nav = useNavigation();  
  useEffect(() => {
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => {
      backhandler.remove();
    };
  }, []);
  return (
    <DrawerNavigatorComponent />
  );
};

export default HomeScreen;
