import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/Colors';
import {DataContext} from '../../app/Context'; 
import SVGComponent from '../Icons/StudentIconSvg';
 
export const HeaderMenu = () => {
  const {auth} = useContext(DataContext); 
  return (
    <View
      style={{
        flex: 1,  
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
      }}>
      {
        auth?.user?._profileImage?<Image
        source={{uri: auth?.user?._profileImage}}
        style={{width: 80, height: 80, borderRadius: 50, margin: 10}}
      />:(
        <SVGComponent width={80} height={80} />
      )
        
      }
      <View>
        {
          auth.user && <Text
          style={{
            fontWeight: 'semibold',
            color: colors.light,
          }}>
          {auth?.user?.nombres+' '+auth?.user?.apellidos}
        </Text>
        }
      </View>
    </View>
  );
};
