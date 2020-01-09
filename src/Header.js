import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = ({ onReset }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>Calculator</Text>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
