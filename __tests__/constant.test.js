import { isNumber, isOperator, calculateArray } from '../src/constant';

describe('Validate function', () => {
  it('should validate string is number or not', () => {
    const number1 = isNumber(1);
    expect(number1).toEqual(true);
    const number2 = isNumber('1');
    expect(number2).toEqual(true);
    const number3 = isNumber('1.1');
    expect(number3).toEqual(true);
    const number4 = isNumber('string');
    expect(number4).toEqual(false);
  });

  it('should validate string is operator or not', () => {
    const operator1 = isOperator('+');
    expect(operator1).toEqual(true);
    const operator2 = isOperator('-');
    expect(operator2).toEqual(true);
    const operator3 = isOperator('*');
    expect(operator3).toEqual(true);
    const operator4 = isOperator('/');
    expect(operator4).toEqual(true);
    const operator5 = isOperator('=');
    expect(operator5).toEqual(false);
    const operator6 = isOperator('string');
    expect(operator6).toEqual(false);
    const operator7 = isOperator(1);
    expect(operator7).toEqual(false);
  });

  it('should calculate the operation by array', () => {
    const operation1 = calculateArray(['1', '+', '2']);
    expect(operation1).toEqual(3);
    const operation2 = calculateArray(['1', '+', '2', '=']);
    expect(operation2).toEqual(3);
  });
});
