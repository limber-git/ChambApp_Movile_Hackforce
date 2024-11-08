import React, { createRef, useContext, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { SignIn } from './screens/SignInScreen';
import { SplashScreen } from './screens/Splash/SplashScreen';
import { SplasLoading } from './screens/Splash/SplashLoading';
import { DataContext } from './app/Context';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {auth} = useContext(DataContext);
  const navigationRef = createRef();
  useEffect(() => {
    if (auth) {
      navigationRef.current.navigate('Home', {
        screen: 'Home',
        params: {screen: 'Home'},
      });
    }
  }, [auth]);
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName='Splash' >
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='SplashLoading'
          component={SplasLoading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
