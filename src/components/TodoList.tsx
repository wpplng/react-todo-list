import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps): ReactElement => {
  console.log(todos);
  return <div>TodoList</div>;
};
export default TodoList;
