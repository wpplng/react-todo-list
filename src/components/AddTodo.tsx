import { useState, type ReactElement } from 'react';
import { Button } from '../elements/Button';
import { TextInput } from '../elements/TextInput';

interface AddTodoProps {
  onAddTodo: (newTodo: string, author: string) => void;
}

const AddTodo = ({ onAddTodo }: AddTodoProps): ReactElement => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(newTodo, author);
    setNewTodo('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-todo'>
      <TextInput
        id='todo'
        name='todo'
        label='What do you need to do?'
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <TextInput
        id='author'
        name='author'
        label='Who wrote the todo?'
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button type='submit' text='Add todo' disabled={false} />
    </form>
  );
};

export default AddTodo;
