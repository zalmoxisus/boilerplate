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
// accessing props via the second argument
const maxTodosSelector = (_, props) => props.maxTodos;

export const visibleTodosSelector = createSelector(
  visibilityFilterSelector,
  todosSelector,
  maxTodosSelector,
  (visibilityFilter, todos, maxTodos) => {
    const visibleTodos = selectTodos(todos, visibilityFilter).slice(0, maxTodos);
    return {
      visibleTodos,
      visibilityFilter
    };
  }
);