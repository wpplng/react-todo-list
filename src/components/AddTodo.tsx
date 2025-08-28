import type { ReactElement } from 'react';
import { Button } from '../elements/Button';
import { TextInput } from '../elements/TextInput';
import type { TodoType } from '../utilities/types';

interface AddTodoProps {
  formData: TodoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddTodo = (props: AddTodoProps): ReactElement => {
  const { onSubmit, onChange, formData } = props;

  return (
    <form onSubmit={onSubmit} className='add-todo'>
      <TextInput
        id='todo'
        name='todo'
        label='What do you need to do?'
        type='text'
        value={formData.todo}
        onChange={onChange}
      />
      <TextInput
        id='author'
        name='author'
        label='What do you need to do?'
        type='text'
        value={formData.author}
        onChange={onChange}
      />
      <Button type='submit' text='Add todo' disabled={false} />
    </form>
  );
};

export default AddTodo;
