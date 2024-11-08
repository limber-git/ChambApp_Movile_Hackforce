import React from 'react'
import CBA from '../../assets/CBA.png';
import { Image } from 'react-native';

export const Logo = ({width,height}) => {
  return (
    <Image source={CBA} style={{width: width, height: height}} /> 
  )
}
