import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';

export const WrapperHome = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    alignItems: 'center',
    backgroundColor: "#F7F7FB", 
    height:"100%"
  }
});
