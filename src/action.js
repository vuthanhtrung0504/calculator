import { actionTypes } from './constant';

export const onInputValue = value => ({
  type: actionTypes.INPUT_VALUE,
  value,
});

export const onReset = () => ({
  type: actionTypes.RESET,
});
