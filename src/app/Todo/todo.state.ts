import ToDo from './todo.model';

export default class ToDoState {
  ToDos: Array<ToDo> = [];
  ToDoError: Error | undefined | null;
}

export const initializeState = (): ToDoState => {
  return { 
    ToDos: Array<ToDo>(), 
    ToDoError: null };
};