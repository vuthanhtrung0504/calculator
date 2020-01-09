import { setValue, setXAxisValue, setYAxisValue, changeValue } from '../src/styles';

describe('Responsive function for iphone X', () => {
  beforeAll(() => {
    changeValue(375, 812);
  });

  it('should setValue correct', () => {
    const response = setValue(100);
    expect(response).toEqual(100);
  });

  it('should setXAxisValue correct', () => {
    const response = setXAxisValue(100);
    expect(response).toEqual(100);
  });

  it('should setYAxisValue correct', () => {
    const response = setYAxisValue(100);
    expect(response).toEqual(100);
  });
});

describe('Responsive function for iphone 5', () => {
  beforeAll(() => {
    changeValue(320, 568);
  });

  it('should setValue correct', () => {
    const response = setValue(100);
    expect(response).toEqual(59.691297208538586);
  });

  it('should setXAxisValue correct', () => {
    const response = setXAxisValue(100);
    expect(response).toEqual(85.33333333333334);
  });

  it('should setYAxisValue correct', () => {
    const response = setYAxisValue(100);
    expect(response).toEqual(69.95073891625616);
  });
});
