import { useEffect, useState, type ReactElement } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import type { TodoType } from '../utilities/types';
import { v4 as uuid } from 'uuid';

const MainContainer = (): ReactElement => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  const handleAddTodo = (newTodo: string, author: string) => {
    const todo: TodoType = {
      id: uuid(),
      todo: newTodo,
      author: author,
      timestamp: Date.now(),
      completed: false,
    };

    setTodos((prev) => [todo, ...prev]);
  };

  const handleEditTodo = (updated: TodoType) => {
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleRemoveTodo = (todo: TodoType) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const handleToggleCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='main-container'>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onRemoveTodo={handleRemoveTodo}
        onToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
};

export default MainContainer;
