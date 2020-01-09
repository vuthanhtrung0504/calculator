export const data = [
  { type: 0, value: '7' },
  { type: 0, value: '8' },
  { type: 0, value: '9' },
  { type: 1, value: '/' },
  { type: 0, value: '4' },
  { type: 0, value: '5' },
  { type: 0, value: '6' },
  { type: 1, value: '*' },
  { type: 0, value: '1' },
  { type: 0, value: '2' },
  { type: 0, value: '3' },
  { type: 1, value: '-' },
  { type: 0, value: '0' },
  { type: 0, value: '.' },
  { type: 1, value: '=' },
  { type: 1, value: '+' },
];

export const iphoneXWidth = 375;

export const iphoneXHeight = 812;

export const colors = {
  GREY: '#DFE3E8',
  BLACK: '#212B36',
  WHITE: '#ffffff',
  ORANGE: '#ff9200',
};

export const actionTypes = {
  INPUT_VALUE: 'INPUT_VALUE',
  RESET: 'RESET',
};

export const isNumber = value => !Number.isNaN(parseFloat(value));

export const isOperator = e => ['+', '-', '*', '/'].includes(e);

export const calculateArray = array => eval(array.toString().replace(/,|=/g, ''));
