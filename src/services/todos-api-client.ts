import { Todo } from "MyModels";

let todos: Todo[] = [
  { id: "0", title: `Yo, your snapshot has been loaded successfully!` },
];

export function loadSnapshot(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
}

export function saveSnapshot(data: Todo[]): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos = data;
      resolve(undefined);
    }, 500);
  });
}
