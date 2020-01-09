import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/Button';
import styles from '../src/styles';

describe('A button with type 0', () => {
  let component;
  let onPress;

  beforeEach(() => {
    onPress = jest.fn();
    component = shallow(<Button text="0" type={0} onPress={onPress} />);
  });

  it('should renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have correct text', () => {
    expect(
      component
        .find('Text')
        .children()
        .text()
    ).toEqual('0');
  });

  it('should call onPress', () => {
    component
      .find('TouchableOpacity')
      .at(0)
      .simulate('press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should have button style of type 0', () => {
    expect(
      component
        .find('TouchableOpacity')
        .at(0)
        .props().style
    ).toEqual(styles.buttonDefault);
    expect(
      component
        .find('Text')
        .at(0)
        .props().style
    ).toEqual(styles.buttonTextDefault);
  });
});

describe('A button with type 1', () => {
  let component;
  let onPress;

  beforeEach(() => {
    onPress = jest.fn();
    component = shallow(<Button text="1" type={1} onPress={onPress} />);
  });

  it('should renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have correct text', () => {
    expect(
      component
        .find('Text')
        .children()
        .text()
    ).toEqual('1');
  });

  it('should call onPress', () => {
    component
      .find('TouchableOpacity')
      .at(0)
      .simulate('press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should have button style of type 1', () => {
    expect(
      component
        .find('TouchableOpacity')
        .at(0)
        .props().style
    ).toEqual(styles.buttonType1);
    expect(
      component
        .find('Text')
        .at(0)
        .props().style
    ).toEqual(styles.buttonTextType1);
  });
});
