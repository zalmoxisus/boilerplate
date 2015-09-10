import expect from 'expect';
import { ADD_TODO, addTodo, addTodoWithoutCheck } from '../src/actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: ADD_TODO,
      text
    };
    expect(addTodoWithoutCheck(text)).toEqual(expectedAction);
  });

  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: ADD_TODO,
      text
    };
    let res;
    const dispatch = (v) => {res = v};
    const getState = () => { return {todos:[]}; };
    addTodo(text)(dispatch, getState);
    expect(res).toEqual(expectedAction);
  });
});