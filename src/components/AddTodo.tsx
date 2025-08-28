import type { ReactElement } from 'react';
import { Button } from '../elements/Button';
import { TextInput } from '../elements/TextInput';
import type { TodoType } from '../utilities/types';

interface AddTodoProps {
  newTodo: TodoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddTodo = (props: AddTodoProps): ReactElement => {
  const { onSubmit, onChange, newTodo } = props;

  return (
    <form onSubmit={onSubmit} className='add-todo'>
      <TextInput
        id='todo'
        name='todo'
        label='What do you need to do?'
        type='text'
        value={newTodo.todo}
        onChange={onChange}
      />
      <TextInput
        id='author'
        name='author'
        label='Who wrote the todo?'
        type='text'
        value={newTodo.author}
        onChange={onChange}
      />
      <Button type='submit' text='Add todo' disabled={false} />
    </form>
  );
};

export default AddTodo;
