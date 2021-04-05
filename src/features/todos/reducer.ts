import { Todo } from "MyModels";
import { Reducer } from "react";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { loadTodosAsync, addTodo, removeTodo } from "./actions";

export const isLoadingTodos: Reducer<boolean, void> = createReducer(
  false as boolean
)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state, action) => false
  );
const todoData = [
  {
    id: "0",
    title: "You can add new todos using the form or load saved snapshot...",
  },
];
export const todos: Reducer<Todo[], void> = createReducer(todoData)
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter((i) => i.id !== action.payload)
  );

const todosReducer = combineReducers({
  isLoadingTodos,
  todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
