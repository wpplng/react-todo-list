import type { ReactElement } from 'react';
import { Button } from '../elements/Button';

const AddTodo = (): ReactElement => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className='add-todo'>
      <input type='text' placeholder='What do you need to do?' required />
      <input type='text' placeholder='Who added the todo?' required />
      <Button type='submit' text='Add todo' disabled={false} />
    </form>
  );
};
export default AddTodo;
