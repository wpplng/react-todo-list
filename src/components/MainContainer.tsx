import type { ReactElement } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const MainContainer = (): ReactElement => {
  return (
    <section className='main-container'>
      <AddTodo />
      <TodoList />
    </section>
  );
};
export default MainContainer;
