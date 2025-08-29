import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
  onRemoveTodo: (todo: TodoType) => void;
}

const TodoList = ({ todos, onRemoveTodo }: TodoListProps): ReactElement => {
  return (
    <article className='todo-list'>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </article>
  );
};
export default TodoList;
