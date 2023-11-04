import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

export default function Button({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ color: colors.lightText }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBgColor,
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
