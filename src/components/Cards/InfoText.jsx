import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import colors from '../../utils/Colors';

export const InfoText = ({children}) => {
  return (
    <View
      style={{
        display: 'flex',  
        flexDirection: 'row',
        // backgroundColor: colors.teal,
        // borderBottomWidth: 1,
        // borderBottomColor: colors.grey, 
        justifyContent:"flex-start",
        alignItems:"center",
        padding: 10,
        gap: 5,
        width: Dimensions.get('window').width * 0.9,
        marginTop: 10,
      }}>
        {children}
    </View>
  );
};
