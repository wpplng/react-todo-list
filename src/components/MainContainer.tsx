import { useState, type ReactElement } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import type { TodoType } from '../utilities/types';

const MainContainer = (): ReactElement => {
  const [formData, setFormData] = useState<TodoType>({
    todo: '',
    author: '',
    timestamp: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.timestamp = Date.now();

    console.log(formData);
    setFormData({ todo: '', author: '', timestamp: null });
  };

  return (
    <section className='main-container'>
      <AddTodo
        onChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
      <TodoList />
    </section>
  );
};

export default MainContainer;
