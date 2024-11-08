import React from 'react'
import { WrapperHome } from '../components/Wrappers/WrapperHome'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Environments from '../utils/Environments'

export const EventosScreen = () => { 
  return (
    <WrapperHome>
        <View>
            <Text>Eventos</Text>
        </View>
    </WrapperHome>
  )
}
