import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
  onEditTodo: (updated: TodoType) => void;
  onRemoveTodo: (todo: TodoType) => void;
  onToggleCompleted: (id: string) => void;
}

const TodoList = ({
  todos,
  onEditTodo,
  onRemoveTodo,
  onToggleCompleted,
}: TodoListProps): ReactElement => {
  return (
    <article className='todo-list'>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onEditTodo={onEditTodo}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </ul>
    </article>
  );
};
export default TodoList;
