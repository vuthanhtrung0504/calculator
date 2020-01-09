import configureMockStore from 'redux-mock-store';
import { onInputValue, onReset } from '../src/action';
import { actionTypes } from '../src/constant';

describe('Actions', () => {
  let mockStore;
  const value = '9';

  beforeEach(() => {
    mockStore = configureMockStore([])();
  });

  it('should create an action to input value', () => {
    const expectedAction = {
      type: actionTypes.INPUT_VALUE,
      value,
    };
    expect(onInputValue(value)).toEqual(expectedAction);
  });

  it('should return expected actions when dispatch onInputValue', () => {
    const expectedActions = [{ type: actionTypes.INPUT_VALUE, value }];
    mockStore.dispatch(onInputValue(value));
    expect(mockStore.getActions()).toEqual(expectedActions);
  });

  it('should create an action to reset display value', () => {
    const expectedAction = {
      type: actionTypes.RESET,
    };
    expect(onReset()).toEqual(expectedAction);
  });

  it('should return expected actions when dispatch onReset', () => {
    const expectedActions = [{ type: actionTypes.RESET }];
    mockStore.dispatch(onReset());
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});
