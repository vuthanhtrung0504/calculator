import reducer from '../src/reducer';
import { actionTypes } from '../src/constant';

describe('Calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ displayValues: ['0'] });
  });

  it('should handle INPUT_VALUE type', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.INPUT_VALUE,
        value: '1',
      })
    ).toEqual({
      displayValues: ['1'],
    });

    expect(
      reducer(
        { displayValues: ['0'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '1',
        }
      )
    ).toEqual({ displayValues: ['1'] });

    expect(
      reducer(
        { displayValues: ['1'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '1',
        }
      )
    ).toEqual({ displayValues: ['11'] });

    expect(
      reducer(
        { displayValues: ['1', '+', '1'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '1',
        }
      )
    ).toEqual({ displayValues: ['1', '+', '11'] });

    expect(
      reducer(
        { displayValues: ['1', '+'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '1',
        }
      )
    ).toEqual({ displayValues: ['1', '+', '1'] });

    expect(
      reducer(
        { displayValues: ['1', '+'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '*',
        }
      )
    ).toEqual({ displayValues: ['1', '*'] });

    expect(
      reducer(
        { displayValues: ['1', '+', '2'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '=',
        }
      )
    ).toEqual({ displayValues: ['1', '+', '2', '=', '3'] });

    expect(
      reducer(
        { displayValues: ['1', '+', '2', '+'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '=',
        }
      )
    ).toEqual({ displayValues: ['1', '+', '2', '=', '3'] });

    expect(
      reducer(
        { displayValues: ['1', '+', '2', '=', '3'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '3',
        }
      )
    ).toEqual({ displayValues: ['33'] });

    expect(
      reducer(
        { displayValues: ['1', '+', '2', '=', '3'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '+',
        }
      )
    ).toEqual({ displayValues: ['3', '+'] });

    expect(
      reducer(
        { displayValues: ['1'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '.',
        }
      )
    ).toEqual({ displayValues: ['1.'] });

    expect(
      reducer(
        { displayValues: ['1.1'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '.',
        }
      )
    ).toEqual({ displayValues: ['1.1'] });

    expect(
      reducer(
        { displayValues: ['1.'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '.',
        }
      )
    ).toEqual({ displayValues: ['1.'] });

    expect(
      reducer(
        { displayValues: ['1', '+'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '.',
        }
      )
    ).toEqual({ displayValues: ['1', '+', '0.'] });

    expect(
      reducer(
        { displayValues: ['1', '+'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: 'random',
        }
      )
    ).toEqual({ displayValues: ['1', '+'] });

    expect(
      reducer(
        { displayValues: ['random'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '1',
        }
      )
    ).toEqual({ displayValues: ['0'] });

    expect(
      reducer(
        { displayValues: ['random'] },
        {
          type: actionTypes.INPUT_VALUE,
          value: '+',
        }
      )
    ).toEqual({ displayValues: ['0'] });
  });

  it('should handle RESET type', () => {
    expect(
      reducer(
        { displayValues: ['1', '+'] },
        {
          type: actionTypes.RESET,
          value: '.',
        }
      )
    ).toEqual({ displayValues: ['0'] });
  });
});
