import React, {useEffect} from 'react';
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
import Environments from '../../utils/Environments';
import {RetryAlert} from '../../components/Alerts/RetryAlert';

export const SplasLoading = ({navigation, ...props}) => {
  const nextScreen = props.route.params.params.nextScreen;

  const checkAuth = async () => {
    // const modeApplication = await AsyncStorage.getItem(
    //   Environments.modeApplication.key,
    // );
    // if (!modeApplication) {
    //   await AsyncStorage.setItem(
    //     Environments.modeApplication.key,
    //     Environments.modeApplication.admin,
    //   );
    // }
    const unsubscribe = await IsConnected();
    if (unsubscribe) {
      const auth = await AsyncStorage.getItem(
        Environments.keysLocalStorage.auth,
      );
      if (auth) {
        setTimeout(() => {
          navigation.navigate(nextScreen, {
            screen: 'Home',
            params: {nextScreen: '', lastScreen: props.route.params.screen},
          });
        }, 1200);
      } else {
        navigation.navigate('SignIn', {
          screen: 'SignIn',
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
