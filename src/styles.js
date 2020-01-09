import { StyleSheet, Dimensions } from 'react-native';
import { colors, iphoneXHeight, iphoneXWidth } from './constant';

let { width, height } = Dimensions.get('window');

export const changeValue = (newWidth, newHeight) => {
  width = newWidth;
  height = newHeight;
};

export const setValue = value => {
  const ratio = (height * width) / (iphoneXHeight * iphoneXWidth);
  return ratio >= 1 ? value : value * ratio;
};

export const setYAxisValue = value => {
  const ratio = height / iphoneXHeight;
  return ratio > 1 ? value : value * ratio;
};

export const setXAxisValue = value => {
  const ratio = width / iphoneXWidth;
  return ratio >= 1 ? value : value * ratio;
};

const button = {
  margin: setValue(7),
  width: setValue(70),
  height: setValue(70),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.GREY,
  borderRadius: setValue(70) / 2,
  maxHeight: setYAxisValue(82),
};

const buttonText = { fontSize: setXAxisValue(28), fontWeight: '500' };

export default StyleSheet.create({
  buttonDefault: { ...button },
  buttonType1: {
    ...button,
    backgroundColor: colors.ORANGE,
  },
  buttonTextDefault: { ...buttonText },
  buttonTextType1: {
    ...buttonText,
    fontSize: setXAxisValue(30),
    maxHeight: setYAxisValue(42),
  },
  screenText: {
    fontSize: setXAxisValue(60),
    fontWeight: '400',
    paddingHorizontal: setXAxisValue(15),
  },
  numberPad: { flex: 1, flexDirection: 'row' },
  screen: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: setYAxisValue(40),
    marginBottom: setYAxisValue(30),
    marginHorizontal: setXAxisValue(10),
  },
  container: { flex: 1, padding: setValue(10) },
  safeView: { flex: 1, alignItems: 'center' },
  headerView: {
    height: setYAxisValue(40),
    width: '100%',
    borderBottomColor: colors.BLACK,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  resetButton: {
    alignSelf: 'center',
    position: 'absolute',
    right: setXAxisValue(10),
  },
  headerTitle: {
    fontSize: setXAxisValue(18),
    fontWeight: 'bold',
  },
  resetText: {
    fontSize: setXAxisValue(14),
  },
});
