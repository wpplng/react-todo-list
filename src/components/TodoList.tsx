import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps): ReactElement => {
  return (
    <section className='todo-list'>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.todo} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
