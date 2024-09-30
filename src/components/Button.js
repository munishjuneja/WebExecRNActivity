import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

function Button({
  children,
  onPress,
  buttonStyle = {},
  labelStyle = {},
  type = 'primary',
}) {
  return (
    <TouchableHighlight
      style={{
        ...styles.button,
        ...(type === 'secondary' ? styles.secondaryButton : {}),
        ...buttonStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.buttonLabel,
          ...(type === 'secondary' ? styles.secondaryButtonLabel : {}),
          ...labelStyle,
        }}>
        {children}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: 'white',
    borderColor: '#0072c6',
  },
  button: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: '#0072c6',
    borderColor: 'white',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButtonLabel: {
    color: '#0072c6',
  },
});
export default Button;
