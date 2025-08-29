import type { ReactElement } from 'react';
import type { TodoType } from '../utilities/types';
import { useState } from 'react';

interface TodoListItemProps {
  todo: TodoType;
  onEditTodo: (updated: TodoType) => void;
  onRemoveTodo: (todo: TodoType) => void;
}

const TodoListItem = ({
  todo,
  onEditTodo,
  onRemoveTodo,
}: TodoListItemProps): ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);
  const [editAuthor, setEditAuthor] = useState(todo.author);

  const renderEditForm = () => {
    return (
      <>
        <span>
          <input
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <input
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
          />
        </span>
        <span className='todo-list-item-end'>
          <span className='material-symbols-outlined' onClick={handleSave}>
            check
          </span>
          <span
            className='material-symbols-outlined'
            onClick={() => setIsEditing(false)}
          >
            close
          </span>
        </span>
      </>
    );
  };

  const renderTodoItems = () => {
    return (
      <>
        <span className='todo-list-item-todo'>{todo.todo}</span>
        <span className='todo-list-item-end'>
          by: {todo.author} {new Date(todo.timestamp ?? 0).toLocaleString()}
          <span
            className='material-symbols-outlined'
            onClick={() => setIsEditing(true)}
          >
            edit
          </span>
          <span
            className='material-symbols-outlined'
            onClick={() => onRemoveTodo(todo)}
          >
            delete
          </span>
        </span>
      </>
    );
  };

  const handleSave = () => {
    onEditTodo({
      ...todo,
      todo: editText,
      author: editAuthor,
    });
    setIsEditing(false);
  };

  return (
    <div className='todo-list-item'>
      <span className='material-symbols-outlined'>check_circle</span>
      {/* <span className='material-symbols-outlined'>radio_button_unchecked</span> */}
      <li>{isEditing ? renderEditForm() : renderTodoItems()}</li>
    </div>
  );
};

export default TodoListItem;
