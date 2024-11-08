import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../utils/Colors';
import IsConnected from '../../utils/NetInfo';
import {Logo} from '../../components/Hero/Logo';
import Environments from '../../utils/Environments';
import {RetryAlert} from '../../components/Alerts/RetryAlert';
import {validateToken} from '../../api/Post';
import { DataContext } from '../../app/Context';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const {auth,handleSetAuth} = useContext(DataContext);
  const checkAuth = async () => {
    const modeApplication = await AsyncStorage.getItem(
      Environments.modeApplication.key,
    );
    if (!modeApplication) {
      await AsyncStorage.setItem(
        Environments.modeApplication.key,
        Environments.modeApplication.admin,
      );
    }
    const unsubscribe = await IsConnected();
    if (unsubscribe) {
      const auth = await AsyncStorage.getItem(
        Environments.keysLocalStorage.auth,
      );
      if (auth) {
        const validSession = await validateToken(auth);
        handleSetAuth(validSession.user);
        if (validSession) {
          setTimeout(() => {
            navigation.navigate('Home', {
              screen: 'Home',
              params: {screen: 'Home'},
            });
          }, 1200);
        }
      } else {
        navigation.navigate('SignIn', {
          screen: 'SignIn',
          params: {screen: 'Home', nextScreen: 'Home'},
        });
      }
    } else {
      RetryAlert('Error', 'No tienes conexión a internet', checkAuth);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentView}>
        <Logo width={130} height={130} />
        <ActivityIndicator size="large" color="#D50032" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
