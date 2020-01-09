import React, { PureComponent } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import { data, isNumber } from './constant';
import Button from './Button';
import styles from './styles';
import { onInputValue, onReset } from './action';
import Header from './Header';

class Screen extends PureComponent {
  renderButton = ({ item }) => (
    <Button
      text={item.value}
      type={item.type}
      onPress={() => this.props.onButtonPress(item.value)}
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header onReset={this.props.onReset} />
        <View style={styles.container}>
          <View style={styles.screen}>
            <Text numberOfLines={1} style={styles.screenText}>
              {this.props.displayValue}
            </Text>
          </View>
          <View style={styles.numberPad}>
            <FlatList
              data={data}
              renderItem={this.renderButton}
              keyExtractor={item => item.value}
              scrollEnabled={false}
              numColumns={4}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => {
    const numbers = state.cal.displayValues.filter(i => isNumber(i));
    return {
      displayValue: numbers[numbers.length - 1],
    };
  },
  dispatch => ({
    onButtonPress: value => dispatch(onInputValue(value)),
    onReset: () => dispatch(onReset()),
  })
)(Screen);
