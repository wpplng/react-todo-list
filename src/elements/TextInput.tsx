import type { ReactElement } from 'react';

type InputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
}: InputProps): ReactElement => {
  return (
    <div className='text-input'>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
