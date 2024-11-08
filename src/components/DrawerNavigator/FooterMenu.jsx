import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const FooterMenu = ({handleLogout}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        height: '100%',
      }}>
      <View
        style={{
          borderTopWidth: 0.5,
          borderColor: colors.grey,
          paddingTop: 20,
          gap: 20,
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 10,
            gap: 10,
          }}>
          <MaterialCommunityIcons name="cog" size={20} color={colors.light} />
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.light,
              fontSize: 16,
            }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 10,
            gap: 10,
          }}>
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color={colors.light}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.light,
              fontSize: 16,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
