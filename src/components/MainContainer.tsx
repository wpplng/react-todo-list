import { useState, type ReactElement } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import type { TodoType } from '../utilities/types';
import { v4 as uuid } from 'uuid';

const MainContainer = (): ReactElement => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const saveToLocalStorage = (todos: TodoType[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleAddTodo = (newTodo: string, author: string) => {
    const todo: TodoType = {
      id: uuid(),
      todo: newTodo,
      author: author,
      timestamp: Date.now(),
      completed: false,
    };

    setTodos((prev) => [todo, ...prev]);
    saveToLocalStorage(todos);
  };

  return (
    <div className='main-container'>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default MainContainer;
