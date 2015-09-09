import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions';

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

const visibilityFilterSelector = state => state.visibilityFilter;
const todosSelector = state => state.todos;

export const visibleTodosSelector = createSelector(
  visibilityFilterSelector,
  todosSelector,
  (visibilityFilter, todos) => {
    return {
      visibleTodos: selectTodos(todos, visibilityFilter),
      visibilityFilter
    };
  }
);