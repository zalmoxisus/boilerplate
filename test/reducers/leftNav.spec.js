import expect from 'expect';
import reducer from '../../src/reducers/leftNav';
import { TOGGLE_LEFT_NAV } from '../../src/constants/ActionTypes';

describe('leftNav reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({toggled: false});
  });
  
  it('should handle toggle navigation', () => {
    expect(
      reducer(undefined, {type: TOGGLE_LEFT_NAV})
    ).toEqual({toggled: true});
  });
});
