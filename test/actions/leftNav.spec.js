import expect from 'expect';
import * as actions from '../../src/actions/leftNav';
import { TOGGLE_LEFT_NAV } from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to toggle navigation', () => {
    const expectedAction = { type: TOGGLE_LEFT_NAV };
    expect(actions.toggleLeftNav()).toEqual(expectedAction);
  });
});