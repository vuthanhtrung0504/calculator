import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ text, type, onPress }) => {
  const containerStyle = type === 0 ? styles.buttonDefault : styles.buttonType1;
  const textStyle = type === 0 ? styles.buttonTextDefault : styles.buttonTextType1;
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
