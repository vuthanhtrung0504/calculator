import { actionTypes, isNumber, isOperator, calculateArray } from './constant';

const INITIAL_STATE = {
  displayValues: ['0'],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INPUT_VALUE: {
      let { value } = action;
      let { displayValues } = state;
      if (displayValues.includes('=')) {
        displayValues = [displayValues[displayValues.length - 1]];
      }
      const lastIndex = displayValues.length - 1;
      const lastValue = displayValues[lastIndex];
      if (isNumber(value) || value === '.') {
        if (isOperator(lastValue)) {
          if (value === '.') {
            displayValues.push('0.');
          } else {
            displayValues.push(value);
          }
        } else if (isNumber(lastValue) || value === '.') {
          if (lastValue.includes('.') && value === '.') {
            value = '';
          }
          let newValue = `${lastValue}${value}`;
          if (!newValue.includes('.')) {
            newValue = Number(newValue).toString();
          }
          displayValues[lastIndex] = newValue;
        } else {
          displayValues = ['0'];
        }
      } else if (isOperator(value)) {
        if (isNumber(lastValue)) {
          displayValues = [String(calculateArray(displayValues))];
          displayValues.push(value);
        } else if (isOperator(lastValue)) {
          displayValues[lastIndex] = value;
        } else {
          displayValues = ['0'];
        }
      } else if (value === '=') {
        if (isOperator(lastValue)) {
          displayValues.splice(lastIndex);
        }
        displayValues.push(value);
        displayValues.push(String(calculateArray(displayValues)));
      } else {
        displayValues = state.displayValues;
      }
      const newState = { displayValues };
      return newState;
    }
    case actionTypes.RESET:
      return {
        ...state,
        displayValues: ['0'],
      };
    default:
      return state;
  }
};

export default reducer;
