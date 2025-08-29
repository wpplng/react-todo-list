import { useState, type ReactElement } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import type { TodoType } from '../utilities/types';

const MainContainer = (): ReactElement => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = (newTodo: string, author: string) => {
    const todo: TodoType = {
      todo: newTodo,
      author: author,
      timestamp: Date.now(),
    };

    setTodos((prev) => [todo, ...prev]);
  };

  return (
    <section className='main-container'>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </section>
  );
};

export default MainContainer;
