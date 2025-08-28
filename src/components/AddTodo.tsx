import type { ReactElement } from 'react';

const AddTodo = (): ReactElement => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className='add-todo'>
      <input type='text' placeholder='What do you need to do?' required />
      <input type='text' placeholder='Who added the todo?' required />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
export default AddTodo;
