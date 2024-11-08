import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../utils/Colors';

export const SubmitButton = ({onPress, text, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {!loading ? (
        <Text style={styles.buttonText}>{text}</Text>
      ) : (
        <ActivityIndicator size="small" color={colors.light} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
