import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';

interface TodoListItemProps {
  todo: TodoType;
}

const TodoListItem = ({ todo }: TodoListItemProps): ReactElement => {
  return (
    <div className='todo-list-item'>
      <span className='material-symbols-outlined'>check_circle</span>
      {/* <span className='material-symbols-outlined'>radio_button_unchecked</span> */}
      <li>
        <span className='todo-list-item-todo'>{todo.todo}</span>
        <span className='todo-list-item-end'>
          by: {todo.author}{' '}
          {new Date(todo.timestamp ? todo.timestamp : 0).toLocaleString()}
        </span>
      </li>
      <span className='material-symbols-outlined'>edit</span>
      <span className='material-symbols-outlined'>delete</span>
    </div>
  );
};

export default TodoListItem;
