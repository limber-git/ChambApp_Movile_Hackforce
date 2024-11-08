import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Environments from '../utils/Environments';
import {useNavigation} from '@react-navigation/native';
import {WrapperHome} from '../components/Wrappers/WrapperHome';
import {useContext} from 'react';
import {DataContext} from '../app/Context';
import {Dimensions} from 'react-native';
import colors from '../utils/Colors';
import ProfileAvatar from '../components/Icons/StudentIconSvg';
import {InfoText} from '../components/Cards/InfoText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const {auth} = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <WrapperHome>
      <View style={styles.header}>
        {auth?.user?._profileImage ? (
          <Image
            source={{uri: auth?.user?._profileImage}}
            style={{width: 100, height: 100, borderRadius: 50, margin: 10}}
          />
        ) : (
          <ProfileAvatar width={100} height={100} />
        )}
      </View>

      <View style={{padding: 10, display: 'flex', alignItems: 'center'}}>
        <Text
          style={{fontSize: 18, fontWeight: 'bold', color: colors.blueGrey}}>
          {auth?.user?.nombres + ' ' + auth?.user?.apellidos}
        </Text>
      </View>
      {auth?.user?.email ||
        (auth?.user?.correo && (
          <InfoText>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={colors.grey}
            />
            <Text style={{color: colors.grey}}>
              {auth?.user?.email || auth?.user?.correo}
            </Text>
          </InfoText>
        ))} 
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 10,
          width: Dimensions.get('window').width * 0.9,
          marginTop: 10, 
          bottom: 10,
          position: 'absolute',
        }}>
        <Text style={{color: colors.light, textAlign: 'center'}}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </WrapperHome>
  );
};
const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.2,
  },
});
export default ProfileScreen;
