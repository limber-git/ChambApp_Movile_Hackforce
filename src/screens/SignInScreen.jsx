import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Alert,
  BackHandler,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Logo} from '../components/Hero/Logo';
import colors from '../utils/Colors';
import {SubmitButton} from '../components/Buttons/LoginButton';
import {login} from '../api/Post';
import IsConnected from '../utils/NetInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Environments from '../utils/Environments';
import {RetryAlert} from '../components/Alerts/RetryAlert';
import {SuccessAlert} from '../components/Alerts/SuccessAlert';
import {DataContext} from '../app/Context';

export const SignIn = ({navigation, ...props}) => {
  const {auth, handleSetAuth} = useContext(DataContext);

  const [checked, setChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    typeLogin: 'student',
  });

  const handleChange = (name, value) => { // setea el valor del input en el estado
    setUser({
      ...user,
      [name]: value,
    });
  };

  const toggleCheck = async () => { // cambia el tipo de usuario
    await AsyncStorage.setItem(
      Environments.modeApplication.key,
      !checked
        ? Environments.modeApplication.student
        : Environments.modeApplication.admin,
    );
    setChecked(!checked); 
  };

  const togglePasswordVisibility = () => { // muestra u oculta la contraseña
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSubmit = async () => { // envia los datos al servidor
    Keyboard.dismiss();
    setLoading(true); 
    const unsubscribe = await IsConnected(); // verifica si hay conexión a internet
    if (!unsubscribe) {
      RetryAlert('Error', 'No tienes conexión a internet', handleSubmit);
    }
    const response = await login(user); // envia los datos al servidor
    
    if (response) { // si la respuesta es correcta
      await AsyncStorage.setItem(
        Environments.keysLocalStorage.auth,
        response.token,
      );
      handleSetAuth(response);
      // SuccessAlert('Login', 'Sesión iniciada correctamente');
      navigation.navigate('SplashLoading', {
        screen: 'SplashLoading',
        params: {nextScreen: 'Home', lastScreen: 'SignIn'},
      });
    } else { // si la respuesta es incorrecta
      RetryAlert('Error', 'Ocurrió un error al iniciar sesión', handleSubmit);
    }
    setLoading(false);
  };
  const checkMode = async () => {
    const modeApplication = await AsyncStorage.getItem(
      Environments.modeApplication.key,
    );
    if (modeApplication) {
      setChecked(modeApplication === Environments.modeApplication.student);
    }
  }

  useEffect(() => {
    checkMode();
  }, []);
  useEffect(() => {
    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => {
      backhandler.remove();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color={colors.dark}
          />
          <TextInput
            placeholder="Email or code"
            placeholderTextColor={colors.dark}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => handleChange('email', text)}
            value={user.email}
            autoComplete="off"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={colors.dark}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.dark}
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            onChangeText={text => handleChange('password', text)}
            autoComplete="off"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialCommunityIcons
              name={!isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={colors.dark}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          {/* <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleCheck()}>
            <MaterialCommunityIcons
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={24}
              color={colors.primary}
            />
            <Text style={styles.label}>Student</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={toggleCheck}>
            <MaterialCommunityIcons
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={24}
              color={colors.primary}
            />
            <Text style={styles.label}>Student</Text>
          </TouchableOpacity> */}
        </View>
        <SubmitButton
          onPress={handleSubmit}
          text={'Log In'}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    marginBottom: 30,
  },
  contentView: {
    width: Dimensions.get('window').width * 0.8,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Hanuman-Bold',
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    color: colors.dark,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.dark,
    width: 200,
  },
});

export default SignIn;
