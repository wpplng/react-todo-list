import { useState, type ReactElement } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import type { TodoType } from '../utilities/types';

const MainContainer = (): ReactElement => {
  // FIXME: Move new todo state and onchange to add todo component to prevent re-render
  const [newTodo, setNewTodo] = useState<TodoType>({
    todo: '',
    author: '',
    timestamp: undefined,
  });
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo: TodoType = {
      todo: newTodo.todo,
      author: newTodo.author,
      timestamp: Date.now(),
    };

    setTodos((prev) => [todo, ...prev]);

    setNewTodo({ todo: '', author: '', timestamp: undefined });
  };

  return (
    <section className='main-container'>
      <AddTodo
        onChange={handleChange}
        onSubmit={handleSubmit}
        newTodo={newTodo}
      />
      <TodoList todos={todos} />
    </section>
  );
};

export default MainContainer;
